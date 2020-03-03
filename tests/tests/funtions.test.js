const func = require('../../funtions')

describe('FizzBuzz',()=>{
    it('should throw error  When Input not a number',()=>{
        expect(()=>{func.fizzBuzz('0') }).toThrow()
    })

    it('should return FizzBuzz When Input %3 and %5 = 0',()=>{
        expect(func.fizzBuzz(15)).toBe('FizzBuzz')
    })

    it('should return Fizz When Input %3 = 0',()=>{
        expect(func.fizzBuzz(3) ).toBe('Fizz')
    })

    it('should return Buzz When Input %5 = 0',()=>{
        expect( func.fizzBuzz(10)).toBe('Buzz')
    })
})