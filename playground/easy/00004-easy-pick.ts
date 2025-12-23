/*
  4.Pick (select properties)
  -------
  TonyT | bởi Anthony Fu (@antfu) #easy #union #built-in

  ### Asktion
  Hãy tự triển khai generic `Pick<T, K>` mà không sử dụng sẵn có.
  Tạo ra một kiểu mới bằng cách chọn tập hợp các thuộc tính `K` từ `T`

  Ex:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > Xem trên GitHub: https://tsch.js.org/4
*/

/* _____________ Your Code Here _____________ */

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

// Giải thích:
// Line 1: Ràng buộc K phải là tập hợp con của các key trong T (K extends keyof T)
// Line 2: Sử dụng mapped type để tạo kiểu mới với các thuộc tính trong K
// Line 3: Lấy kiểu của từng thuộc tính từ T bằng cách sử dụng T[P]
// Key insight: Kết hợp mapped types và keyof để chọn thuộc tính một cách an toàn từ kiểu ban đầu T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}