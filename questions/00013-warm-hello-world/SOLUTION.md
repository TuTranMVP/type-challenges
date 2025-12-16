---
challenge: "Hello World"
id: "00013"
level: warm-up
source: type-challenges
status: solved
time-spent: "2min"
concepts:
  - "Type Aliases"
  - "Literal Types"
  - "Type Assertions"
difficulty-rating: 1
created: 2025-01-16
relation:
  - "[[2.Areas/PROGRAMMINGS/Languages/TypeScript/TS.types|TypeScript Types]]"
  - "[[2.Areas/PROGRAMMINGS/Languages/TypeScript/TS.type-aliases|Type Aliases]]"
tags:
  - practice
  - challenge-solution
  - type-challenges
  - warm-up
---

# 🏆 Hello World - Solution

> [!abstract] **Quick Summary (30s)**
> 
> **🎯 Problem:** Thay đổi `type HelloWorld = any` để pass tests
> 
> **💡 Root Cause:** TypeScript cần explicit type declaration, `any` bypass type checking
> 
> **🔑 Key Insight:** Type alias = tên thay thế cho type khác, như variable cho types
> 
> **✅ Solution:** `type HelloWorld = string`

---

## 💡 WHY (Vấn Đề Gốc)

`any` type vô hiệu hóa type checking - mất đi lợi ích cốt lõi của TypeScript. Challenge này introduce type alias - building block cơ bản nhất để define custom types.

---

## ⏰ WHEN (Khi Nào Dùng)

- **Type Alias:** Khi cần reusable type definition
- **Literal Types:** Khi cần restrict values (không chỉ `string`, mà `"hello"` cụ thể)
- **Avoid `any`:** 99% cases - dùng `unknown` nếu thực sự không biết type

---

## 🔧 HOW (Cách Giải)

1. **Đọc test cases:** `Expect<Equal<HelloWorld, string>>` → HelloWorld phải === string
2. **Đọc constraint:** `Expect<NotAny<HelloWorld>>` → không được là `any`
3. **Replace:** `type HelloWorld = any` → `type HelloWorld = string`

---

## ⚖️ Solutions Matrix

| # | Solution | Approach | Complexity | Readability | Best For |
|---|----------|----------|------------|-------------|----------|
| 1 | `type HelloWorld = string` | Direct assignment | O(1) | ⭐⭐⭐ | ✅ Best - Simple, clear |
| 2 | `type HelloWorld = typeof "hello"` | typeof inference | O(1) | ⭐⭐ | Learning typeof |

**Recommended:** Solution #1 - Direct, readable, no magic

---

## ✅ Best Solution

```typescript
// Direct Type Alias
// WHY: Simplest way to create a type that equals `string`

type HelloWorld = string
```

**Giải thích:**
- **Line 1:** Type alias `HelloWorld` = built-in type `string`
- **Key insight:** Type alias không tạo type mới, chỉ là "nickname"

---

## 🧠 Concepts Applied

| Concept | Vai Trò | Vault Link |
|---------|---------|------------|
| Type Alias | Tạo tên thay thế cho type | [[2.Areas/PROGRAMMINGS/Keywords/TypeAlias\|TypeAlias]] |
| Primitive Types | `string` là 1 trong 7 primitives | [[2.Areas/PROGRAMMINGS/Languages/TypeScript/TS.types\|TS Types]] |
| Type Checking | TypeScript validate types at compile time | [[2.Areas/PROGRAMMINGS/Languages/TypeScript/TS.core-principles\|TS Principles]] |

---

## 🔗 Vault Links

**Core Knowledge:**
- [[2.Areas/PROGRAMMINGS/Languages/TypeScript/TS.quick-summary|TypeScript Quick Summary]]
- [[2.Areas/PROGRAMMINGS/Keywords/TypeSystem|Type System]]

**Related Concepts:**
- [[2.Areas/PROGRAMMINGS/Keywords/LiteralTypes|Literal Types]]
- [[2.Areas/PROGRAMMINGS/Keywords/TypeInference|Type Inference]]

---

## 📝 Notes

- **Gotchas:** `type` ≠ `interface` - type aliases can't be extended/merged
- **Edge Cases:** None for this simple challenge
- **Further Reading:** [TypeScript Handbook - Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)

---

**⏱️ Time:** 2 min | **📊 Difficulty:** 1/5 | **🔄 Next Review:** 2025-01-23
