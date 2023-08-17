import { faker } from '@faker-js/faker'
import {
  certifications,
  genres,
  validReleaseYear,
  validRuntime,
} from '../constants'
import { createStrategy, generateWithStrategy } from './strategies'
import { getRandomBoolean } from './randomValuesGenerator'

const generateTitleField = (generator) =>
  generateWithStrategy(createStrategy(generator))

export const generateTitle = (id) => ({
  id: generateTitleField(() => id),
  title: generateTitleField(() =>
    faker.word.words({ count: { min: 1, max: 5 } })
  ),
  description: generateTitleField(() => faker.lorem.sentence()),
  release_year: generateTitleField(() =>
    faker.number.int({
      min: validReleaseYear.min,
      max: validReleaseYear.max,
    })
  ),
  age_certification: generateTitleField(() =>
    faker.helpers.arrayElement(certifications)
  ),
  runtime: generateTitleField(() =>
    faker.number.int({
      min: validRuntime.min,
      max: validRuntime.max,
    })
  ),
  genres: generateTitleField(() =>
    faker.helpers.arrayElements(genres, { min: 1, max: genres.length })
  ),
  production_country: generateTitleField(() => faker.location.countryCode()),
  seasons: generateTitleField(
    () => (getRandomBoolean ? faker.number.int({ min: 1, max: 20 }) : undefined) // seasons field represents the number of seasons for series and is empty for movies in the CSV file
  ),
})

export const generateTitles = (numberOfEntries) => {
  const titles = []

  for (let i = 1; i <= numberOfEntries; i++) {
    titles.push(generateTitle(i))
  }

  return titles
}
