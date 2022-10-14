import React from 'react'

import { DataTable } from 'react-datatable-pager-lite'
import 'react-datatable-pager-lite/dist/index.css'

const App = () => {
  const employeesList = [
    {
      firstName: 'User1',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34567'
    },
    {
      firstName: 'User2',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34567'
    },

    {
      firstName: 'User3',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34567'
    },
    {
      firstName: 'User4',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34568'
    },
    {
      firstName: 'User5',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34567'
    },
    {
      firstName: 'User1',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34566'
    },
    {
      firstName: 'User5',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34567'
    },
    {
      firstName: 'User1',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34566'
    },
    {
      firstName: 'User5',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34567'
    },
    {
      firstName: 'User1',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34566'
    },
    {
      firstName: 'User5',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34567'
    },
    {
      firstName: 'User1',
      lastName: 'Test1',
      dateOfBirth: '09/08/2022',
      startDate: '10/27/2022',
      department: 'Engineering',
      street: '45 rue de Clichy',
      city: 'New City',
      state: 'AL',
      zipCode: '34566'
    }
  ]
  const columns = [
    { title: 'First Name', data: 'firstName' },
    { title: 'Last Name', data: 'lastName' },
    { title: 'Start Date', data: 'startDate' },
    { title: 'Department', data: 'department' },
    { title: 'Date of Birth', data: 'dateOfBirth' },
    { title: 'Street', data: 'street' },
    { title: 'City', data: 'city' },
    { title: 'State', data: 'state' },
    { title: 'Zip Code', data: 'zipCode' }
  ]

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
