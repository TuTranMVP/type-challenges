---
description: Generate Vietnamese docs cho challenge
agent: coder
subtask: true
model: anthropic/claude-3-5-sonnet-20241022
---

# Generate Vietnamese Documentation

**Challenge ID:** $1

**English Source:**
!`CHALLENGE_ID="$1"; test -f "questions/$CHALLENGE_ID/README.md" && cat "questions/$CHALLENGE_ID/README.md" || echo "❌ English README not found"`

**Existing Vietnamese (if any):**
!`CHALLENGE_ID="$1"; test -f "questions/$CHALLENGE_ID/README.vi.md" && echo "⚠️ Vietnamese docs already exist" && cat "questions/$CHALLENGE_ID/README.vi.md" || echo "✅ Need to create new Vietnamese docs"`

---

## Generation Workflow (từ @AGENTS.md → Workflow 6)

1. **Translate:** English → Vietnamese
2. **Keep technical:** keyof, infer, extends, mapped types, etc.
3. **Add examples:** Vietnamese context, analogies
4. **Solution:** Step-by-step breakdown
5. **Format:** Follow existing `.vi.md` style

---

## Output Files

- `questions/$1/README.vi.md` - Problem description
- `playground/{level}/$1.SOLUTION.vi.md` - Solution guide

---

## Style Guide

**From existing docs:**
@questions/00043-easy-exclude/README.vi.md
@questions/00119-medium-replaceall/README.vi.md

**Vietnamese Rules:**
- 100% Vietnamese + English technical keywords
- Emoji headers (🎯, 💡, ✅, 🔍)
- Code comments in Vietnamese
- Examples với Vietnamese variable names

**Reference:** @AGENTS.md → Communication Style
