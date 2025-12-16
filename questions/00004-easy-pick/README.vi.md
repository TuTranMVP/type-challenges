<!--info-header-start--><h1>Pick <img src="https://img.shields.io/badge/-d%E1%BB%85-7aad0c" alt="dễ"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></h1><blockquote><p>bởi Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/4/play" target="_blank"><img src="https://img.shields.io/badge/-B%E1%BA%AFt%20%C4%91%E1%BA%A7u%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a></p><!--info-header-end-->

Triển khai built-in `Pick<T, K>` generic mà không sử dụng nó.

Tạo một type bằng cách chọn tập hợp các properties `K` từ `T`

Ví dụ:

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay%20l%E1%BA%A1i-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/4/answer" target="_blank"><img src="https://img.shields.io/badge/-Chia%20s%E1%BA%BB%20L%E1%BB%9Di%20gi%E1%BA%A3i-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/4/solutions" target="_blank"><img src="https://img.shields.io/badge/-Xem%20c%C3%A1c%20L%E1%BB%9Di%20gi%E1%BA%A3i-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BBOmit-d9901a" alt="3・Omit"/></a> <!--info-footer-end-->
