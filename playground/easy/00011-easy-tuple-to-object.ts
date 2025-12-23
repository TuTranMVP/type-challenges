/*
  11.Tuple to Object (mục đích chuyển đổi tuple thành object)
  -------
  TonyT | by sinoon (@sinoon) #easy #object-keys

  ### ASK
  Cho một mảng (tuple), hãy chuyển nó thành một kiểu object, trong đó key và value đều lấy từ chính phần tử của mảng.

  Example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > Xem trên GitHub: https://tsch.js.org/11
*/

/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K // K là type của key, cũng là value | [Key]: K
}

// Giải thích:
// Line 1: Ràng buộc T phải là một tuple/array readonly (T extends readonly any[])
// Line 2: Sử dụng mapped type để lặp qua tất cả các phần tử K trong T (T[number] lấy tất cả các giá trị trong tuple)
// Line 3: Đặt K làm key và value trong object mới
// Key insight: Sử dụng indexed access type (T[number]) để lấy tất cả các giá trị từ tuple và tạo object từ chúng

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1, 2: 2, 3: 3, 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleSymbol>, { [sym1]: typeof sym1, [sym2]: typeof sym2 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1, '2': '2', 3: 3, '4': '4', [sym1]: typeof sym1 }>>,
]

type error = TupleToObject<[[1, 2], {}]>