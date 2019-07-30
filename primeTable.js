
const generatePrimes = (numberOfPrimes) => {

    const result = [];
    const findPrimesTill = Math.round(numberOfPrimes * Math.log2(numberOfPrimes));
    const isPrime = new Array(findPrimesTill).fill(true);
    
    for(let i=2; i<Math.sqrt(findPrimesTill); i++) {
        if(isPrime[i]) {
            for(let j=i; i*j<findPrimesTill; j++) {
                isPrime[i*j] = false;
            }
        }
    }

    for(let i=2; i<=isPrime.length; i++) {
        
        if(numberOfPrimes == 0)
            break;

        if(isPrime[i]) {
            result.push(i);
            numberOfPrimes--;
        }
    }

    return result;
}

module.exports = {
    generatePrimes
}

