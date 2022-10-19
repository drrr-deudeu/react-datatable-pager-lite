import * as React from 'react'
import styles from '../../styles.module.css'
export default function ButtonPage(props) {
  const handlePageChoice = (e, index) => {
    e.preventDefault()
    if (index !== page) setPage(index)
  }
  const { name, index, page, setPage } = props
  return (
    <button
      key={'page_' + index}
      className={
        styles.paginate_button + ' ' + (page === index ? styles.current : '')
      }
      aria-controls={name}
      data-dt-idx={index + 1}
      tabIndex='0'
      onClick={(e) => handlePageChoice(e, index)}
    >
      {index + 1}
    </button>
  )
}
