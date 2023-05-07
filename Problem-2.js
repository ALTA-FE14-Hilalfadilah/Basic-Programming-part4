function fibonacci(fibo) {
    if (fibo === 0) {
        return 0;
    }
    if (fibo === 1) {
        return 1;
    }
    return fibonacci(fibo - 1) + fibonacci(fibo - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(2));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(12));
