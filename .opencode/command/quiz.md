---
description: Generate practice quiz từ concepts đã học
agent: coder
subtask: true
---

# Generate Practice Quiz

**Topic:** $ARGUMENTS

**Context - Solved Challenges:**
!`find playground -name "*.ts" -not -name "*.SOLUTION*" -exec basename {} \; 2>/dev/null | head -20`

---

## Quiz Generation (từ @AGENTS.md → Workflow 5)

1. **Extract patterns:** Từ solved challenges
2. **Create variations:** Similar problems, different contexts
3. **Multiple difficulty:** Easy → Medium → Hard
4. **Test cases:** Include type assertions
5. **Solutions:** Step-by-step explanations

---

## Output Format

```markdown
# Quiz: {Topic}

## Question 1 (Easy)
[Problem description]
[Starter code]

## Question 2 (Medium)
[Problem description]
[Starter code]

## Question 3 (Hard)
[Problem description]
[Starter code]

## Solutions
[All answers với explanations]
```

**Reference:** @TIPS.vi.md (Tip 11-15) cho practice techniques
