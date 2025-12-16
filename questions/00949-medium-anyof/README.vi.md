<!--info-header-start--><h1>AnyOf <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>bởi null <a href="https://github.com/kynefuk" target="_blank">@kynefuk</a></p></blockquote><p><a href="https://tsch.js.org/949/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

Triển khai Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.

Ví dụ:

```ts
type Sample1 = AnyOf<[1, "", false, [], {}]> // kỳ vọng to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]> // kỳ vọng to be false.
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/949/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/949/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
