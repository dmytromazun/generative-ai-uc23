import { generateTestData } from './testDataGenerator'

describe('generateTestData', () => {
  test('Should generate titles and credits with correct keys', () => {
    const { titles, credits } = generateTestData(1)
    const title = titles[0]
    const credit = credits[0]
    const expectedTitleKeys = [
      'id',
      'title',
      'description',
      'release_year',
      'age_certification',
      'runtime',
      'genres',
      'production_country',
      'seasons',
    ]
    const expectedCreditKeys = [
      'id',
      'title_id',
      'real_name',
      'character_name',
      'role',
    ]

    expect(Object.keys(title)).toEqual(expectedTitleKeys)
    expect(Object.keys(credit)).toEqual(expectedCreditKeys)
  })
})
