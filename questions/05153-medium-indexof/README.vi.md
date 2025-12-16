<!--info-header-start--><h1>IndexOf <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>bởi Pineapple <a href="https://github.com/Pineapple0919" target="_blank">@Pineapple0919</a></p></blockquote><p><a href="https://tsch.js.org/5153/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Triển khai the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

```ts
type Res = IndexOf<[1, 2, 3], 2>; // kỳ vọng to be 1
type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // kỳ vọng to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // kỳ vọng to be -1
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/5153/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/5153/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->