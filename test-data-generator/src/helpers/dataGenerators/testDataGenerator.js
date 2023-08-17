import { faker } from '@faker-js/faker'
import { generateTitles } from './titleGenerator'
import { generateCredits } from './creditGenerator'

export const generateTestData = () => {
  const numberOfTitles = faker.number.int({ min: 100, max: 200 })

  const titles = generateTitles(numberOfTitles)
  const credits = generateCredits(numberOfTitles)

  return { titles, credits }
}
