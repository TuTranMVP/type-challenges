<!--info-header-start--><h1>Intersection <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>bởi Pineapple <a href="https://github.com/Pineapple0919" target="_blank">@Pineapple0919</a></p></blockquote><p><a href="https://tsch.js.org/5423/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Triển khai the type version of Lodash.intersection with a little difference. Intersection<T> takes an Array T containing several arrays or any type element including the union type, and returns a new union containing all intersection elements.

```ts
type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // kỳ vọng to be 2
type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // kỳ vọng to be 2 | 3
type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // kỳ vọng to be never
type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // kỳ vọng to be 3
type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // kỳ vọng to be 2 | 3
type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // kỳ vọng to be never
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/5423/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/5423/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->