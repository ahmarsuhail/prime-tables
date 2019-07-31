const { generatePrimes, generateTable } = require('../primeTable')
const primeNumberLists = require('./primeNumberLists.json');
const path = require('path');
const fs = require('fs');
var chai = require('chai');
const expect = require('chai').expect;
const assert = require('assert');

chai.use(require('chai-fs'));

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

    it('should generate file with table for first three prime numbers', function () {
      generateTable(3);
      expect(path.join(__dirname, '../', 'results')).to.be.a.directory().and.not.empty;
      expect(path.join(__dirname, '../', 'results')).to.be.a.directory().and.include.files(['3_Table.txt']);
    })

    it('should generate file with table for first five prime numbers', function () {
      generateTable(5);
      expect(path.join(__dirname, '../', 'results')).to.be.a.directory().and.not.empty;
      expect(path.join(__dirname, '../', 'results')).to.be.a.directory().and.include.files(['5_Table.txt']);
    })

  })

});