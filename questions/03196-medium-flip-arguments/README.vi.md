<!--info-header-start--><h1>Flip Arguments <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> <img src="https://img.shields.io/badge/-%23arguments-999" alt="#arguments"/></h1><blockquote><p>bởi jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/3196/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Triển khai the type version of lodash's ```_.flip```.

Type ```FlipArguments<T>``` requires function type ```T``` and returns a new function type which has the same return type of T but reversed parameters.

Ví dụ:

```typescript
type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/3196/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/3196/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md" target="_blank"><img src="https://img.shields.io/badge/-3192%E3%83%BBReverse-d9901a" alt="3192・Reverse"/></a> <!--info-footer-end-->
