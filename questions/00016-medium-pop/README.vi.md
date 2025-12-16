<!--info-header-start--><h1>Pop <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>bởi Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/16/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

> TypeScript 4.0 is recommended in this challenge

Triển khai a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

Ví dụ

```ts
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // kỳ vọng to be ['a', 'b', 'c']
type re2 = Pop<arr2> // kỳ vọng to be [3, 2]
```

**Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/16/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/16/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-7aad0c" alt="14・First of Array"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BBLast%20of%20Array-d9901a" alt="15・Last of Array"/></a> <!--info-footer-end-->
