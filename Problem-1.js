function PrimeX(numbers) {
    if (numbers < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(PrimeX(2));
console.log(PrimeX(11));