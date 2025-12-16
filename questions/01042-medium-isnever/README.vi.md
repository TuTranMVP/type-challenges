<!--info-header-start--><h1>IsNever <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>bởi hiroya iizuka <a href="https://github.com/hiroyaiizuka" target="_blank">@hiroyaiizuka</a></p></blockquote><p><a href="https://tsch.js.org/1042/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

Triển khai a type IsNever, which takes input type `T`.
If the type of resolves to `never`, return `true`, otherwise `false`.

Ví dụ:

```ts
type A = IsNever<never> // kỳ vọng to be true
type B = IsNever<undefined> // kỳ vọng to be false
type C = IsNever<null> // kỳ vọng to be false
type D = IsNever<[]> // kỳ vọng to be false
type E = IsNever<number> // kỳ vọng to be false
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/1042/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/1042/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md" target="_blank"><img src="https://img.shields.io/badge/-1097%E3%83%BBIsUnion-d9901a" alt="1097・IsUnion"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00223-hard-isany/README.md" target="_blank"><img src="https://img.shields.io/badge/-223%E3%83%BBIsAny-de3d37" alt="223・IsAny"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04484-medium-istuple/README.md" target="_blank"><img src="https://img.shields.io/badge/-4484%E3%83%BBIsTuple-d9901a" alt="4484・IsTuple"/></a> <!--info-footer-end-->
