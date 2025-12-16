<!--info-header-start--><h1>Length of Tuple <img src="https://img.shields.io/badge/-d%E1%BB%85-7aad0c" alt="dễ"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></h1><blockquote><p>bởi sinoon <a href="https://github.com/sinoon" target="_blank">@sinoon</a></p></blockquote><p><a href="https://tsch.js.org/18/play" target="_blank"><img src="https://img.shields.io/badge/-B%E1%BA%AFt%20%C4%91%E1%BA%A7u%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a></p><!--info-header-end-->

Cho một tuple, bạn cần tạo một generic `Length` để lấy độ dài của tuple đó.

Ví dụ:

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // kỳ vọng là 4
type spaceXLength = Length<spaceX> // kỳ vọng là 5
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay%20l%E1%BA%A1i-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/18/answer" target="_blank"><img src="https://img.shields.io/badge/-Chia%20s%E1%BA%BB%20L%E1%BB%9Di%20gi%E1%BA%A3i-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/18/solutions" target="_blank"><img src="https://img.shields.io/badge/-Xem%20c%C3%A1c%20L%E1%BB%9Di%20gi%E1%BA%A3i-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
