const expect = chai.expect

describe('firstNumArr', function () {
  it('is undefined', function () {
    expect(firstNumArr).to.be.an('undefined');
  })

  describe('throwError', function () {
    it('should be a function', function () {
      expect(throwError).to.be.a('function')
    })


  })

  describe('clearScreen', function () {
    it('should be a function', function () {
      expect(clearScreen).to.be.a('function')
    })
  })

})
