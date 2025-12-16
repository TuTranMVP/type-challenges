<!--info-header-start--><h1>Take Elements <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>bởi Eirik Måseidvåg <a href="https://github.com/Eirmas" target="_blank">@Eirmas</a></p></blockquote><p><a href="https://tsch.js.org/34286/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Triển khai a type `Take<N, Arr>` that returns the first `N` elements from an array `Arr`. If `N` is negative, return the last `|N|` elements

Ví dụ,
```ts
type T0 = Take<2, [1, 2, 3]> // [1, 2]
type T1 = Take<3, ['1', 2, true, false]> // ['1', 2, true]
type T2 = Take<-2, [1, 2, 3]> // [2, 3]
type T3 = Take<0, [1, 2, 3]> // []
type T4 = Take<5, [1, 2, 3]> // [1, 2, 3]
type T5 = Take<3, []> // []
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/34286/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/34286/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00216-extreme-slice/README.md" target="_blank"><img src="https://img.shields.io/badge/-216%E3%83%BBSlice-b11b8d" alt="216・Slice"/></a> <!--info-footer-end-->