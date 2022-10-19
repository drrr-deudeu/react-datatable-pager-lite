import React from 'react'

import { DataTable } from 'react-datatable-pager-lite'
import 'react-datatable-pager-lite/dist/index.css'
import { columns, employeesList } from './datas'
const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return (
    <div id='employee-div' className='container'>
      <h1>Current Employees</h1>
      <DataTable
        columns={columns}
        dataList={employeesList}
        name='employee-table'
      />
    </div>
  )
}

export default App
