---
description: Review solution code quality và best practices
agent: coder
subtask: true
model: anthropic/claude-3-5-sonnet-20241022
---

# Review Solution

**Solution File:** $1

**Code:**
@$1

**Challenge Context:**
!`SOLUTION_PATH="$1"; CHALLENGE_ID=$(basename "$SOLUTION_PATH" .ts); echo "Challenge: $CHALLENGE_ID"`

---

## Review Checklist (từ @TIPS.vi.md)

✅ **Type Safety:**
- No `any` types
- Handles edge cases
- Satisfies all test cases

✅ **Performance:**
- Avoid deep recursion (Tip 9)
- Efficient patterns (Tip 10)

✅ **Readability:**
- Clear variable names
- Comments for complex logic
- Follows patterns table (@AGENTS.md)

✅ **Best Practices:**
- Uses appropriate patterns
- Leverages TypeScript features
- Reference @TIPS.vi.md (Tip 16-20)

---

## Output

- Rating: Easy/Medium/Hard
- Improvements: Specific suggestions
- Alternatives: Different approaches
- Learning: Related concepts to study
