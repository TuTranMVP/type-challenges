---
challenge: "Tuple to Object"
id: "00011"
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
# 🏆 Tuple to Object - Solution

> [!abstract] **Quick Summary (30s)**
>
> **🎯 Problem:** Chuyển tuple thành object type, key và value đều là phần tử tuple.
>
> **💡 Root Cause:** TypeScript không tự map tuple thành object type an toàn.
>
> **🔑 Key Insight:** Dùng mapped type với [K in T[number]] để tạo key-value từ literal type.
>
> **✅ Solution:** type TupleToObject<T extends readonly any[]> = { [K in T[number]]: K }

---

## 💡 WHY (Vấn Đề Gốc)

Khi cần đảm bảo chỉ dùng đúng các giá trị cố định (enum-like) làm key cho object type, tránh lỗi chính tả, thiếu key, tăng type safety.

---

## ⏰ WHEN (Khi Nào Dùng)

- **Enum type an toàn:** Tạo type cho role, trạng thái, màu sắc, quyền truy cập...
- **Config object:** Đảm bảo object chỉ chứa key hợp lệ từ tuple.
- **IDE gợi ý key:** Tự động suggest đúng key, tránh bug.

---

## 🔧 HOW (Cách Giải)

1. Định nghĩa tuple với as const để giữ literal type.
2. Dùng mapped type [K in T[number]] để tạo object type với key-value giống nhau.

---

## ⚖️ Solutions Matrix

| Solution      | Approach                        | Complexity | Readability | Best For         |
|---------------|----------------------------------|------------|-------------|-----------------|
| Mapped type   | [K in T[number]]: K             | O(n)       | 5⭐          | Type safety      |
| Manual object | Tự khai báo từng key            | O(n)       | 2⭐          | Không khuyến khích |

**Recommended:** Solution #1 - Đơn giản, an toàn, chuẩn best practice TypeScript.

---

## ✅ Best Solution

```typescript
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}
```

**Giải thích:**
- **[K in T[number]]:** Lặp qua từng phần tử tuple, tạo key cho object type.
- **K:** Vừa là key, vừa là value (literal type), đảm bảo type an toàn tuyệt đối.

---

## 🧠 Concepts Applied

| Concept                        | Vai Trò                        | Vault Link                                      |
|--------------------------------|--------------------------------|-------------------------------------------------|
| Mapped Type                    | Tạo key-value từ tuple         | [[2.Areas/PROGRAMMINGS/Languages/TypeScript]]   |
| Literal Type                   | Giữ nguyên giá trị tuple       | [[2.Areas/PROGRAMMINGS/Languages/TypeScript]]   |

---

## 📝 Notes

**Gotchas:**
  - Tuple phải dùng as const để giữ literal type.
  - Không dùng cho tuple có phần tử trùng lặp hoặc không phải literal.

**Edge Cases:**
  - Tuple chứa symbol, số, ký tự đặc biệt, tiếng Việt, Hán tự... đều dùng được nếu là literal type.
  - Nếu tuple rỗng, kết quả là object rỗng.