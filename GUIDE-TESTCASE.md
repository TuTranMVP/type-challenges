---
title: "Hướng Dẫn Chạy Test Case - Type Challenges"
type: "guide"
lang: "vi"
audience: "Vietnamese TypeScript developers"
level: "beginner-intermediate"
difficulty: "low"
created: 2025-12-16
updated: 2025-12-16
tags:
  - type-challenges
  - typescript
  - testing
  - guide
  - vietnamese
---

# 📚 Hướng Dẫn Chạy Test Case - Type Challenges

> **🎯 Mục tiêu:** Giúp dev Việt hiểu cách chạy và kiểm tra test case trong Type Challenges mà không cần biết quá nhiều về TypeScript compiler

---

## ⚡ **Quick Summary (30 giây)**

| Khái Niệm | Giải Thích |
|----------|-----------|
| **Type Challenges là gì?** | Bài tập luyện TypeScript **type system** - viết code kiểu (type) chứ không phải runtime code |
| **Test case là gì?** | Các kiểm tra **kiểu dữ liệu** để xác nhận solution của bạn có đúng không |
| **Cách chạy test?** | **KHÔNG** dùng jest/vitest - chỉ cần TypeScript compiler (tsc) kiểm tra kiểu |
| **Pass test thế nào?** | Nếu **không có lỗi đỏ** trong IDE hoặc `tsc` không báo lỗi = **PASS** ✅ |

---

## 🛠️ **Phần 1: Cài Đặt Môi Trường (5 phút)**

### 1.1 **Kiểm Tra Yêu Cầu**

Bạn cần:
- ✅ **Node.js 18+** (kiểm tra: `node --version`)
- ✅ **pnpm** (package manager - nhanh hơn npm)
- ✅ **VS Code** + Extension **TypeScript** (có sẵn khi cài TypeScript)

### 1.2 **Cài Đặt pnpm** (nếu chưa có)

```bash
# Cài pnpm (global)
npm install -g pnpm

# Kiểm tra
pnpm --version
```

### 1.3 **Setup Type Challenges Repository**

```bash
# 1. Clone fork của bạn hoặc repo gốc
git clone https://github.com/TuTranMVP/type-challenges.git
cd type-challenges

# 2. Cài dependencies
pnpm install

# 3. Xác nhận cài xong (phải thấy node_modules/)
ls -la node_modules | head -5
```

✅ **Done!** Bây giờ sẵn sàng giải challenges.

---

## 🎮 **Phần 2: Workflow Chi Tiết - Bước Từng Bước**

### **Bước 1: Tạo Playground (lần đầu tiên)**

Playground là thư mục chứa tất cả challenges dạng `.ts` file riêng biệt.

```bash
# Chạy script generate
pnpm generate

# Terminal sẽ hỏi: chọn ngôn ngữ (English, Japanese, Korean, v.v.)
# Chọn: English (hoặc ngôn ngữ bạn thích)
#
# Output:
# ✅ Local playground generated at: /path/to/playground
```

📂 **Kết quả:** Thư mục `playground/` được tạo với cấu trúc:
```
playground/
├── warm/              # Challenges "khởi động" (1 bài)
│   └── 00013-warm-hello-world.ts
├── easy/              # Challenges "dễ" (13 bài)
│   ├── 00004-easy-pick.ts
│   ├── 00007-easy-readonly.ts
│   └── ... (11 bài khác)
├── medium/            # Challenges "trung bình" (102 bài)
├── hard/              # Challenges "khó" (56 bài)
└── extreme/           # Challenges "cực khó" (17 bài)
```

### **Bước 2: Mở File Challenge trong VS Code**

```bash
# Mở VS Code tại repository
code .

# Hoặc nếu VS Code đã mở, Ctrl+P → type tên file
# Ví dụ: "00013-warm-hello-world.ts"
```

### **Bước 3: Đọc Bài Toán**

Mở file `playground/warm/00013-warm-hello-world.ts` - bạn sẽ thấy:

```typescript
/*
  13 - Hello World
  -------
  by Anthony Fu (@antfu) #warm-up

  ### Question

  Hello, World!

  In Type Challenges, we use the type system itself to do the assertion.

  For this challenge, you will need to change the following code to make
  the tests pass (no type check errors).

  ```ts
  type HelloWorld = any
  ```

  Click the `Take the Challenge` button to start coding!
  > View on GitHub: https://tsch.js.org/13
*/
```

**📖 Cách đọc:**
1. **Phần comment** (trong `/* ... */`) = đề bài problem
2. **`type HelloWorld = any`** = code bạn cần sửa
3. **Bên dưới** = test cases để kiểm tra

### **Bước 4: Tìm Vị Trí Code Cần Sửa**

Tìm dòng có comment `/* _____________ Your Code Here _____________ */`:

```typescript
/* _____________ Your Code Here _____________ */

type HelloWorld = any  // ← TẠI ĐÂY: Thay "any" bằng solution của bạn

/* _____________ Test Cases _____________ */
```

### **Bước 5: Viết Solution**

**Ví dụ 1: Hello World (Warm)**

```typescript
// TRƯỚC (template):
type HelloWorld = any

// SAU (solution):
type HelloWorld = string
```

**Ví dụ 2: Pick (Easy)**

```typescript
// TRƯỚC:
type MyPick<T, K> = any

// SAU (solution):
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

### **Bước 6: Kiểm Tra Test Cases**

Giờ VS Code sẽ hiển thị test cases:

```typescript
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<HelloWorld, string>>,
  // ... thêm test cases khác
]
```

**🔍 Cách đọc test:**
- `Expect<Equal<HelloWorld, string>>` = kiểm tra `HelloWorld` có **chính xác bằng** `string` không
- Nếu đúng → `Expect` nhận `true` → **PASS** ✅
- Nếu sai → TypeScript báo lỗi → **FAIL** ❌

---

## 🧪 **Phần 3: Cách Kiểm Tra Đúng/Sai**

### **Cách 1️⃣: IDE Method (VỊ TRƯỚC - EASY NHẤT)**

Đơn giản nhất: **Nếu không có gạch đỏ trong editor = PASS** ✅

**Visual Demo:**

```typescript
// ✅ PASS - Không có gạch đỏ
type HelloWorld = string
type test = Expect<Equal<HelloWorld, string>>  // ✓ OK

// ❌ FAIL - Có gạch đỏ (error underline)
type HelloWorld = number
type test = Expect<Equal<HelloWorld, string>>  // ✗ Type 'number' is not assignable to 'string'
```

**Làm sao nhìn lỗi:**
1. Nếu có **gạch đỏ** hoặc **gạch sóng màu đỏ** → lỗi
2. Hover chuột vào lỗi → xem chi tiết

### **Cách 2️⃣: Terminal Method (CLI)**

Nếu IDE không hiển thị lỗi, chạy terminal:

```bash
# Kiểm tra một file cụ thể
npx tsc --noEmit playground/warm/00013-warm-hello-world.ts

# Nếu PASS → không output gì (hoặc "0 errors")
# Nếu FAIL → hiển thị lỗi chi tiết
```

**Output khi PASS:**
```bash
$ npx tsc --noEmit playground/warm/00013-warm-hello-world.ts
# (không có output = success)
```

**Output khi FAIL:**
```bash
$ npx tsc --noEmit playground/easy/00004-easy-pick.ts

playground/easy/00004-easy-pick.ts:34:5 - error TS2322: Type 'any' is not
assignable to type 'Pick<Todo, "title">'.

34 type MyPick<T, K> = any
   ^^^^^^

Found 1 error in playground/easy/00004-easy-pick.ts.
```

**📖 Cách đọc error:**
- `error TS2322:` = TypeScript error code
- `Type 'any' is not assignable to...` = giải thích lỗi
- Line `34` = dòng có lỗi

### **Cách 3️⃣: IDE Command Palette**

```bash
# Bấm Ctrl+Shift+P (hoặc Cmd+Shift+P trên Mac)
# Type: "TypeScript: Restart TS Server"
# Bấm Enter → IDE sẽ re-check tất cả errors
```

---

## 📊 **Phần 4: Cấu Trúc File Test - Giải Thích Chi Tiết**

### **Thành Phần Chính**

```typescript
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyPick<Todo, 'title'>, Expected1>>,
  Expect<Equal<MyPick<Todo, 'title' | 'completed'>, Expected2>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
```

### **Giải Thích Từng Phần**

#### **1️⃣ Import Utilities**

```typescript
import type { Equal, Expect } from '@type-challenges/utils'
```

| Utility | Mục Đích |
|---------|----------|
| `Expect<T>` | Kiểm tra `T` có `true` không. Nếu không → lỗi TS |
| `Equal<X, Y>` | So sánh type `X` và `Y` có **chính xác bằng nhau** không. Return `true` hoặc `false` |
| `NotEqual<X, Y>` | Ngược lại `Equal` |
| `IsAny<T>` | Kiểm tra `T` có phải `any` type không |
| `NotAny<T>` | Kiểm tra `T` **không phải** `any` type |

#### **2️⃣ Test Cases Tuple**

```typescript
type cases = [
  Expect<Equal<MyPick<Todo, 'title'>, Expected1>>,  // Test case 1
  Expect<Equal<MyPick<Todo, 'title' | 'completed'>, Expected2>>,  // Test case 2
]
```

**Logic:**
1. Gọi solution: `MyPick<Todo, 'title'>`
2. So sánh kết quả với expected: `Expected1`
3. `Equal<...>` trả về `true` nếu match, `false` nếu không
4. `Expect<true>` = PASS ✅
5. `Expect<false>` = FAIL ❌

#### **3️⃣ @ts-expect-error - Test Case Âm**

```typescript
// @ts-expect-error
MyPick<Todo, 'title' | 'completed' | 'invalid'>
```

**Ý nghĩa:** TypeScript **nên báo lỗi** ở dòng này vì:
- `'invalid'` không phải key của `Todo`
- `@ts-expect-error` = "tôi **mong đợi** có lỗi ở đây"

Nếu:
- ✅ Có lỗi → PASS (như mong đợi)
- ❌ Không lỗi → FAIL (không như mong đợi)

---

## 🎯 **Phần 5: Workflow Hoàn Chỉnh (Start to Finish)**

### **Scenario: Giải Challenge #00004 - Pick**

**Step 1: Mở file**

```bash
code playground/easy/00004-easy-pick.ts
```

**Step 2: Đọc problem**

```typescript
/*
  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  // Result: { title: string; completed: boolean }
*/
```

**Step 3: Tìm template**

```typescript
/* _____________ Your Code Here _____________ */

type MyPick<T, K> = any  // ← Fix this
```

**Step 4: Write solution**

```typescript
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

**Step 5: Check VS Code**

- Nếu **không có gạch đỏ** → ✅ PASS
- Nếu **có gạch đỏ** → ❌ FAIL, fix lại

**Step 6: Verify với terminal (optional)**

```bash
npx tsc --noEmit playground/easy/00004-easy-pick.ts
# Không output = success ✅
```

**Step 7: Continue next challenge**

```bash
# Mở file khác (Ctrl+P)
# 00007-easy-readonly.ts
```

---

## 🔍 **Phần 6: Cách Đọc & Hiểu Error Messages**

### **Common Errors & Solutions**

#### **Error 1️⃣: Type Mismatch**

```
error TS2322: Type 'string' is not assignable to type 'number'.
```

**Ý nghĩa:** Solution của bạn return `string` nhưng test expect `number`

**Fix:**
```typescript
// ❌ WRONG
type GetType<T> = string

// ✅ CORRECT
type GetType<T> = T extends number ? number : string
```

#### **Error 2️⃣: Unknown Type**

```
error TS2749: 'T' refers to a value, but is being used as a type here.
```

**Ý nghĩa:** Bạn dùng `T` (variable) thay vì `T` (generic type)

**Fix:**
```typescript
// ❌ WRONG
type MyType<T> = T + string  // T là type, không thể cộng như số

// ✅ CORRECT
type MyType<T> = T extends string ? string : never
```

#### **Error 3️⃣: Missing Property**

```
error TS2741: Property 'title' is missing in type '{ }'
but required in type '{ title: string; }'.
```

**Ý nghĩa:** Object của bạn thiếu property `title`

**Fix:** Đảm bảo solution bao gồm tất cả required properties

---

## 💡 **Phần 7: Tips & Best Practices**

### **Tip 1️⃣: Bắt Đầu Từ Warm → Easy → Medium**

```
Warm (1 bài)    ✅ Bắt đầu ở đây - siêu dễ
   ↓
Easy (13 bài)   ✅ Dễ - nắm foundation
   ↓
Medium (102)    ⚠️ Khó hơn - cần mental models
   ↓
Hard (56 bài)   🔴 Khó - thử thách
   ↓
Extreme (17)    🚨 Cực khó - expert level
```

### **Tip 2️⃣: Dùng VS Code Extensions**

**Khuyến nghị cài:**
- `TypeScript Vue Plugin (Volar)` - nếu dùng Vue
- `ES7+ React/Redux/React-Native snippets` - nếu dùng React
- `Prettier` - auto-format code

```bash
# Cài VS Code extension từ terminal
code --install-extension esbenp.prettier-vscode
```

### **Tip 3️⃣: Dùng Utility Types Có Sẵn**

TypeScript có built-in type utilities - dùng để học:

```typescript
// Built-in (không dùng cho challenges, nhưng để học)
type Pick<T, K extends keyof T> = { [P in K]: T[P] }
type Exclude<T, U> = T extends U ? never : T
type Extract<T, U> = T extends U ? T : never

// Để practice, bạn implement lại:
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
type MyExclude<T, U> = T extends U ? never : T
```

### **Tip 4️⃣: Đọc Solutions Online**

Nếu stuck, check solutions community:

```
https://tsch.js.org/{ID}/solutions

Ví dụ: https://tsch.js.org/4/solutions (Pick challenge)
```

**Cách học tốt:**
1. ⏰ Cố gắng solve 15-20 phút
2. Nếu stuck → check solutions
3. Đọc top solutions (⭐ stars cao nhất)
4. Copy solution vào file bạn
5. Modify và experiment

### **Tip 5️⃣: Dùng Debug Type Utility**

Để debug type-level code, dùng `Debug` utility:

```typescript
import type { Debug } from '@type-challenges/utils'

// Xem type expansion
type Result = Debug<MyPick<Todo, 'title'>>
// Hover vào Result → sẽ thấy:
// type Result = { title: string }
```

### **Tip 6️⃣: Dùng TypeScript's `satisfies` Operator**

Từ TypeScript 4.9+, dùng `satisfies`:

```typescript
type Person = { name: string; age: number }

// Kiểm tra type trong lúc viết
const person = {
  name: 'Tu',
  age: 25,
  email: 'tu@example.com',  // ← error: object literal may only specify known properties
} satisfies Person;
```

### **Tip 7️⃣: Bật Strict Mode**

Hãy bật strict mode khi learning:

```json
{
  "compilerOptions": {
    "strict": true,              // ✅ Enable all checks
    "noImplicitAny": true,       // ✅ Không để `any`
    "strictNullChecks": true,    // ✅ Kiểm tra null/undefined
    "strictFunctionTypes": true  // ✅ Kiểm tra function types
  }
}
```

---

## ⚙️ **Phần 8: Advanced - Regenerate Playground**

### **Scenario: Muốn Reset Tất Cả Solutions**

```bash
# Delete playground và regenerate
rm -rf playground/
pnpm generate

# Chọn ngôn ngữ lại
# → Playground mới được tạo, tất cả solutions bị reset
```

### **Scenario: Muốn Keep Changes Khi Update**

```bash
# Nếu questions/ có challenges mới
# Regenerate nhưng giữ lại solutions cũ
pnpm generate --keep-changes

# HOẶC
pnpm generate -K
```

### **Scenario: Chọn Ngôn Ngữ Khác**

```bash
# Regenrate with language selector
pnpm generate en   # English
pnpm generate vi   # Vietnamese (nếu có)
pnpm generate ja   # Japanese
```

---

## 🆘 **Phần 9: Troubleshooting**

### **Problem 1️⃣: "Cannot find module '@type-challenges/utils'"**

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### **Problem 2️⃣: "Playground không được generate"**

**Solution:**
```bash
# Xóa cache và regenerate
rm -rf playground/ .playgroundcache
pnpm generate
```

### **Problem 3️⃣: "VS Code không show TypeScript errors"**

**Solution:**
```bash
# Bất Ctrl+Shift+P (Cmd+Shift+P on Mac)
# Chọ: "TypeScript: Restart TS Server"
# Hoặc reload window: Ctrl+R (Cmd+R on Mac)
```

### **Problem 4️⃣: "Solution của tôi không pass test"**

**Debug steps:**
1. ✅ Xem lỗi TypeScript (gạch đỏ)
2. ✅ Hover chuột để đọc error message
3. ✅ Kiểm tra test case - bạn có understand không?
4. ✅ Chạy `npx tsc --noEmit [file].ts` để thấy full error
5. ✅ Compare với expected type

---

## 📚 **Phần 10: Reference & Resources**

### **Tài Liệu Chính**

| Resource | Link | Mục Đích |
|----------|------|---------|
| **Type Challenges Official** | https://github.com/type-challenges/type-challenges | Repository gốc |
| **TypeScript Handbook** | https://www.typescriptlang.org/docs/handbook/ | Tài liệu TypeScript chính thức |
| **Solutions Community** | https://tsch.js.org/{ID}/solutions | Xem solutions từ community |

### **Related Files in This Repository**

| File | Mục Đích |
|------|---------|
| `README.md` | Giới thiệu chung |
| `README.vi.md` | Bản Việt |
| `FAQ.vi.md` | Câu hỏi thường gặp |
| `TIPS.vi.md` | Mẹo advanced |
| `.github/instructions/` | Rules and conventions |

### **TypeScript Resources**

```
📖 TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
📺 Video: "Advanced TypeScript with Zod" (Adam Wathan)
📗 Book: "Programming TypeScript" (Boris Cherny)
💻 Playground: https://www.typescriptlang.org/play (thử TypeScript online)
```

---

## ✅ **Phần 11: Checklist Trước Khi Submit Solution**

Trước khi submit solution online (`https://tsch.js.org/{ID}/answer`):

```
☐ Không có lỗi đỏ trong VS Code
☐ Chạy `npx tsc --noEmit` không báo lỗi
☐ Kiểm tra tất cả test cases (cases array)
☐ Kiểm tra @ts-expect-error cases (nên báo lỗi)
☐ Solution tuân theo requirements (không cheat)
☐ Code readable và có comments nếu cần
☐ Compare với expected types - match không?
```

---

## 🎓 **Summary & Next Steps**

### **Bạn đã học:**
- ✅ Cách setup type-challenges
- ✅ Cách generate playground
- ✅ Cách viết solution
- ✅ 3 cách kiểm tra test (IDE, CLI, commands)
- ✅ Cách đọc test cases
- ✅ Cách debug errors
- ✅ Best practices và tips

### **Tiếp theo:**
1. **Warm (1 bài)** → Tìm hiểu cấu trúc cơ bản
2. **Easy (13 bài)** → Nắm vững foundation types
3. **Medium (102)** → Vận dụng advanced patterns
4. **Hard (56)** → Thử thách logic
5. **Extreme (17)** → Expert level thinking

### **Mỗi challenge:**
```
Đọc problem (2-3 phút)
  ↓
Viết solution (5-30 phút)
  ↓
Kiểm tra test (1 phút)
  ↓
Đọc solutions community (5-10 phút)
  ↓
Experiment & learn (10-20 phút)
```

---

## 🤝 **Support & Community**

Nếu có câu hỏi:
- 📖 Check `FAQ.vi.md` trong repo
- 💡 Check `TIPS.vi.md` cho advanced topics
- 🔗 Community solutions: `https://tsch.js.org/{ID}/solutions`
- 🐙 GitHub Issues: https://github.com/type-challenges/type-challenges/issues

---

**Happy Coding! 🚀**

Last updated: 2025-12-16
