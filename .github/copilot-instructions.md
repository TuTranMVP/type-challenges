---
applyTo: "**/*.{ts,md}"
---
# Type Challenges - GitHub Copilot Instructions

> **Primary Context:** Xem `@AGENTS.md` tại project root cho full instructions

---

## 🎯 Quick Routing

**Giải challenge:**
- Workflow → `@AGENTS.md` → Workflow 1 (Giải Challenge)
- Commands → `/solve {challenge-id}`
- Output → Vietnamese solution + docs

**Giải thích concepts:**
- Workflow → `@AGENTS.md` → Workflow 2 (Giải Thích Concept)
- Commands → `/explain {concept}`
- Sources → `@FAQ.vi.md`, `@TIPS.vi.md`

**Track progress:**
- Workflow → `@AGENTS.md` → Workflow 3 (Track Progress)
- Commands → `/track`

---

## 📚 Project Docs Priority

1. **@AGENTS.md** - Primary context (project-specific)
2. **@README.vi.md** - Setup & quick start
3. **@FAQ.vi.md** - 25 Q&A thường gặp
4. **@TIPS.vi.md** - 25 advanced tips & patterns
5. **@SOLUTIONS-INDEX.md** - Index 189 solutions

**Strategy:** Reference (NO duplicate content)

---

## 🔗 Vault Integration

**Global agents:**
- `/OBNotes/.github/agents/` (learn, practice, debug agents)

**Templates:**
- `/OBNotes/2.Areas/AI/Templates/` (solution templates)

**Style guide:**
- `/OBNotes/AGENTS.md` (global communication style)

---

## 📏 Output Style

**Vietnamese + Technical English:**
- ✅ Giữ: `keyof`, `infer`, `extends`, `mapped types`, patterns
- ✅ Dịch: Descriptions, explanations, examples
- ❌ Không: Duplicate FAQ/TIPS, wall of text, generic advice

**Structure:**
- Emoji headers (🎯, 💡, ✅, 🔍, 📊)
- Tables for comparisons
- Code blocks with Vietnamese comments
- Pareto 20% - core concepts only

---

**Version:** 1.0  
**Last Updated:** 2025-12-17
