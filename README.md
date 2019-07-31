# Prime Table Generator #

Node.js application to generate the product of N primes.

It takes an input from the user and the generates a mutliplication table of primes. 

For N = 3 (i.e first three primes), it outputs:

 ``` 
  | 2 | 3 | 5 
2 | 4 | 6 | 10
3 | 6 | 9 | 15
5 | 10 | 15 | 25 
```

## Installation:

* git clone https://github.com/ahmarsuhail/prime-tables.git
* cd into directory & run npm install
* npm start
* On the console, enter the number of primes you want to generate the table for
* When the application prints "Done calculating, view results!" on the console, you can view the prime table in the results folder.

## Pleased with:

I'm happy with the efficiency of the algorithm that generates the primes. It uses the Sieve of Eratosthenes which has a much better time complexity than the brute force algorithm which would use O(n^3/2).

## Todo:

Write a better test case for generateTable():
 Currently, it only checks if the file has been created and not the actual contents. Since I use a writeStream and it's async, I wasn't sure how to do this, and need to read more about it.

Parallelize/Optimize generateTable(): 
Though the actual prime number generation is very fast, for larger numbers generateTable takes a lot of time.
Primarily, this is because writing to disk is slow. One way I can think of optimizing this is by splitting the multiplication and writing to disk in parts. 
For eg, for a two core machine: 

```
let primes = [2,3,5,7]
mutiplyAndWriteToDisk(primes, 0, primes.length/2)
mutiplyAndWriteToDisk(primes, primes.length/2, primes.length)
``` 

This would then write to two different files & you can merge them together in the end.

Since Node.js uses a single thread, you would fork a new process using the child_process library.

