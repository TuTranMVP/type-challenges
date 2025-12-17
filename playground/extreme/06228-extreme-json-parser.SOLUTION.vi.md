---
challenge: "JSON Parser"
id: "06228"
level: extreme
source: type-challenges
status: solved
time-spent: "60min"
concepts:
  - "TypeScript Type Manipulation"
difficulty-rating: 5
created: 2025-12-16
relation:
  - "[[2.Areas/PROGRAMMINGS/Languages/TypeScript|TypeScript]]"
tags:
  - practice
  - challenge-solution
  - type-challenges
  - extreme
---

# 🏆 JSON Parser - Solution

> [!abstract] **Quick Summary (30s)**
> 
> **🎯 Problem:** Xem README.vi.md trong `questions/06228-extreme-*/`
> 
> **💡 Root Cause:** [Key issue to solve]
> 
> **🔑 Key Insight:** [Mental model]
> 
> **✅ Solution:** [Approach]

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
type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type Token = any
type ParseResult<T, K extends Token[]> = [T, K]
type Tokenize<T extends string, S extends Token[] = []> = Token[]
type ParseLiteral<T extends Token[]> = ParseResult<any, T>

type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>
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

**⏱️ Time:** 60min | **📊 Difficulty:** 5/5
