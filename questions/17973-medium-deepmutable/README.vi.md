<!--info-header-start--><h1>DeepMutable <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><blockquote><p>bởi cutefcc <a href="https://github.com/cutefcc" target="_blank">@cutefcc</a></p></blockquote><p><a href="https://tsch.js.org/17973/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

Triển khai a generic DeepMutable<T> which make every parameter of an object - and its sub-objects recursively - mutable.

Ví dụ

```ts
type X = {
  readonly a: () => 1
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: "s"
        }
        readonly k: "hello"
      }
    }
  }
}

type Expected = {
  a: () => 1
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: "s"
        }
        k: "hello"
      }
    }
  }
}

type Todo = DeepMutable<X> // should be same as `Expected`
```

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself bởi covering as many different cases as possible.

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/17973/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/17973/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
