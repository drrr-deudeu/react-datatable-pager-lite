import * as React from 'react'
import styles from '../../styles.module.css'

export default function Next(props) {
  const { page, name, setPage, nbPages } = props
  const handleNext = (e) => {
    e.preventDefault()
    if (page + 1 < nbPages) setPage(page + 1)
  }
  return (
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
  )
}
