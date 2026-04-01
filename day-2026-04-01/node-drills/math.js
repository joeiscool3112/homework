// Viết 1 file math.js chứa các hàm (add, multiply, divide). Xuất ra (export).

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    add,
    multiply,
    divide
}