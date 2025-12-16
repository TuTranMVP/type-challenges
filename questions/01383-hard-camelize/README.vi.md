<!--info-header-start--><h1>Camelize <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23recursion-999" alt="#recursion"/></h1><blockquote><p>bởi Denis <a href="https://github.com/denchiklut" target="_blank">@denchiklut</a></p></blockquote><p><a href="https://tsch.js.org/1383/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

Triển khai Camelize which converts object from snake_case to to camelCase

```ts
Camelize<{
  some_prop: string, 
  prop: { another_prop: string },
  array: [{ snake_case: string }]
}>

// kỳ vọng to be
// {
//   someProp: string, 
//   prop: { anotherProp: string },
//   array: [{ snakeCase: string }]
// }
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/1383/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/1383/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->