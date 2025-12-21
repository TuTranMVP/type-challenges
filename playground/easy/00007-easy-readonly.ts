/*
  7.Readonly (only readonly properties)
  -------
  TonyT | bởi Anthony Fu (@antfu) #easy #built-in #readonly #object-keys

  ### Asktion
  Tự triển khai generic `Readonly<T>` mà không dùng sẵn có.
  Tạo một kiểu với tất cả thuộc tính của T đều là readonly, nghĩa là các thuộc tính này không thể gán lại giá trị.

  Ex:

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Lỗi: không thể gán lại thuộc tính readonly
  todo.description = "barFoo" // Lỗi: không thể gán lại thuộc tính readonly
  ```
  ### Links
  > Xem trên GitHub: https://tsch.js.org/7
*/

/* _____________ Your Code Here _____________ */

type MyReadonly<T> = { readonly [ K in keyof T ]: T[K] }

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo>, Readonly<Todo>>>,
]

interface Todo {
  title: string
  description: string
}

// let todo: MyReadonly<Todo> = {
//   title: "Hey",
//   description: "foobar"
// }

// todo.title = "Hello" // Error: cannot reassign attribute readonly
// todo.description = "barFoo" // Error: cannot reassign attribute readonly