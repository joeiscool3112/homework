// Viết 1 file app.js import các hàm đó và chạy thử.
//Cài đặt 1 thư viện npm nhỏ trên mạng (VD: uuid), dùng nó tạo ra 5 ID ngẫu nhiên in ra màn hình.

const math = require('./math');
const uuid = require('uuid');

for (let i = 0; i < 5; i++) {
    console.log(uuid.v4());
}

console.log(math.add(2, 3));
console.log(math.multiply(2, 3));
console.log(math.divide(2, 3));
