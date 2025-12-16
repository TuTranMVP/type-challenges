<!--info-header-start--><h1>ToPrimitive <img src="https://img.shields.io/badge/-medium-d9901a" alt="trung bình"/> </h1><blockquote><p>bởi 前端子鱼 <a href="https://github.com/mwc" target="_blank">@mwc</a></p></blockquote><p><a href="https://tsch.js.org/16259/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.vi.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

Convert a property of type literal (label type) to a primitive type.

Ví dụ

```typescript
type X = {
  name: 'Tom',
  age: 30,
  married: false,
  addr: {
    home: '123456',
    phone: '13111111111'
  }
}

type Expected = {
  name: string,
  age: number,
  married: boolean,
  addr: {
    home: string,
    phone: string
  }
}
type Todo = ToPrimitive<X> // should be same as `Expected`
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/16259/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/16259/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->