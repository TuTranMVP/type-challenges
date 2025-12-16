<!--info-header-start--><h1>MergeAll <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23object-999" alt="#object"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/></h1><blockquote><p>bởi scarf <a href="https://github.com/scarf005" target="_blank">@scarf005</a></p></blockquote><p><a href="https://tsch.js.org/27932/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union.

Ví dụ:

```ts
type Foo = { a: 1; b: 2 }
type Bar = { a: 2 }
type Baz = { c: 3 }

type Result = MergeAll<[Foo, Bar, Baz]> // kỳ vọng to be { a: 1 | 2; b: 2; c: 3 }
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/27932/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/27932/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->