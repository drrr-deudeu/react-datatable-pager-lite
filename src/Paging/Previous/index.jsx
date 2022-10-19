import * as React from 'react'
import styles from '../../styles.module.css'
export default function Previous(props) {
  const { page, name, setPage } = props
  const handlePrev = (e) => {
    e.preventDefault()
    if (page > 0) setPage(page - 1)
  }
  return (
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
  )
}
