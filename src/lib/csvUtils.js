import Papa from 'papaparse'

const csvUtils = {
  export: (data, fileName) => {
    const csv = Papa.unparse(data)
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(csvData)
    link.download = fileName
    link.click()
  },
}

export default csvUtils
