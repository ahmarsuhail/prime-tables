const { generatePrimes, generateTable } = require('../primeTable')
const primeNumberLists = require('./primeNumberLists.json');
const primeNumberTables = require('./primeNumberTables');
const expect = require('chai').expect;
const assert = require('assert');

describe('Prime table generator', function () {

  describe('generatePrimes()', function () {

    it('should generate first three prime numbers', function () {
      expect(primeNumberLists.firstThreePrimes).to.eql(generatePrimes(3));
    });

    it('should generate first five prime numbers', function () {
      expect(primeNumberLists.firstFivePrimes).to.eql(generatePrimes(5));
    });

    it('should generate first hundred prime numbers', function () {
      expect(primeNumberLists.firstHundredPrimes).to.eql(generatePrimes(100));
    });


    it('should generate first ten thousand prime numbers', function () {
      expect(primeNumberLists.firstTenThousandPrimes).to.eql(generatePrimes(10000));
    });

    it('should generate first thousand prime numbers', function () {
      const twentyThousandPrimes = generatePrimes(20000);
      assert.equal(twentyThousandPrimes.length, 20000);
      assert.equal(twentyThousandPrimes[twentyThousandPrimes.length - 1], 224737);
    });

  });

  describe('generateTable()', function () {

    it('should generate table for first three prime numbers', function () {
      threePrimesTable = generateTable(3);

      for (let i = 0; i <= 3; i++) {
        expect(primeNumberTables.threePrimesTable[i]).to.eql(threePrimesTable[i]);
      }
    })

    it('should generate table for first five prime numbers', function () {
      fivePrimesTable = generateTable(5);

      for (let i = 0; i <= 3; i++) {
        expect(primeNumberTables.fivePrimesTable[i]).to.eql(fivePrimesTable[i]);
      }
    })

  })

});