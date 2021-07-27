import Papa from 'papaparse'
import { Post } from '../modules/post'

const csvUtils = {
  export: (data: Partial<Post>[], fileName: string) => {
    const csv = Papa.unparse(data)
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(csvData)
    link.download = fileName
    link.click()
  },
}

export default csvUtils
