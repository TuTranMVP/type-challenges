---
challenge: "First of Array"
id: "00014"
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

# 🏆 First of Array - Solution

> [!abstract] **Quick Summary (30s)**
>
> **🎯 Problem:** Lấy kiểu phần tử đầu tiên của một tuple/array ở type-level TypeScript, trả về never nếu mảng rỗng.
>
> **💡 Root Cause:** TypeScript không có sẵn utility lấy phần tử đầu ở type-level, cần tự định nghĩa để thao tác tuple/array an toàn.
>
> **🔑 Key Insight:** Kết hợp conditional type và tuple indexing để kiểm tra rỗng và lấy phần tử đầu.
>
> **✅ Solution:** Dùng T extends [] ? never : T[0] với ràng buộc T extends any[]

---

## 💡 WHY (Vấn Đề Gốc)

Khi thao tác với tuple/array ở type-level, nhiều khi cần lấy phần tử đầu tiên để xử lý logic (ví dụ: recursion, pattern matching). Nếu không có cách lấy phần tử đầu, sẽ không thể xây dựng các type utility phức tạp hơn.

---

## ⏰ WHEN (Khi Nào Dùng)

- **Use case 1:** Xây dựng type utility thao tác với tuple (ví dụ: Đệ quy, map, filter, reduce ở type-level)
- **Use case 2:** Kiểm tra kiểu phần tử đầu để phân nhánh logic (pattern matching)
- **Use case 3:** Tạo các type helper cho API nhận tuple đầu vào

---

## 🔧 HOW (Cách Giải)

1. **Step 1:** Ràng buộc generic T extends any[] để chỉ nhận array/tuple hợp lệ (an toàn kiểu)
2. **Step 2:** Dùng conditional type kiểm tra nếu T rỗng (T extends []), trả về never; ngược lại trả về T[0] (kiểu phần tử đầu)

---

## ⚖️ Solutions Matrix

| Solution      | Approach                                 | Complexity | Readability | Best For           |
|--------------|-------------------------------------------|------------|-------------|--------------------|
| Conditional  | T extends [] ? never : T[0]               | O(1)       | 5⭐          | Đơn giản, an toàn  |
| Index only   | T[0]                                      | O(1)       | 4⭐          | Không kiểm tra rỗng|

**Recommended:** Solution #1 - Vì xử lý đúng cả trường hợp mảng rỗng, an toàn kiểu.

---

## ✅ Best Solution

```typescript
// Conditional type + tuple indexing
// WHY: Đảm bảo chỉ nhận array/tuple, trả về never nếu rỗng

type First<T extends any[]> = T extends [] ? never : T[0]