import { getRandomBoolean, getRandomValue } from './randomValuesGenerator'

export const generateWithStrategy = (strategy) => strategy()

export const createStrategy = (valueGenerator) => () => {
  const shouldUseValueGenerator = getRandomBoolean()
  return shouldUseValueGenerator ? valueGenerator() : getRandomValue()
}
