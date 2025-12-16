<!--info-header-start--><h1>First of Array <img src="https://img.shields.io/badge/-d%E1%BB%85-7aad0c" alt="dễ"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>bởi Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/14/play" target="_blank"><img src="https://img.shields.io/badge/-B%E1%BA%AFt%20%C4%91%E1%BA%A7u%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a></p><!--info-header-end-->

Triển khai một generic `First<T>` nhận một Array `T` và trả về kiểu của phần tử đầu tiên.

Ví dụ:

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // kỳ vọng là 'a'
type head2 = First<arr2> // kỳ vọng là 3
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay%20l%E1%BA%A1i-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/14/answer" target="_blank"><img src="https://img.shields.io/badge/-Chia%20s%E1%BA%BB%20L%E1%BB%9Di%20gi%E1%BA%A3i-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/14/solutions" target="_blank"><img src="https://img.shields.io/badge/-Xem%20c%C3%A1c%20L%E1%BB%9Di%20gi%E1%BA%A3i-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BBLast%20of%20Array-d9901a" alt="15・Last of Array"/></a> <!--info-footer-end-->
