<!--info-header-start--><h1>StartsWith <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>bởi jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/2688/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

Triển khai `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

Ví dụ

```typescript
type a = StartsWith<'abc', 'ac'> // kỳ vọng to be false
type b = StartsWith<'abc', 'ab'> // kỳ vọng to be true
type c = StartsWith<'abc', 'abcd'> // kỳ vọng to be false
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/2688/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/2688/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md" target="_blank"><img src="https://img.shields.io/badge/-2693%E3%83%BBEndsWith-d9901a" alt="2693・EndsWith"/></a> <!--info-footer-end-->
