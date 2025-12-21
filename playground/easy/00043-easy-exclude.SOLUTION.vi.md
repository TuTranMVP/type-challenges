---
challenge: "Exclude"
id: "00043"
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


# 🏆 Exclude

> [!abstract] **Quick Summary (30s)**
>
> **🎯 Problem:** Tự triển khai utility type Exclude<T, U> mà không dùng sẵn có. Loại bỏ khỏi T những kiểu có thể gán cho U.
>
> **💡 Root Cause:** Khi làm việc với union type, cần loại bỏ những giá trị không mong muốn để tăng độ an toàn và rõ ràng cho type.
>
> **🔑 Key Insight:** Dùng conditional type (T extends U ? never : T) để filter type khỏi union.
>
> **✅ Solution:** Sử dụng conditional type để trả về never cho những kiểu cần loại bỏ.

---

## 💡 WHY (Vấn Đề Gốc)

Trong thực tế, khi thiết kế API, model, hoặc xử lý dữ liệu, ta thường cần loại bỏ một số giá trị khỏi tập hợp type ban đầu để tránh bug hoặc enforce logic nghiệp vụ. Exclude giúp filter type hiệu quả, tránh sai sót khi truyền dữ liệu.

---

## ⏰ WHEN (Khi Nào Dùng)

- **Use case 1:** Loại bỏ các giá trị không hợp lệ khỏi union type (ví dụ: filter 'null' khỏi kết quả trả về).
- **Use case 2:** Tạo type cho API response mà không chứa error type.
- **Use case 3:** Xây dựng các type helper cho form validation, state management.

---

## 🔧 HOW (Cách Giải)

1. **Step 1:** Dùng conditional type để kiểm tra từng phần tử của union T.
2. **Step 2:** Nếu phần tử thuộc U, trả về never (loại bỏ).
3. **Step 3:** Nếu không, giữ lại phần tử đó trong union kết quả.

---

## ⚖️ Solutions Matrix

| Solution      | Approach                        | Complexity | Readability | Best For         |
| ------------- | ------------------------------- | ---------- | ----------- | ---------------- |
| Conditional   | T extends U ? never : T         | O(n)       | 5⭐         | Mọi union type   |
| Manual        | Filter từng giá trị thủ công     | O(n)       | 2⭐         | Union nhỏ, demo  |

**Recommended:** Solution #1 - conditional type vì tổng quát, ngắn gọn, dễ bảo trì.

---

## ✅ Best Solution

```typescript
// Conditional Type Exclude
// WHY: Dùng conditional type để filter type khỏi union

type MyExclude<T, U> = T extends U ? never : T
```

**Giải thích:**
- **Line 1:** Từng phần tử của T được kiểm tra với U
- **Line 2:** Nếu thuộc U thì trả về never (loại khỏi union)
- **Key insight:** never sẽ bị loại khỏi union, chỉ giữ lại giá trị hợp lệ

---

## 🧠 Concepts Applied

| Concept                  | Vai Trò                        | Vault Link                                      |
|------------------------- |------------------------------- |-------------------------------------------------|
| Conditional Type         | Filter type khỏi union         | [[ts.conditional.quick-summary]]                |
| never Type               | Loại bỏ giá trị khỏi union      | [[ts.never.quick-summary]]                      |
| Union Type               | Tập hợp các giá trị            | [[ts.union.quick-summary]]                      |

---

## 🔗 Vault Links

**Core Knowledge:**
- [[2.Areas/Programming/Languages/TS/2.Types/ts.types.quick-summary|TypeScript Types]]
- [[2.Areas/Programming/Languages/TS/Advanced/ts.conditional.quick-summary|Conditional Type]]

**Related Concepts:**
- [[2.Areas/Programming/Languages/TS/2.Types/ts.never.quick-summary|never Type]]
- [[2.Areas/Programming/Languages/TS/2.Types/ts.union.quick-summary|Union Type]]

---

## 📝 Notes

- **Gotchas:** Không test với các edge case như any, never, function, object sẽ dễ sai logic.
- **Edge Cases:** Nếu U là never hoặc any, kết quả có thể không như mong đợi. Nên test kỹ với các trường hợp đặc biệt.
- **Further Reading:** https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype

---

**⏱️ Time:** 5min | **📊 Difficulty:** 2/5

---

## 💡 WHY

[Vấn đề gốc - tại sao cần solve?]

---

## ⏰ WHEN

- **Use case 1:** [Scenario]
- **Use case 2:** [Scenario]

---

## 🔧 HOW

1. **Step 1:** [Action]
2. **Step 2:** [Action]

---

## ✅ Best Solution

```typescript
type MyExclude<T, U> = any
```

**Giải thích:**
- [Key point 1]
- [Key point 2]

---

## 🧠 Concepts Applied

- [Concept 1]
- [Concept 2]

---

## 🔗 Vault Links

- [[2.Areas/PROGRAMMINGS/Languages/TypeScript|TypeScript]]

---

## 📝 Notes

- **Gotchas:** [Common mistakes]
- **Edge Cases:** [Special cases]

---

**⏱️ Time:** 5min | **📊 Difficulty:** 2/5
