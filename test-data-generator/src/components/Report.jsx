import { validateTitle, validateCredit } from '../helpers/dataValidator'
import { ReportSubsection } from './ReportSubsection'

export const Report = ({ generatedData: { titles, credits } }) => {
  const titlesValidationResults = titles.map((title) => validateTitle(title))
  const creditsValidationResults = credits.map((credit) =>
    validateCredit(credit)
  )

  return (
    <div className="report" data-testid="report">
      <h2>Entries validation report</h2>
      <p>Open downloaded files to see the generated data.</p>
      <div className="report-subsections">
        <ReportSubsection
          title="Titles"
          entries={titles}
          validationResults={titlesValidationResults}
        />
        <ReportSubsection
          title="Credits"
          entries={credits}
          validationResults={creditsValidationResults}
        />
      </div>
    </div>
  )
}
