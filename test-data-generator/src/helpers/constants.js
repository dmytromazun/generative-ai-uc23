const certifications = [
  'G',
  'PG',
  'PG-13',
  'R',
  'NC-17',
  'U',
  'U/A',
  'A',
  'S',
  'AL',
  '6',
  '9',
  '12',
  '12A',
  '15',
  '18',
  '18R',
  'R18',
  'R21',
  'M',
  'MA15+',
  'R16',
  'R18+',
  'X18',
  'T',
  'E',
  'E10+',
  'EC',
  'C',
  'CA',
  'GP',
  'M/PG',
  'TV-Y',
  'TV-Y7',
  'TV-G',
  'TV-PG',
  'TV-14',
  'TV-MA',
]

const genres = [
  'Drama',
  'Thriller',
  'Comedy',
  'Fantasy',
  'Romance',
  'Science Fiction',
  'Adventure',
  'Sports',
  'Action',
  'Western',
  'Horror',
  'Musical',
  'Mystery',
]

const roles = [
  'Director',
  'Producer',
  'Screenwriter',
  'Actor',
  'Actress',
  'Cinematographer',
  'Film Editor',
  'Production Designer',
  'Costume Designer',
  'Music Composer',
]

const validRuntime = {
  min: 10, // For short films e.g. https://en.wikipedia.org/wiki/Six_Shooter_(film)
  max: 240, // For long films e.g. https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King
}

const validReleaseYear = {
  min: 1895, // First movie was released in 1895 (https://en.wikipedia.org/wiki/Cinematograph)
  max: new Date().getFullYear(), // Includes already released movies and those which are planned to be released in the current year.
}

const validSeasons = {
  min: 0,
  max: 50, // e.g. https://en.wikipedia.org/wiki/The_Simpsons
}

export {
  certifications,
  genres,
  roles,
  validRuntime,
  validReleaseYear,
  validSeasons,
}
