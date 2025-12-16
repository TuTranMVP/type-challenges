<!--info-header-start--><h1>String Join <img src="https://img.shields.io/badge/-hard-de3d37" alt="khó"/> </h1><blockquote><p>bởi Matt Davis <a href="https://github.com/tl-matt-davis" target="_blank">@tl-matt-davis</a></p></blockquote><p><a href="https://tsch.js.org/847/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Bắt đầu Challenge"/></a> </p><!--info-header-end-->

Create a type-safe string join utility which can be used like so:

```ts
const hyphenJoiner = join('-')
const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
```

Or alternatively:
```ts
join('#')('a', 'b', 'c') // = 'a#b#c'
```

When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e: 
```ts
join('')('a', 'b', 'c') // = 'abc'
```

When only one item is passed, we should get back the original item (without any delimiter added):
```ts
join('-')('a') // = 'a'
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Quay lại-grey" alt="Quay lại"/></a> <a href="https://tsch.js.org/847/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Chia sẻ Lời giải"/></a> <a href="https://tsch.js.org/847/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Xem các Lời giải"/></a> <!--info-footer-end-->