export const ReportSubsection = ({ title, entries, validationResults }) => {
  const numberOfInvalidEntries = validationResults.filter(
    (validationResult) => !validationResult
  ).length

  return (
    <div className="report-subsection">
      <h3>{title}</h3>
      <p>Total entries: {entries.length}. </p>
      <p>Number of invalid entries: {numberOfInvalidEntries}.</p>
      <ol className="report-list">
        {entries.map((_entry, i) => {
          const isValid = validationResults[i] ? 'valid' : 'invalid'

          return (
            <li className={`report-list-item ${isValid}`} key={i}>
              Entry #{i} is {isValid}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
