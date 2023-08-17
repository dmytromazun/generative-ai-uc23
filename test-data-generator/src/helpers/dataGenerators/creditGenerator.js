import { faker } from '@faker-js/faker'
import { createStrategy, generateWithStrategy } from './strategies'
import { roles } from '../constants'

const generateCreditField = (generator) =>
  generateWithStrategy(createStrategy(generator))

export const generateCredit = (id, titleId) => ({
  id: generateCreditField(() => id),
  title_id: generateCreditField(() => titleId),
  real_name: generateCreditField(() => faker.person.fullName()),
  character_name: generateCreditField(() => faker.person.firstName()),
  role: generateCreditField(() => faker.helpers.arrayElement(roles)),
})

export const generateCredits = (numberOfTitles) => {
  const credits = []
  const numberOfCredits =
    numberOfTitles * faker.number.float({ min: 1, max: 5 }) // We multiply the number of movies by a random number because there is usually more than one actor in a movie.

  for (let i = 1; i <= numberOfCredits; i++) {
    const titleId = faker.number.int({ min: 1, max: numberOfTitles })
    credits.push(generateCredit(i, titleId))
  }

  return credits
}
