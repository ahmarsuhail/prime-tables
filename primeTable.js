const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

/**
 * Generates and returns an array of N prime numbers 
 * i.e: for numberOfPrimes = 3, returns [2, 3, 5]
 * @param {*} numberOfPrimes 
 */
const generatePrimes = (numberOfPrimes) => {

    const result = [];
    const findPrimesTill = (numberOfPrimes < 4) ? 6: Math.round(numberOfPrimes * Math.log2(numberOfPrimes));
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

/**
 * Generates and returns a 2-D array with the result of 
 * multiplying generated prime numbers with each other.
 * @param {*} numberOfPrimes 
 */
const generateTable = (numberOfPrimes) => {
    const primes = generatePrimes(numberOfPrimes);
    const table = [];
    
    for(let i=0; i<primes.length; i++) {
        let temp = [];
        temp.push(primes[i]);
        table.push(temp);
    }

    primes.unshift(' ');
    table.unshift(primes);

    for(let i=1; i<table.length; i++) {
        for(let j=1; j<primes.length; j++) {
            table[i].push(table[i][0]*primes[j]);
        }
    }

    return table;
}

const generatePrimeNumberTables = () => { 
    rl.question('Enter the number of primes: ', (numberOfPrimes) => {
        const primeNumberTable = generateTable(numberOfPrimes);
        
        console.log(primeNumberTable);
        
        fs.writeFile(path.join(__dirname, '/results', `${numberOfPrimes}_Table.txt`), JSON.stringify(primeNumberTable), (err) => {
            if(err)
                console.log(err);
        });
        
        rl.close();
      });
}

generatePrimeNumberTables();

module.exports = {
    generatePrimes,
    generateTable
}

