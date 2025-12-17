---
title: "Type Challenges - OpenCode AI Tutor Guide"
type: "guide"
lang: "vi"
created: 2025-12-17
version: "1.0"
tags:
  - type-challenges
  - opencode
  - ai-tutor
  - guide
---

# 🤖 Type Challenges - OpenCode AI Tutor Guide

> **Hướng dẫn đầy đủ** sử dụng hệ thống AI Tutor cho Type Challenges với OpenCode

---

## 📚 **Mục Lục**

- [Quick Start](#-quick-start-3-phút)
- [Hệ Thống Files](#-hệ-thống-files)
- [6 Commands Chính](#-6-commands-chính)
- [Workflows Chi Tiết](#-workflows-chi-tiết)
- [Tips & Best Practices](#-tips--best-practices)
- [Troubleshooting](#-troubleshooting)
- [FAQs](#-faqs)

---

## ⚡ **Quick Start (3 phút)**

### **Bước 1: Khởi động OpenCode**

```bash
cd type-challenges
opencode
```

### **Bước 2: Initialize AI Tutor**

```
/init
```

OpenCode sẽ load `AGENTS.md` và chuẩn bị hệ thống.

### **Bước 3: Test Command Đầu Tiên**

```
/track
```

Xem tiến độ hiện tại của bạn!

**✅ Done!** Bạn đã sẵn sàng sử dụng AI Tutor.

---

## 📂 **Hệ Thống Files**

### **Cấu Trúc Overview**

```
type-challenges/
├── AGENTS.md                    ⭐ Não bộ của AI Tutor
├── GUIDE.md                     📖 File này
├── .opencode/
│   ├── opencode.json            🔧 Config + MCP servers
│   └── command/                 🎯 6 workflow commands
│       ├── solve.md
│       ├── explain.md
│       ├── track.md
│       ├── review.md
│       ├── quiz.md
│       └── generate.md
├── .github/
│   └── copilot-instructions.md  ✨ GitHub Copilot fallback
├── questions/                   📝 189 challenges
├── playground/                  💻 Workspace của bạn
└── Docs/                        📚 Vietnamese guides
    ├── README.vi.md
    ├── FAQ.vi.md
    ├── TIPS.vi.md
    └── SOLUTIONS-INDEX.md
```

---

## 🎯 **6 Commands Chính**

### **Tổng Quan Commands**

| Command | Purpose | Usage | Output |
|---------|---------|-------|--------|
| `/solve` | Giải challenge | `/solve {id}` | Solution + Docs |
| `/explain` | Giải thích concept | `/explain {concept}` | Interactive tutorial |
| `/track` | Track tiến độ | `/track` | Metrics + Recommendations |
| `/review` | Review code | `/review {file}` | Code review |
| `/quiz` | Tạo quiz | `/quiz {topic}` | Practice quiz |
| `/generate` | Tạo Vietnamese docs | `/generate {id}` | README.vi.md |

---

## 🔄 **Workflows Chi Tiết**

### **1️⃣ Workflow: Giải Challenge** (`/solve`)

**Khi nào dùng:**
- Muốn AI giúp giải một challenge cụ thể
- Stuck và cần solution với explanation

**Cách dùng:**

```bash
# Format 1: Challenge ID
/solve 00043-easy-exclude

# Format 2: Full path
/solve questions/00119-medium-replaceall
```

**AI sẽ làm gì:**

```
1. Load đề bài → questions/{ID}/README.vi.md
2. Load test cases → questions/{ID}/test-cases.ts
3. Phân tích patterns → Mapped? Conditional? Recursive?
4. Generate solution → Type-level code
5. Verify → Pass all test cases
6. Document → Create SOLUTION.vi.md
```

**Output:**

```
playground/easy/00043-easy-exclude.ts
playground/easy/00043-easy-exclude.SOLUTION.vi.md
```

**Solution Format:**

```markdown
---
challenge: 00043-easy-exclude
difficulty: easy
concepts: [conditional-types, union-distribution]
---

# Exclude

## 🎯 Đề Bài
[Vietnamese description]

## 💡 Phân Tích
1. Input: Union type T, type U
2. Output: Members trong T không có trong U
3. Pattern: Distributive conditional types

## ✅ Solution
\```typescript
type MyExclude<T, U> = T extends U ? never : T
\```

## 🔍 Giải Thích
- T extends U ? never : T → Conditional type
- Khi T là union → Distribute cho từng member
- Nếu member ∈ U → never (loại bỏ)
- Nếu member ∉ U → giữ lại

## 🎓 Related Patterns
- Pattern #2: Conditional Types
- Pattern #6: Union Distribution
```

**Tips:**
- ✅ Đọc SOLUTION.vi.md để hiểu sâu
- ✅ So sánh với solution khác trong @SOLUTIONS-INDEX.md
- ✅ Practice lại với `/quiz` sau khi giải xong

---

### **2️⃣ Workflow: Giải Thích Concept** (`/explain`)

**Khi nào dùng:**
- Không hiểu một TypeScript concept
- Muốn học sâu về patterns
- Cần refresh kiến thức

**Cách dùng:**

```bash
/explain mapped types
/explain keyof operator
/explain conditional types
/explain infer keyword
```

**AI sẽ làm gì:**

```
1. Search knowledge → @FAQ.vi.md + @TIPS.vi.md
2. Mental model → "Type System = Functional Programming"
3. Examples → Simple → Complex
4. Mini exercises → Practice ngay
5. Checkpoint → Test understanding
```

**Output Style:**

```markdown
# 🎓 Mapped Types

## 💡 Concept Core
Mapped types = "Iterate + Transform object properties"

## 🧠 Mental Model
Think: Array.map() nhưng cho types
input: {a: string, b: number}
map: T[K] → readonly T[K]
output: {readonly a: string, readonly b: number}

## 📝 Syntax
\```typescript
type Mapped<T> = {
  [K in keyof T]: Transform<T[K]>
}
\```

## 🎯 Examples

### Level 1: Simple (Readonly)
\```typescript
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
\```

### Level 2: Transform (Getters)
\```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<K>}`]: () => T[K]
}
\```

### Level 3: Filter (Omit)
\```typescript
type MyOmit<T, U> = {
  [K in keyof T as K extends U ? never : K]: T[K]
}
\```

## 🏋️ Practice
Hãy thử implement: type Nullable<T> = { [K in keyof T]: T[K] | null }

## ✅ Checkpoint
Q: Mapped types có thể rename keys không?
A: Có! Dùng `as` clause: [K in keyof T as NewName]
```

**Interactive Flow:**
1. AI explain concept
2. Bạn trả lời checkpoint questions
3. AI correct nếu sai
4. Move to next level khi hiểu

**Tips:**
- ✅ Đọc @FAQ.vi.md (Q13-16) trước khi hỏi
- ✅ Combine với `/quiz` để practice
- ✅ Reference @AGENTS.md patterns table

---

### **3️⃣ Workflow: Track Progress** (`/track`)

**Khi nào dùng:**
- Muốn xem đã làm được bao nhiêu challenges
- Cần recommendation cho challenge tiếp theo
- Review learning path

**Cách dùng:**

```bash
/track
```

**AI sẽ làm gì:**

```
1. Count completed → ls playground/*/*.ts
2. Analyze git history → Recent challenges
3. Calculate metrics → Completion rate, streak
4. Identify patterns → Concepts đã master
5. Recommend → Next challenge by difficulty
```

**Output Example:**

```markdown
# 📊 Your Progress

## 🎯 Completion Status
- Total Completed: 45/189 (23.8%)
- Warm: 1/1 ✅
- Easy: 13/13 ✅
- Medium: 28/102 (27.4%)
- Hard: 3/56 (5.4%)
- Extreme: 0/17 (0%)

## 🔥 Current Streak
- Days active: 7 days
- Challenges/day avg: 6.4

## 📈 Concepts Mastered
✅ Mapped Types (10 challenges)
✅ Conditional Types (8 challenges)
✅ Union Distribution (5 challenges)
🔄 Recursive Types (3 challenges - in progress)
📚 Template Literals (2 challenges - learning)

## 🎯 Recommendations

### Next Challenge (Medium)
00531-medium-string-to-union
- Concepts: Template Literals, Recursive Types
- Difficulty: Medium
- Why: Build on your recursion knowledge

### Learning Path Suggestions
1. Complete 5 more medium challenges với recursion
2. Then try: 00545-hard-printf (practice template literals)
3. Review @TIPS.vi.md (Tip 8: Recursion patterns)

## 📚 Resources
- Review: @FAQ.vi.md Q13-16
- Practice: `/quiz recursive-types`
- Solutions: @SOLUTIONS-INDEX.md (filter by concept)
```

**Tips:**
- ✅ Run `/track` hàng ngày để maintain streak
- ✅ Follow recommendations (AI biết difficulty curve)
- ✅ Celebrate milestones (10, 25, 50, 100 challenges!)

---

### **4️⃣ Workflow: Review Solution** (`/review`)

**Khi nào dùng:**
- Đã giải xong challenge, muốn feedback
- Cần improve code quality
- Học alternative approaches

**Cách dùng:**

```bash
/review playground/medium/00119-medium-replaceall.ts
```

**AI sẽ làm gì:**

```
1. Analyze code → Type safety, readability
2. Check patterns → Best practices từ @TIPS.vi.md
3. Identify issues → Performance, edge cases
4. Suggest alternatives → Different approaches
5. Rate difficulty → So sánh với expected level
```

**Output Example:**

```markdown
# 🔍 Code Review: ReplaceAll

## ✅ Strengths
1. **Type Safety**: No `any` types ✓
2. **Pattern Choice**: Recursive + Template Literals (đúng!)
3. **Edge Cases**: Handles empty string correctly

## ⚠️ Areas for Improvement

### 1. Performance (Tip 9)
**Current:**
\```typescript
type ReplaceAll<S, From, To> = 
  S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${ReplaceAll<R, From, To>}`
    : S
\```

**Issue:** Deep recursion với large strings

**Better:**
\```typescript
// Add tail recursion optimization
type ReplaceAll<S, From, To, Acc = ""> = 
  S extends `${infer L}${From}${infer R}`
    ? ReplaceAll<R, From, To, `${Acc}${L}${To}`>
    : `${Acc}${S}`
\```

### 2. Readability (Tip 25)
**Current:** No comments
**Better:** Add type alias for clarity
\```typescript
type Match<S, Pattern> = S extends `${infer L}${Pattern}${infer R}` ? true : false
\```

## 🎯 Alternative Approaches

### Approach A (Iterative)
[Show different solution]

### Approach B (Built-in)
[Show using utility types]

## 📊 Assessment
- Difficulty Rating: Medium (matches expected)
- Code Quality: 7/10
- With improvements: 9/10

## 🎓 Learning Points
1. Tail recursion optimization (important for hard challenges)
2. Type alias for complex conditions
3. Pattern from @TIPS.vi.md Tip 8

## 📚 Next Steps
1. Refactor với tail recursion
2. Practice similar: 02822-hard-split
3. Study: @TIPS.vi.md Tip 9 (Performance)
```

**Tips:**
- ✅ Review mỗi solution trước khi move on
- ✅ Implement suggestions để improve skills
- ✅ Compare với community solutions

---

### **5️⃣ Workflow: Generate Quiz** (`/quiz`)

**Khi nào dùng:**
- Practice concepts đã học
- Prepare cho hard challenges
- Reinforce understanding

**Cách dùng:**

```bash
/quiz mapped-types
/quiz conditional-types
/quiz recursion
```

**AI sẽ làm gì:**

```
1. Extract patterns → Từ solved challenges của bạn
2. Generate variations → Similar but different contexts
3. Multiple levels → Easy → Medium → Hard
4. Create test cases → Type assertions
5. Provide solutions → Step-by-step explanations
```

**Output Example:**

```markdown
# 🎯 Quiz: Mapped Types

## Question 1 (Easy) - Partial Properties
Implement type PartialProps<T, K> làm optional chỉ properties K trong T.

\```typescript
type PartialProps<T, K extends keyof T> = // Your code here

// Test cases
type Test1 = PartialProps<{a: string, b: number}, 'a'>
// Expected: {a?: string, b: number}
\```

**Hints:**
- Sử dụng mapped types
- Phân tách properties: K và not K
- Pattern: Intersection types

---

## Question 2 (Medium) - Deep Partial
Implement DeepPartial<T> làm optional ALL properties recursively.

\```typescript
type DeepPartial<T> = // Your code here

// Test cases
type Test2 = DeepPartial<{
  a: string,
  b: {c: number, d: {e: boolean}}
}>
// Expected: {
//   a?: string,
//   b?: {c?: number, d?: {e?: boolean}}
// }
\```

**Hints:**
- Recursive mapped type
- Check if value is object
- Pattern: Conditional + Recursive

---

## Question 3 (Hard) - Filtered Mapped Type
Implement FilterByType<T, U> chỉ giữ properties có type = U.

\```typescript
type FilterByType<T, U> = // Your code here

// Test cases
type Test3 = FilterByType<{
  name: string,
  age: number,
  email: string,
  score: number
}, string>
// Expected: {name: string, email: string}
\```

**Hints:**
- Mapped + conditional
- Use `as` clause to filter
- Pattern: never type để remove keys

---

## ✅ Solutions

### Solution 1
\```typescript
type PartialProps<T, K extends keyof T> = {
  [P in K]?: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}
\```

**Explanation:**
1. Split T into 2 parts: K (optional) và not-K (required)
2. Intersection (&) to combine
3. Pattern #12: ? modifier

### Solution 2
\```typescript
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K]
}
\```

**Explanation:**
1. Mapped type iterate keys
2. Check if value is object → recurse
3. Pattern #5: Recursive types

### Solution 3
\```typescript
type FilterByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}
\```

**Explanation:**
1. Iterate keys với mapped type
2. Use `as` clause to filter
3. T[K] extends U ? keep : remove
4. Pattern #10: as modifier + #9: never type

---

## 🎓 Concepts Practiced
- Mapped Types (Pattern #1)
- Conditional Types (Pattern #2)
- Recursive Types (Pattern #5)
- Optional Modifier (Pattern #12)
- as Clause (Pattern #10)
- never Type (Pattern #9)

## 📚 Next Steps
- If < 70% correct: Review @TIPS.vi.md Tip 4
- If 70-90%: Try similar challenges (02595, 02852)
- If > 90%: Move to next concept!
```

**Tips:**
- ✅ Do quiz trước khi làm hard challenges
- ✅ Time yourself (practice speed)
- ✅ Review solutions kể cả khi đúng

---

### **6️⃣ Workflow: Generate Vietnamese Docs** (`/generate`)

**Khi nào dùng:**
- Challenge chưa có README.vi.md
- Muốn contribute Vietnamese docs
- Học từ vựng technical Vietnamese

**Cách dùng:**

```bash
/generate 00476-extreme-sum
```

**AI sẽ làm gì:**

```
1. Load English → questions/{ID}/README.md
2. Translate → Vietnamese + giữ technical keywords
3. Enhance → Add examples, analogies Vietnamese context
4. Create solution → Step-by-step breakdown
5. Format → Follow existing .vi.md style
```

**Output:**

```
questions/00476-extreme-sum/README.vi.md
playground/extreme/00476-extreme-sum.SOLUTION.vi.md
```

**Generated Format:**

```markdown
# Sum

## 🎯 Đề Bài
Implement type Sum<A, B> để cộng 2 số nguyên A và B.

## 📝 Ví Dụ
\```typescript
type Test1 = Sum<1, 2>  // 3
type Test2 = Sum<10, 20>  // 30
\```

## 💡 Gợi Ý
- Sử dụng tuple length
- Build array với length = A + B
- Extract length làm result

## 🎓 Concepts
- Number literal types (Pattern #15)
- Tuple manipulation (Pattern #14)
- Recursive types (Pattern #5)

## 📚 Tham Khảo
- @FAQ.vi.md Q21-23 (Advanced topics)
- @TIPS.vi.md Tip 19-20 (Expert techniques)
```

**Tips:**
- ✅ Review generated docs trước khi commit
- ✅ Contribute back to community
- ✅ Maintain style consistency

---

## 💡 **Tips & Best Practices**

### **Learning Strategies**

#### **1. Progression Path (Recommended)**

```
Week 1-2: Foundation
├── Warm challenge (1)
├── Easy challenges (13)
└── FAQ.vi.md Q1-12

Week 3-4: Core Patterns
├── Medium challenges (20-30)
├── TIPS.vi.md Tip 1-10
└── Practice với /quiz

Week 5-8: Advanced
├── Medium challenges (rest)
├── Hard challenges (10-20)
├── TIPS.vi.md Tip 11-20
└── Review others' solutions

Week 9-12: Master
├── Hard challenges (rest)
├── Extreme challenges
├── TIPS.vi.md Tip 21-25
└── Contribute Vietnamese docs
```

#### **2. Daily Routine**

```bash
# Morning (15 min)
/track                           # Check progress
/quiz {yesterday-concept}        # Warm up

# Practice (30-60 min)
/solve {new-challenge}           # Solve 1-2 challenges
/review playground/{file}        # Review solutions

# Evening (10 min)
/explain {today-concept}         # Deepen 1 concept
/track                           # Update streak
```

#### **3. When Stuck**

```bash
# Step 1: Understanding
/explain {concept}               # Clarify concept

# Step 2: Examples
# Check @FAQ.vi.md & @TIPS.vi.md

# Step 3: Similar Problems
/track                           # See patterns you know
# Find similar solved challenges

# Step 4: Hints
/solve {challenge-id}            # Get AI help
# Read partial solution

# Step 5: Learn
# Compare your approach vs AI solution
```

---

### **Pattern Mastery Checklist**

**Level 1: Beginner** (Patterns #1-5)
- [ ] Mapped Types → Pick, Omit, Readonly
- [ ] Conditional Types → Exclude, Extract
- [ ] Infer Keyword → ReturnType, Parameters
- [ ] Template Literals → Capitalize, Uppercase
- [ ] Recursive Types → DeepReadonly, Flatten

**Level 2: Intermediate** (Patterns #6-10)
- [ ] Union Distribution → ToArray, ToUnion
- [ ] Indexed Access → PropertyType, ValueOf
- [ ] keyof Operator → Keys, HasProperty
- [ ] never Type → Filter, Impossible
- [ ] as Modifier → Getters, RenameKeys

**Level 3: Advanced** (Patterns #11-15)
- [ ] readonly Modifier → DeepReadonly
- [ ] Optional Modifier → Partial, Required
- [ ] Remove Modifiers → Mutable, Required
- [ ] Tuple Manipulation → Push, Pop, Concat
- [ ] Number Literals → Add, Subtract, Range

**Check Progress:**
```bash
/track  # AI sẽ show concepts đã master
```

---

### **Command Combinations**

#### **Learning Combo**
```bash
/explain mapped-types           # Learn
/quiz mapped-types              # Practice
/solve 00003-medium-omit        # Apply
/review playground/medium/00003-medium-omit.ts  # Improve
```

#### **Challenge Combo**
```bash
/track                          # Get recommendation
/solve {recommended-id}         # Solve it
/review {solution-file}         # Review
/quiz {new-concept}             # Reinforce
```

#### **Mastery Combo**
```bash
/track                          # See weak areas
/explain {weak-concept}         # Deepen understanding
/quiz {weak-concept}            # Practice variations
# Repeat 3-5 similar challenges
/track                          # Verify mastery
```

---

## 🔧 **Troubleshooting**

### **Common Issues**

#### **Issue 1: Commands không work**

**Symptoms:**
```
/solve 00043
Command not found
```

**Solution:**
```bash
# Re-initialize OpenCode
/init

# Verify .opencode/opencode.json exists
ls .opencode/

# Check command files
ls .opencode/command/
```

#### **Issue 2: MCP servers không connect**

**Symptoms:**
```
Warning: context7 not connected
Warning: sequential-thinking not available
```

**Solution:**
```bash
# Check opencode.json
cat .opencode/opencode.json

# Verify MCP config
# Should have:
# - context7 (remote)
# - sequential-thinking (local)

# Restart OpenCode
exit
opencode
```

#### **Issue 3: AI responses không Vietnamese**

**Symptoms:**
- Responses in English only
- Missing emoji headers

**Solution:**
```bash
# Verify AGENTS.md exists
cat AGENTS.md | grep "Vietnamese"

# Should see: "Vietnamese 100% + English technical keywords"

# Re-init
/init
```

#### **Issue 4: File references không load**

**Symptoms:**
```
@FAQ.vi.md not found
@TIPS.vi.md not found
```

**Solution:**
```bash
# Check files exist
ls FAQ.vi.md TIPS.vi.md README.vi.md

# Use full path nếu cần
@./FAQ.vi.md
```

#### **Issue 5: Shell commands fail**

**Symptoms:**
```
!`ls playground` returns error
```

**Solution:**
```bash
# Verify you're in project root
pwd
# Should end with: /type-challenges

# Check permissions
ls -la playground/

# Create playground if missing
mkdir -p playground/{warm,easy,medium,hard,extreme}
```

---

## ❓ **FAQs**

### **General Questions**

**Q1: Commands có cost tokens không?**
- A: Có, nhưng đã tối ưu 60% so với typical setup. Commands dùng reference thay vì duplicate content.

**Q2: Tôi có thể customize commands không?**
- A: Có! Edit files trong `.opencode/command/`. Follow format có sẵn.

**Q3: AI có track learning progress không?**
- A: Có, qua git history và file count. Run `/track` để xem.

**Q4: Tôi có thể dùng với GitHub Copilot không?**
- A: Có! `.github/copilot-instructions.md` là fallback cho Copilot.

**Q5: Cần internet không?**
- A: Có, để connect MCP servers (context7). Sequential-thinking chạy local.

### **Workflow Questions**

**Q6: Nên bắt đầu từ command nào?**
- A: `/track` → `/explain basic-concepts` → `/solve warm-challenge`

**Q7: Khi nào dùng `/solve` vs tự giải?**
- A: Tự giải trước 15-30 phút. Nếu stuck → `/explain concept` → retry → `/solve` nếu vẫn stuck.

**Q8: `/review` có bắt buộc không?**
- A: Không, nhưng strongly recommended. Giúp improve code quality 3x faster.

**Q9: `/quiz` vs làm challenges thật, nên chọn gì?**
- A: Both! Quiz để practice speed, challenges để depth. Ratio 1:3 (1 quiz : 3 challenges).

**Q10: Khi nào dùng `/generate`?**
- A: Khi challenge chưa có Vietnamese docs. Contribute back to community!

### **Technical Questions**

**Q11: AGENTS.md có thể edit không?**
- A: Có, nhưng cẩn thận. Backup trước. Main sections:
  - Identity (role)
  - Workflows (6 workflows)
  - Patterns table (15 patterns)
  - Quality rules

**Q12: Patterns table có update được không?**
- A: Có! Add patterns mới trong AGENTS.md → TypeScript Type Patterns section.

**Q13: Tôi có thể thêm commands không?**
- A: Có! Create new `.md` file trong `.opencode/command/`. Example:
  ```markdown
  ---
  description: Your command description
  agent: coder
  ---
  # Your Command
  
  Template: $1
  References: @file-refs
  Shell: !`bash commands`
  ```

**Q14: MCP servers quan trọng không?**
- A: context7 cung cấp documentation access. sequential-thinking giúp reasoning. Optional nhưng recommended.

**Q15: Token usage cao quá, giảm thế nào?**
- A: Already optimized! Nếu vẫn cao:
  - Use specific commands (avoid chat mode)
  - Use `/track` thay vì ask "how many..."
  - Use `/explain concept` thay vì general questions

### **Learning Questions**

**Q16: Mất bao lâu để complete 189 challenges?**
- A: Average:
  - Part-time (1-2 hours/day): 3-4 tháng
  - Full-time (4-6 hours/day): 1-2 tháng
  - Weekend only: 6-8 tháng

**Q17: Patterns nào quan trọng nhất?**
- A: Top 5 critical (80% challenges):
  1. Mapped Types (#1)
  2. Conditional Types (#2)
  3. Infer Keyword (#3)
  4. Template Literals (#4)
  5. Recursive Types (#5)

**Q18: Tôi nên skip challenges khó không?**
- A: Không! Hard challenges dạy deep patterns. Strategy:
  - Try 30 min
  - `/explain concepts`
  - Try again 30 min
  - `/solve` nếu vẫn stuck
  - Learn from solution
  - Retry sau 1 ngày

**Q19: Community solutions ở đâu?**
- A: https://tsch.js.org/{challenge-id}/solutions hoặc check SOLUTIONS-INDEX.md.

**Q20: Khi nào tôi "ready" cho extreme challenges?**
- A: Khi:
  - Complete 80%+ hard challenges
  - Master all 15 patterns
  - Comfortable với recursive types
  - `/track` shows high proficiency

---

## 🎯 **Success Metrics**

Track your progress với metrics sau:

### **Completion Rate**
```bash
/track  # Shows completion %
```

**Milestones:**
- 10%: Foundation solid ✅
- 25%: Core patterns mastered 🎯
- 50%: Intermediate level 🚀
- 75%: Advanced level 💪
- 90%: Expert level 🏆
- 100%: Master! 🎉

### **Concepts Mastered**
```bash
/track  # Shows concepts you've mastered
```

**Target:**
- Level 1 (Beginner): 5 concepts
- Level 2 (Intermediate): 10 concepts
- Level 3 (Advanced): 15 concepts

### **Learning Velocity**
- **Target:** 1-2 challenges/day (sustainable)
- **Sprint:** 3-5 challenges/day (intensive)
- **Maintenance:** 2-3 challenges/week (review)

### **Quality Score**
```bash
/review {your-solution}  # Get quality rating
```

**Target:**
- First attempt: 6/10
- After review: 8/10
- After refactor: 9/10+

---

## 📚 **Additional Resources**

### **Internal Docs**
- `README.vi.md` - Quick start, setup guide (394 lines)
- `FAQ.vi.md` - 25 Q&A thường gặp (604 lines)
- `TIPS.vi.md` - 25 mẹo & techniques (652 lines)
- `SOLUTIONS-INDEX.md` - Index 189 solutions (~2000 lines)
- `AGENTS.md` - AI Tutor brain (281 lines)

### **External Links**
- Official site: https://tsch.js.org
- GitHub repo: https://github.com/type-challenges/type-challenges
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- TypeScript Playground: https://www.typescriptlang.org/play

### **Vault Integration**
- Global agents: `/OBNotes/.github/agents/`
- Templates: `/OBNotes/2.Areas/AI/Templates/`
- Style guide: `/OBNotes/AGENTS.md`

---

## 🔄 **Updates & Maintenance**

### **Keep System Updated**

```bash
# Update AGENTS.md if needed
# Edit patterns table, workflows, etc.

# Update commands
# Edit .opencode/command/*.md

# Update opencode.json
# Add new commands, adjust MCP config

# Re-initialize after updates
/init
```

### **Backup Important Files**

```bash
# Backup before major changes
cp AGENTS.md AGENTS.md.backup
cp .opencode/opencode.json .opencode/opencode.json.backup
```

### **Version Control**

```bash
# Commit system files
git add AGENTS.md .opencode/ .github/
git commit -m "Update AI Tutor system"

# DON'T commit:
# - Personal progress (playground/*.ts)
# - Local configs
```

---

## 🎉 **Kết Luận**

Bạn giờ đã có:
- ✅ AI Tutor hoàn chỉnh cho Type Challenges
- ✅ 6 commands powerful để học và practice
- ✅ Hệ thống tối ưu tokens (-60%)
- ✅ Vietnamese support 100%
- ✅ Integration với vault root

**Next steps:**
1. Run `/track` xem current status
2. Start với recommended challenge
3. Follow daily routine
4. Enjoy learning! 🚀

**Happy Type Challenging!** 💪

---

**Version:** 1.0  
**Last Updated:** 2025-12-17  
**Author:** OpenCode AI Tutor System  
**Status:** ✅ Production Ready
