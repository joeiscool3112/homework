# Ghi chú học tập (day-2026-02-09)

## 1) Concept dễ sai

### Validate input (quan trọng)
- **Array**: dùng `Array.isArray(arr)` để chắc chắn là mảng.
- **Number**: dùng `Number.isFinite(n)` để chặn `NaN`, `Infinity`.
- **Integer**: dùng `Number.isInteger(n)` khi bài yêu cầu số nguyên 
### `switch(true)`
- Mẹo để thay `if/else if` bằng `switch`.
- Ví dụ: `switch(true) { case score >= 90: ... }`.

### Map/Set
- `Map`: lưu cặp `key -> value`, dùng tốt cho Two Sum: `seen.set(value, index)`.

## 2) Lỗi gặp phải & cách fix

### (A) Parse input number trong calculator
- **Lỗi**: `Number('')` ra `0` hoặc để trống bị xử lý sai, hoặc `Number('abc')` ra `NaN` nhưng vẫn coi là hợp lệ.
- **Fix**: tách hàm `parseNumber()`:
  - trim chuỗi
  - nếu rỗng => invalid

### (B) Chia cho 0
- **Fix**: check `op === '/' && b === 0` trước khi tính.

### (C) Viết drills bằng `let arr` lặp lại
- **Lỗi**: khai báo `let arr` nhiều lần cùng scope sẽ **SyntaxError**.
- **Fix**: chuyển thành **hàm** + demo riêng.

## 3) Độ phức tạp

### Array drills cơ bản
- `sum/max/min/count/reverse/unique` đều là **O(n)** thời gian.
- `merge 2 mảng` là **O(n + m)**.
- `chunkArray` là **O(n)**.
