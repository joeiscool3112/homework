function printArray(arr) {
    for (let x of arr) {
        console.log(x);
    }
}

printArray([1, 2, 3]);



function sumArray(arr) {
    let sum = 0;
    for (let x of arr) {
        sum = sum + x;
    }
    return sum;
}

console.log(sumArray([1, 2, 3]));



function countEven(arr) {
    let count = 0;
    for (let x of arr) {
        if (x % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEven([1, 2, 4, 7]));




function printArrayWhile(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

printArrayWhile([1, 2, 3]);




function sumArrayWhile(arr) {
    let sum = 0;
    let i = 0;

    while (i < arr.length) {
        sum = sum + arr[i];
        i++;
    }

    return sum;
}

console.log(sumArrayWhile([1, 2, 3]));




function countOddWhile(arr) {
    let count = 0;
    let i = 0;

    while (i < arr.length) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
        i++;
    }

    return count;
}

console.log(countOddWhile([1, 2, 4, 7]));
