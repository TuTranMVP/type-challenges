<!--info-header-start--><h1>Exclude <img src="https://img.shields.io/badge/-d%E1%BB%85-7aad0c" alt="dễ"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/></h1><blockquote><p>bởi Zheeeng <a href="https://github.com/zheeeng" target="_blank">@zheeeng</a></p></blockquote><p><a href="https://tsch.js.org/43/play" target="_blank"><img src="https://img.shields.io/badge/-B%E1%BA%AFt%20%C4%91%E1%BA%A7u%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a></p><!--info-header-end-->

Triển khai built-in `Exclude<T, U>`

> Loại trừ khỏi `T` những types có thể gán được cho `U`

Ví dụ:

```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay%20l%E1%BA%A1i-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/43/answer" target="_blank"><img src="https://img.shields.io/badge/-Chia%20s%E1%BA%BB%20L%E1%BB%9Di%20gi%E1%BA%A3i-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/43/solutions" target="_blank"><img src="https://img.shields.io/badge/-Xem%20c%C3%A1c%20L%E1%BB%9Di%20gi%E1%BA%A3i-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
