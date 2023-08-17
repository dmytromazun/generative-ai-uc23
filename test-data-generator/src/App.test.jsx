import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Should generate report when clicking generate report button', () => {
    render(<App />)

    const generateReportButton = screen.getByText('Generate and download')
    fireEvent.click(generateReportButton)

    expect(generateReportButton).toBeInTheDocument()

    const report = screen.getByTestId('report')
    expect(report).toBeInTheDocument()
  })
})
