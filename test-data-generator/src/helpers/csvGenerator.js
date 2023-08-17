import Papa from 'papaparse'

export const downloadCSV = (data, fileName) => {
  const csv = Papa.unparse(data)
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName + '.csv'
  a.click()
}
