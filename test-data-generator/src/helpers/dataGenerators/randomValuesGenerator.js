import { faker } from '@faker-js/faker'

export const getRandomBoolean = () => Math.random() > 0.05 // 95% chance to get true, so that there is a better chance the generated data will be valid

const generateRandomString = () => faker.lorem.words()
const generateRandomNumber = () => faker.number.int()
const generateRandomBoolean = () => faker.datatype.boolean()
const generateRandomDate = () => faker.date.anytime()
const generateRandomArray = () => [faker.lorem.word(), faker.number.int()]
const generateRandomObject = () => ({
  key: faker.lorem.word(),
  value: faker.lorem.words(),
})

const generateRandomValue = (datatype) => {
  const generators = {
    string: generateRandomString,
    number: generateRandomNumber,
    boolean: generateRandomBoolean,
    date: generateRandomDate,
    array: generateRandomArray,
    object: generateRandomObject,
  }

  const generator = generators[datatype]
  return generator ? generator() : null
}

export const getRandomValue = () => {
  const datatypes = [
    'string',
    'number',
    'boolean',
    'object',
    'array',
    'date',
    undefined,
    null,
  ]

  const randomDataType = faker.helpers.arrayElement(datatypes)
  const randomValue = generateRandomValue(randomDataType)
  return randomValue
}
