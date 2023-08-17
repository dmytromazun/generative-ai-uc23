import { generateTestData } from '../helpers/dataGenerators/testDataGenerator'
import { downloadCSV } from '../helpers/csvGenerator'

export const GenerateReportButton = ({ setGeneratedData }) => {
  const onClick = () => {
    const data = generateTestData()
    setGeneratedData(data)
    downloadCSV(data.titles, 'titles')
    downloadCSV(data.credits, 'credits')
  }

  return (
    <button className="generate-report-button" onClick={onClick}>
      Generate and download
    </button>
  )
}
