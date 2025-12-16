<!--info-header-start--><h1>C-printf Parser <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>bởi Pig Fang <a href="https://github.com/g-plane" target="_blank">@g-plane</a></p></blockquote><p><a href="https://tsch.js.org/147/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

There is a function in C language: `printf`. This function allows us to print something with formatting. Like this:

```c
printf("The result is %d.", 42);
```

This challenge requires you to parse the input string and extract the format placeholders like `%d` and `%f`. Ví dụ, if the input string is `"The result is %d."`, the parsed result is a tuple `['dec']`.

Here is the mapping:

```typescript
type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/147/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/147/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->