---
challenge: "Pick"
id: "00004"
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

# 🏆 Pick - Solution

> [!abstract] **Quick Summary (30s)**
>
> **🎯 Problem:** Tạo type mới chỉ gồm các thuộc tính K từ T (giống Pick<T, K>).
>
> **💡 Root Cause:** Hiểu bản chất mapped type và generic type.
>
> **🔑 Key Insight:** Dùng mapped type [P in K]: T[P] để lặp qua từng key K, lấy kiểu từ T.
>
> **✅ Solution:** type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

---

## 💡 WHY (20% bản chất)
- Giúp chọn ra một tập con thuộc tính từ type gốc, tăng tính linh hoạt khi tái sử dụng type.
- Hiểu sâu về generic, mapped type, và ràng buộc key.

---

## ⏰ WHEN (80% ứng dụng)
- Khi cần tạo type chỉ gồm một số thuộc tính của type gốc (ví dụ: chỉ lấy 'title' và 'completed' từ Todo).
- Khi muốn kiểm soát, giới hạn, hoặc tái sử dụng type cho các mục đích khác nhau (API, UI, validation,...).

---

## 🔧 HOW (Step-by-step)
1. Dùng generic T (type gốc) và K (tập key cần chọn).
2. Ràng buộc K extends keyof T để đảm bảo key hợp lệ.
3. Dùng mapped type [P in K]: T[P] để tạo type mới chỉ gồm các thuộc tính K với kiểu tương ứng từ T.

---

## ✅ Best Solution

```typescript
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
```

**Giải thích:**
- [P in K]: Lặp qua từng key trong K.
- T[P]: Lấy kiểu của key đó từ T.
- K extends keyof T: Đảm bảo K chỉ chứa key hợp lệ của T.

---

## 🧠 Concepts Applied
- Mapped type
- Generic type
- keyof operator
- Type constraint (ràng buộc)

---

## 🔗 Vault Links
- [[2.Areas/PROGRAMMINGS/Languages/TypeScript|TypeScript]]

---

## 📝 Notes
- **Gotchas:** Nếu K có key không tồn tại trong T sẽ lỗi compile.
- **Edge Cases:** K là never → type rỗng; K là toàn bộ key của T → type giống T gốc.
