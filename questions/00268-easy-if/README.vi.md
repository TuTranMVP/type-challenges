<!--info-header-start--><h1>If <img src="https://img.shields.io/badge/-d%E1%BB%85-7aad0c" alt="dễ"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>bởi Pavel Glushkov <a href="https://github.com/pashutk" target="_blank">@pashutk</a></p></blockquote><p><a href="https://tsch.js.org/268/play" target="_blank"><img src="https://img.shields.io/badge/-B%E1%BA%AFt%20%C4%91%E1%BA%A7u%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a></p><!--info-header-end-->

Triển khai util type `If<C, T, F>` nhận điều kiện `C`, giá trị truthy `T`, và giá trị falsy `F`. `C` được kỳ vọng là `true` hoặc `false` trong khi `T` và `F` có thể là bất kỳ type nào.

Ví dụ:

```ts
type A = If<true, 'a', 'b'>  // kỳ vọng là 'a'
type B = If<false, 'a', 'b'> // kỳ vọng là 'b'
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay%20l%E1%BA%A1i-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/268/answer" target="_blank"><img src="https://img.shields.io/badge/-Chia%20s%E1%BA%BB%20L%E1%BB%9Di%20gi%E1%BA%A3i-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/268/solutions" target="_blank"><img src="https://img.shields.io/badge/-Xem%20c%C3%A1c%20L%E1%BB%9Di%20gi%E1%BA%A3i-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
