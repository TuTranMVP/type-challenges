<!--info-header-start--><h1>SnakeCase <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/> <img src="https://img.shields.io/badge/-%23string-999" alt="#string"/></h1><blockquote><p>bởi Gabriel Vergnaud <a href="https://github.com/gvergnaud" target="_blank">@gvergnaud</a></p></blockquote><p><a href="https://tsch.js.org/19458/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Create a `SnakeCase<T>` generic that turns a string formatted in **camelCase** into a string formatted in **snake_case**.

A few examples:

```ts
type res1 = SnakeCase<"hello">; // => "hello"
type res2 = SnakeCase<"userName">; // => "user_name"
type res3 = SnakeCase<"getElementById">; // => "get_element_by_id"
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/19458/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/19458/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->