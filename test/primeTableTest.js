const {generatePrimes} = require('../primeTable')
const primeNumberLists = require('./primeNumberLists.json');
const expect = require('chai').expect;
const assert = require('assert');

describe('Prime table generator', function() {
  
  describe('generatePrimes()', function() {
    
    it('should generate first five prime numbers', function() {
      expect(primeNumberLists.firstFivePrimes).to.eql(generatePrimes(5));
    });

    it('should generate first hundred prime numbers', function() {
      expect(primeNumberLists.firstHundredPrimes).to.eql(generatePrimes(100));
    });
    

    it('should generate first ten thousand prime numbers', function() {
      expect(primeNumberLists.firstTenThousandPrimes).to.eql(generatePrimes(10000));
    });

    it('should generate first thousand prime numbers', function() {
      const twentyThousandPrimes = generatePrimes(20000);
      assert.equal(twentyThousandPrimes.length, 20000);
      assert.equal(twentyThousandPrimes[twentyThousandPrimes.length - 1], 224737);
    });

  });

});