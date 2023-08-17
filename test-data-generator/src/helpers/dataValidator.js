import {
  certifications,
  genres,
  roles,
  validReleaseYear,
  validRuntime,
  validSeasons,
} from './constants'

const validateTitle = (title) => {
  const {
    id,
    title: titleText,
    description,
    release_year,
    age_certification,
    runtime,
    genres: titleGenres,
    production_country,
    seasons,
  } = title

  const isValidId = id >= 0
  const isValidTitleText = typeof titleText === 'string'
  const isValidDescription = typeof description === 'string'
  const isValidReleaseYear =
    release_year >= validReleaseYear.min && release_year <= validReleaseYear.max
  const isValidAgeCertification = certifications.includes(age_certification)
  const isValidRuntime =
    runtime > validRuntime.min && runtime < validRuntime.max
  const isValidGenres =
    Array.isArray(titleGenres) &&
    titleGenres.every((genre) => genres.includes(genre))
  const isValidProductionCountry = typeof production_country === 'string'
  const isValidSeasons =
    (seasons > validSeasons.min && seasons <= validSeasons.max) || undefined

  const isValidTitle =
    isValidId &&
    isValidTitleText &&
    isValidDescription &&
    isValidReleaseYear &&
    isValidAgeCertification &&
    isValidRuntime &&
    isValidGenres &&
    isValidProductionCountry &&
    isValidSeasons

  return isValidTitle
}

const validateCredit = (credit) => {
  const { id, title_id, real_name, character_name, role } = credit

  const isValidId = id >= 0
  const isValidTitleId = title_id >= 0
  const isValidRealName = typeof real_name === 'string'
  const isValidCharacterName = typeof character_name === 'string'
  const isValidRole = roles.includes(role)

  const isValidCredit =
    isValidId &&
    isValidTitleId &&
    isValidRealName &&
    isValidCharacterName &&
    isValidRole

  return isValidCredit
}

export { validateTitle, validateCredit }
