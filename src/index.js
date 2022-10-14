import React from 'react'
import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
// import { React, useEffect, useState, useCallback } from 'react'
// import React from 'react'
// import * as React from 'react'
// import './datatables.css'
import Paging from './Paging'
export const DataTable = (props) => {
  const { columns, dataList, name } = props
  const listSort = (column, sortDirection, list) => {
    return list.sort((a, b) => {
      const A = normalizeString(a[columns[column].data])
      const B = normalizeString(b[columns[column].data])
      return sortDirection ? (A > B ? 1 : -1) : A < B ? 1 : -1
    })
  }
  const firstSort = (l) => {
    return listSort(0, true, l)
  }
  const [columnChoice, setColumnChoice] = React.useState(0)
  const [sortChoice, setSortChoice] = React.useState(true)
  // const [viewList, setViewList] = React.useState(listSort(0, true, dataList))
  const [viewList, setViewList] = React.useState(firstSort(dataList))
  const [searchString, setSearchString] = React.useState('')
  const [pageSize, setPageSize] = React.useState(10)
  const [page, setPage] = React.useState(0)
  const [startIndex, setStartIndex] = React.useState(0)
  const ee = Math.min(viewList.length, pageSize)
  const [endIndex, setEndIndex] = React.useState(ee)
  const nbp = getNbPages(dataList.length, pageSize)
  const [nbPages, setNbPages] = React.useState(nbp)
  const getSortClass = (index) => {
    if (index !== columnChoice) return styles.sorting
    return sortChoice ? styles.sorting_asc : styles.sorting_desc
  }
  const listToView = (index, lsortChoice, toSearch) => {
    const list = listSort(
      index,
      lsortChoice,
      dataList.filter((row) => {
        if (toSearch === '') return true
        for (let kval = 0; kval < columnsLength; kval++) {
          if (normalizeString(row[columns[kval].data]).includes(toSearch)) {
            return true
          }
        }
        return false
      })
    )
    setViewList(list)
    getIndexes(list.length, pageSize)
  }

  const columnsLength = columns.length
  const changeSort = (e, index) => {
    e.preventDefault()
    let lsortChoice = sortChoice
    if (index === columnChoice) {
      lsortChoice = !sortChoice
    } else {
      lsortChoice = true
    }
    setSortChoice(lsortChoice)
    setColumnChoice(index)
    listToView(index, lsortChoice, searchString)
  }
  function normalizeString(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
  }
  const handleSearch = (e) => {
    e.preventDefault()
    const toSearch = normalizeString(e.target.value)
    setSearchString(toSearch)
    listToView(columnChoice, sortChoice, toSearch)
  }
  const handleSelect = (e) => {
    e.preventDefault()
    setPageSize(e.target.value)
    getIndexes(viewList.length, e.target.value)
  }
  function getNbPages(length, localPageSize) {
    return ~~(length / localPageSize) + (length % localPageSize ? 1 : 0)
  }
  const getIndexes = React.useCallback(
    (length, localPageSize) => {
      const localNbPages = getNbPages(length, localPageSize)
      const currentPage = page >= localNbPages ? 0 : page
      const localStartIndex = currentPage * localPageSize
      const localEndIndex = Math.min(localStartIndex + localPageSize, length)
      setPage(currentPage)
      setStartIndex(localStartIndex)
      setEndIndex(localEndIndex)
      setNbPages(localNbPages)
    },
    [page]
  )

  React.useEffect(() => {
    getIndexes(viewList.length, pageSize)
  }, [
    sortChoice,
    viewList,
    columns,
    page,
    startIndex,
    endIndex,
    nbPages,
    pageSize,
    getIndexes
  ])
  return (
    <div className={styles.dataTables_wrapper}>
      <div className={styles.dataTables_length} id={name + '_length'}>
        <label>
          Show
          <select
            name={name + '_length'}
            aria-controls={name}
            className=''
            onChange={handleSelect}
          >
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
          entries
        </label>
      </div>
      <div id={name + '_filter'} className={styles.dataTables_filter}>
        <label>
          Search:
          <input
            type='search'
            className=''
            placeholder=''
            aria-controls={name}
            onChange={handleSearch}
          />
        </label>
      </div>
      <table
        id={name}
        className={
          styles.display + ' ' + styles.dataTable + ' ' + styles.no_footer
        }
        role='grid'
        aria-describedby={name + '_info'}
      >
        <thead>
          <tr role='row'>
            {columns.map((c, index) => (
              <th
                key={'head_' + c.data}
                className={getSortClass(index)}
                tabIndex='0'
                aria-controls={name}
                rowSpan='1'
                colSpan='1'
                aria-sort='ascending'
                aria-label={c.title + ': activate to sort column descending'}
                style={{ width: 'auto' }}
                onClick={(e) => changeSort(e, index)}
              >
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {viewList.map(
            (emp, index) =>
              index >= startIndex &&
              index < endIndex && (
                <tr
                  key={'emp_' + index}
                  role='row'
                  className={index % 2 ? styles.even : styles.odd}
                >
                  {columns.map((c, ind) => {
                    return (
                      <td
                        key={c.data + index}
                        className={ind === columnChoice ? styles.sorting_1 : ''}
                      >
                        {emp[c.data]}
                      </td>
                    )
                  })}
                </tr>
              )
          )}
        </tbody>
      </table>
      <div
        className='dataTables_info'
        id={name + '_info'}
        role='status'
        aria-live='polite'
      >
        Showing {viewList.length ? startIndex + 1 : 0} to{' '}
        {Math.min(viewList.length, endIndex)} of {viewList.length} entries
        (filtered from {dataList.length} total entries)
      </div>
      <Paging name={name} nbPages={nbPages} page={page} setPage={setPage} />
    </div>
  )
}
