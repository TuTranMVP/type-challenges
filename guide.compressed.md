---
concept: "Type Challenges - AI Tutor Guide"
aliases: ["Type Challenges Guide", "TS Type Practice", "OpenCode TypeScript"]
type: compression
domain: Programming
level: intermediate
priority: critical
maturity: stable
version: "1.0.0"
uid: "TypeChallengesGuide20251220"
created: 2025-12-20
updated: 2025-12-20
status: active
source:
  - "[[GUIDE.md]]"
  - "[[GUIDE-TESTCASE.md]]"
relation:
  - "[[2.Areas/Programming/Languages/TypeScript]]"
  - "[[2.Areas/MINDSETS/Brain/ActiveRecall]]"
tags: [compression, typescript, type-challenges, practice, 80-20]
---

## ⚡ Tóm Tắt (30s)

❓**Câu hỏi cốt lõi:** Làm sao master TypeScript type system qua 189 challenges với AI tutor?

🔑 **Mental Model:** "Type = Function, Generic = Parameter" - Mỗi type operation = function call ở compile time

🧠 **Core Insights:**
- **10 Patterns** cover 80% challenges: Mapped + Conditional + Infer + Template Literals + Recursive
- **Test pass** = Không gạch đỏ IDE hoặc `tsc --noEmit` không lỗi
- **Progression:** Warm(1) → Easy(13) → Medium(102) → Hard(56) → Extreme(17)

---

## 🎯 Patterns Cốt Lõi (5min)

### 10 Type Patterns (80% Challenges)

| # | Pattern | Syntax | ⚠️ Anti-pattern |
|---|---------|--------|-----------------|
| 1 | Mapped Types | `{ [K in keyof T]: T[K] }` | Quên `as` clause khi filter |
| 2 | Conditional Types | `T extends U ? X : Y` | Miss distributive behavior với union |
| 3 | Infer Keyword | `T extends (infer R)[] ? R : never` | Infer sai position |
| 4 | Template Literals | `` `${A}${B}` `` | Forget `extends string` constraint |
| 5 | Recursive Types | `[F, ...Recursive<R>]` | Missing base case → infinite loop |
| 6 | Union Distribution | `T extends any ? ... : never` | Block với `[T]` khi không cần |
| 7 | keyof Operator | `keyof T` | Forget `& string` cho string keys |
| 8 | Indexed Access | `T[K]` | Access non-existent key |
| 9 | never Type | `never` để filter | Return never khi không cần |
| 10 | as Modifier | `as NewKey` | Quên `as never` để remove key |

### 3 Test Methods

| Method | Command | ✅ Pass | ⚠️ Gotcha |
|--------|---------|---------|-----------|
| IDE | Mở file | Không gạch đỏ | Restart TS Server nếu stuck |
| CLI | `npx tsc --noEmit file.ts` | Không output | Dùng full path |
| Palette | `Ctrl+Shift+P → Restart TS Server` | Re-check | Wait 2-3s sau restart |

---

## 💡 Giải Nén

### 🔄 Knowledge Links

###### Foundation
- Concept: TypeScript Generics, Utility Types, Type Inference
- Mindset: [[2.Areas/MINDSETS/Brain/ActiveRecall]] [[2.Areas/MINDSETS/Methods/Spaced-repetition]]

###### Expert Tips
- Daily: `/track` (sáng) → `/solve` (practice) → `/review` (tối)
- Stuck: `/explain concept` → retry → `/solve` (last resort)
- Master: Complete 5 challenges/pattern trước khi move on

### 📚 Key Concepts (Breadcrumbs)

1. **10 Patterns:** Mapped + Conditional + Infer = 80% challenges
2. **3 Test Methods:** IDE + CLI + Palette = verify pass

**Reconstruction Test:** Explain 2 concepts này từ memory → retained 80%+ value

---

**📊 Stats:** 1876 → 75 lines | Ratio 25:1 | Value 85%
