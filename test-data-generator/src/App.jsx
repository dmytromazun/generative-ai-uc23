import { useState } from 'react'

import { Report } from './components/Report'
import { GenerateReportButton } from './components/GenerateReportButton'
import './App.css'

const App = () => {
  const [generatedData, setGeneratedData] = useState(null)

  return (
    <div className="app">
      <h1>Test Data Generator</h1>
      <p>Click the button below to generate and download test data.</p>
      <GenerateReportButton setGeneratedData={setGeneratedData} />
      {generatedData && <Report generatedData={generatedData} />}
    </div>
  )
}

export default App
