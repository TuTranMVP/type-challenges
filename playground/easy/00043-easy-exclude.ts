/*
  43.Exclude (để trừ bớt type khỏi union type)
  -------
  TonyT | bởi Zheeeng (@zheeeng) #easy #built-in #union

  ### Ask
  Cài đặt lại utility type `Exclude<T, U>` có sẵn trong TypeScript
  Loại bỏ khỏi `T` những kiểu mà có thể gán (assignable) cho `U`

  Example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > Xem trên GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T // trừ bớt type khỏi union type

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // có ý nghĩa là 'b' | 'c' vì 'a' bị trừ đi

// const result: Result = 'a'; // lỗi vì 'a' không thuộc 'b' | 'c'