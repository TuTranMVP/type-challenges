<!--info-header-start--><h1>Length of String 2 <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>bởi null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/651/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

Triển khai a type `LengthOfString<S>` that calculates the length of the template string (as in [298 - Length of String](https://tsch.js.org/298)):

```ts
type T0 = LengthOfString<"foo"> // 3
```

The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited bởi the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/651/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/651/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md" target="_blank"><img src="https://img.shields.io/badge/-298%E3%83%BBLength%20of%20String-d9901a" alt="298・Length of String"/></a> <!--info-footer-end-->
