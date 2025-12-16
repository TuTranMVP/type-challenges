<!--info-header-start--><h1>Percentage Parser <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>bởi SSShuai1999 <a href="https://github.com/SSShuai1999" target="_blank">@SSShuai1999</a></p></blockquote><p><a href="https://tsch.js.org/1978/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

Triển khai PercentageParser<T extends string>.
According to the `/^(\+|\-)?(\d*)?(\%)?$/` regularity to match T and get three matches.

The structure should be: [`plus or minus`, `number`, `unit`]
If it is not captured, the default is an empty string.

Ví dụ:

```ts
type PString1 = ""
type PString2 = "+85%"
type PString3 = "-85%"
type PString4 = "85%"
type PString5 = "85"

type R1 = PercentageParser<PString1> // kỳ vọng ['', '', '']
type R2 = PercentageParser<PString2> // kỳ vọng ["+", "85", "%"]
type R3 = PercentageParser<PString3> // kỳ vọng ["-", "85", "%"]
type R4 = PercentageParser<PString4> // kỳ vọng ["", "85", "%"]
type R5 = PercentageParser<PString5> // kỳ vọng ["", "85", ""]
```

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/1978/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/1978/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
