import * as React from 'react'
// import { useEffect } from 'react'
import styles from '../styles.module.css'
export default function Paging(props) {
  const { name, nbPages, page, setPage } = props
  const handlePageChoice = (e, i) => {
    e.preventDefault()
    if (i !== page) setPage(i)
  }
  const handleNext = (e) => {
    e.preventDefault()
    if (page + 1 < nbPages) setPage(page + 1)
  }
  const handlePrev = (e) => {
    e.preventDefault()
    if (page > 0) setPage(page - 1)
  }

  React.useEffect(() => {}, [page])
  return (
    <div
      className={
        styles.dataTables_paginate + ' ' + styles.paging_simple_numbers
      }
      id={name + '_paginate'}
    >
      <button
        className={
          styles.paginate_button +
          ' ' +
          styles.previous +
          ' ' +
          (page === 0 ? styles.disabled : ' ')
        }
        aria-controls={name}
        data-dt-idx='0'
        tabIndex='-1'
        id={name + '_previous'}
        onClick={(e) => handlePrev(e)}
      >
        Previous
      </button>
      <span>
        {Array.from(Array(nbPages), (el, i) => (
          <button
            key={'page_' + i}
            className={
              styles.paginate_button + ' ' + (page === i ? styles.current : '')
            }
            aria-controls={name}
            data-dt-idx={i + 1}
            tabIndex='0'
            onClick={(e) => handlePageChoice(e, i)}
          >
            {i + 1}
          </button>
        ))}
      </span>
      <button
        className={
          styles.paginate_button +
          ' ' +
          styles.next +
          ' ' +
          (page + 1 === nbPages ? styles.disabled : '')
        }
        aria-controls={name}
        data-dt-idx='6'
        tabIndex='0'
        id={name + '_next'}
        onClick={(e) => handleNext(e)}
      >
        Next
      </button>
    </div>
  )
}
