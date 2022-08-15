import { Invalidation } from '@/validation/helpers'
import { NumberValidator } from '@/validation/validators'

const makeSut = (): NumberValidator => new NumberValidator()

describe('Number Validator', () => {
  test('Should return invalid if param is not a number', async () => {
    const sut = makeSut()
    const result = await sut.validate('10')
    expect(result).toEqual(Invalidation.type())
  })

  test('Should return void if param is a number', async () => {
    const sut = makeSut()
    const result = await sut.validate(10)
    expect(result).toBeUndefined()
  })
})
