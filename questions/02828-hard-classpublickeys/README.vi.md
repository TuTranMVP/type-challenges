<!--info-header-start--><h1>ClassPublicKeys <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>bởi jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/2828/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Triển khai the generic `ClassPublicKeys<T>` which returns all public keys of a class.

Ví dụ:

```ts
class A {
  public str: string
  protected num: number
  private bool: boolean
  getNum() {
    return Math.random()
  }
}

type publicKeys = ClassPublicKeys<A> // 'str' | 'getNum'
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/2828/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/2828/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->
