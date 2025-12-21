---
challenge: "Readonly"
id: "00007"
level: easy
source: type-challenges
status: solved
time-spent: "5min"
concepts:
  - "TypeScript Type Manipulation"
difficulty-rating: 2
created: 2025-12-16
relation:
  - "[[2.Areas/PROGRAMMINGS/Languages/TypeScript|TypeScript]]"
tags:
  - practice
  - challenge-solution
  - type-challenges
  - easy
---


# 🏆 Readonly

> [!abstract] **Quick Summary (30s)**
>
> **🎯 Problem:** Tự triển khai generic Readonly<T> mà không dùng utility có sẵn. Biến tất cả thuộc tính của T thành readonly.
>
> **💡 Root Cause:** TypeScript cần cách bảo vệ object khỏi bị thay đổi ngoài ý muốn (immutable).
>
> **🔑 Key Insight:** Dùng mapped type với readonly modifier để biến mọi thuộc tính thành readonly.
>
> **✅ Solution:** Sử dụng cú pháp { readonly [K in keyof T]: T[K] } để tạo type mới.

---

## 💡 WHY

TypeScript cho phép bảo vệ dữ liệu bằng cách biến object thành immutable. Nếu không có Readonly, dữ liệu có thể bị thay đổi ngoài ý muốn, gây bug khó kiểm soát.

---

## ⏰ WHEN

- **Use case 1:** Đảm bảo object không bị sửa đổi sau khi khởi tạo (config, settings).
- **Use case 2:** Truyền dữ liệu giữa các module mà không lo bị mutate.

---

## 🔧 HOW

1. **Step 1:** Dùng mapped type để duyệt qua tất cả thuộc tính của T.
2. **Step 2:** Thêm readonly modifier cho mỗi thuộc tính.
3. **Step 3:** Trả về type mới với tất cả thuộc tính đều readonly.

---

## ⚖️ Solutions Matrix

| Solution      | Approach                        | Complexity | Readability | Best For         |
| ------------- | ------------------------------- | ---------- | ----------- | ---------------- |
| Mapped Type   | { readonly [K in keyof T]: T[K] } | O(n)       | 5⭐         | Mọi object type  |
| Manual        | Viết từng thuộc tính readonly    | O(n)       | 2⭐         | Object nhỏ, demo |

**Recommended:** Solution #1 - mapped type vì tổng quát, ngắn gọn, dễ bảo trì.

---

## ✅ Best Solution

```typescript
// Mapped Type Readonly
// WHY: Dùng mapped type để biến mọi thuộc tính thành readonly

type MyReadonly<T> = { readonly [K in keyof T]: T[K] }
```

**Giải thích:**
- **Line 1:** Duyệt qua tất cả thuộc tính bằng keyof T
- **Line 2:** Thêm readonly cho mỗi thuộc tính
- **Key insight:** mapped type + readonly = immutable object

---

## 🧠 Concepts Applied

| Concept                  | Vai Trò                        | Vault Link                                      |
|------------------------- |------------------------------- |-------------------------------------------------|
| Mapped Type              | Tạo type mới từ type cũ        | [[ts.mapped-type.quick-summary]]                |
| Readonly Modifier        | Bảo vệ dữ liệu khỏi mutate      | [[ts.readonly.quick-summary]]                   |
| keyof Operator           | Lấy danh sách thuộc tính       | [[ts.keyof.quick-summary]]                      |

---

## 🔗 Vault Links

**Core Knowledge:**
- [[2.Areas/Programming/Languages/TS/2.Types/ts.types.quick-summary|TypeScript Types]]
- [[2.Areas/Programming/Languages/TS/Advanced/ts.mapped-type.quick-summary|Mapped Type]]

**Related Concepts:**
- [[2.Areas/Programming/Languages/TS/Advanced/ts.conditional.quick-summary|Conditional Type]]
- [[2.Areas/Programming/Languages/TS/2.Types/ts.keyof.quick-summary|keyof Operator]]

---

## 📝 Notes

- **Gotchas:** Không áp dụng cho nested object, chỉ cấp 1. Muốn deep readonly phải dùng recursive type.
- **Edge Cases:** Object có thuộc tính optional hoặc method vẫn được readonly.
- **Further Reading:** https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype