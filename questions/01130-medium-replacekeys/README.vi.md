<!--info-header-start--><h1>ReplaceKeys <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/></h1><blockquote><p>bởi 贱贱 <a href="https://github.com/lullabyjune" target="_blank">@lullabyjune</a></p></blockquote><p><a href="https://tsch.js.org/1130/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

Triển khai a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing,
A type takes three arguments.

Ví dụ:

```ts
type NodeA = {
  type: "A"
  name: string
  flag: number
}

type NodeB = {
  type: "B"
  id: number
  flag: number
}

type NodeC = {
  type: "C"
  name: string
  flag: number
}

type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/1130/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/1130/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
