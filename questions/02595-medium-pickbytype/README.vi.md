<!--info-header-start--><h1>PickByType <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23object-999" alt="#object"/></h1><blockquote><p>bởi jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/2595/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

From `T`, pick a set of properties whose type are assignable to `U`.

For Example

```typescript
type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/2595/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/2595/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md" target="_blank"><img src="https://img.shields.io/badge/-2852%E3%83%BBOmitByType-d9901a" alt="2852・OmitByType"/></a> <!--info-footer-end-->
