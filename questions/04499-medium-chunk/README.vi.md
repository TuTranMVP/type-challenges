<!--info-header-start--><h1>Chunk <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></h1><blockquote><p>bởi キリサメ qianxi <a href="https://github.com/qianxi0410" target="_blank">@qianxi0410</a></p></blockquote><p><a href="https://tsch.js.org/4499/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it.
`Chunk<T, N>` accepts two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1`

```ts
type exp1 = Chunk<[1, 2, 3], 2> // kỳ vọng to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // kỳ vọng to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // kỳ vọng to be [[1], [2], [3]]
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/4499/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/4499/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->