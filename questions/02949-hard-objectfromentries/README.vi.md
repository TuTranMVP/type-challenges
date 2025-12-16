<!--info-header-start--><h1>ObjectFromEntries <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> <img src="https://img.shields.io/badge/-%23object-999" alt="#object"/></h1><blockquote><p>bởi jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/2949/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Triển khai the type version of ```Object.fromEntries```

Ví dụ:

```typescript
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type result = ObjectFromEntries<ModelEntries> // kỳ vọng to be Model
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/2949/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/2949/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <hr><h3>Challenges liên quan</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-de3d37" alt="55・Union to Intersection"/></a> <!--info-footer-end-->
