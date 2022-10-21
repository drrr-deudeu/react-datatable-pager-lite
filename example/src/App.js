import React from 'react'

import { DataTable } from 'react-datatable-pager-lite'
import 'react-datatable-pager-lite/dist/index.css'
import { columns, employeesList } from './datas'
const App = () => {
  const rowsPerPage = [10, 25, 50, 100]
  return (
    <div id='employee-div' className='container'>
      <h1>Current Employees</h1>
      <DataTable
        columns={columns}
        dataList={employeesList}
        rowsPerPage={rowsPerPage[0]}
        rowsPossibleUserChoice={rowsPerPage}
        name='employee-table'
      />
    </div>
  )
}

export default App
