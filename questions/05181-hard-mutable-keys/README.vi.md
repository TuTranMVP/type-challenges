<!--info-header-start--><h1>Mutable Keys <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>bởi Yugang Cao <a href="https://github.com/Talljack" target="_blank">@Talljack</a></p></blockquote><p><a href="https://tsch.js.org/5181/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Triển khai the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.

Ví dụ:

```ts
type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// kỳ vọng to be “bar”
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/5181/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/5181/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md" target="_blank"><img src="https://img.shields.io/badge/-2793%E3%83%BBMutable-d9901a" alt="2793・Mutable"/></a> <!--info-footer-end-->
