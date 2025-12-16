<!--info-header-start--><h1>IsFixedStringLiteralType <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> </h1><blockquote><p>bởi 蛭子屋双六 <a href="https://github.com/sugoroku-y" target="_blank">@sugoroku-y</a></p></blockquote><p><a href="https://tsch.js.org/30970/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

Sometimes you may want to determine whether a string literal is a definite type. Ví dụ, when you want to check whether the type specified as a class identifier is a fixed string literal type.

```typescript
type Action<ID extends string> = { readonly id: ID };
```

Since it must be fixed, the following types must be determined as false.

* never type
* Union of string literal types
* Template literal types with embedded string, number, bigint, boolean

Determine whether the given type S is a definite string literal type.


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/30970/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/30970/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->