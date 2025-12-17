---
description: Giải TypeScript type challenge với Vietnamese solution
agent: coder
subtask: true
model: anthropic/claude-3-5-sonnet-20241022
---

# Giải Challenge Workflow

**Challenge ID:** $1

**Load Context:**
!`CHALLENGE_ID="$1"; if [ -d "questions/$CHALLENGE_ID" ]; then echo "✅ Found challenge: $CHALLENGE_ID"; cat "questions/$CHALLENGE_ID/README.vi.md"; else echo "❌ Challenge not found: $CHALLENGE_ID. Available:"; ls questions/ | head -10; fi`

**Test Cases:**
!`CHALLENGE_ID="$1"; test -f "questions/$CHALLENGE_ID/test-cases.ts" && cat "questions/$CHALLENGE_ID/test-cases.ts" || echo "No test cases found"`

**Template:**
!`CHALLENGE_ID="$1"; test -f "questions/$CHALLENGE_ID/template.ts" && cat "questions/$CHALLENGE_ID/template.ts" || echo "No template found"`

---

## Workflow (từ @AGENTS.md)

1. **Phân tích đề bài:** README.vi.md patterns
2. **Reference:** Check @FAQ.vi.md (Q9-12), @TIPS.vi.md (Tip 4-8)
3. **Generate solution:** Type-level code
4. **Verify:** Satisfy all test cases
5. **Document:** SOLUTION.vi.md với step-by-step

---

## Output Location

- Solution: `playground/{level}/$1.ts`
- Guide: `playground/{level}/$1.SOLUTION.vi.md`

**Format:** Follow @AGENTS.md → Quality Rules → Solution files
