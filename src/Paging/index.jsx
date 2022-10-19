import * as React from 'react'
// import { useEffect } from 'react'
import styles from '../styles.module.css'
import Previous from './Previous'
import Next from './Next'
import ButtonPage from './ButtonPage'
export default function Paging(props) {
  const { name, nbPages, page, setPage } = props
  React.useEffect(() => {}, [page, nbPages])

  return (
    <div
      className={
        styles.dataTables_paginate + ' ' + styles.paging_simple_numbers
      }
      id={name + '_paginate'}
    >
      <Previous page={page} name={name} setPage={setPage} />
      <span>
        {nbPages < 7 ? (
          Array.from(Array(nbPages), (el, index) => (
            <ButtonPage
              key={index}
              name={name}
              index={index}
              page={page}
              setPage={setPage}
            />
          ))
        ) : (
          <span>
            <ButtonPage
              key={0}
              name={name}
              index={0}
              page={page}
              setPage={setPage}
            />
            {page < 4 ? (
              <ButtonPage
                key={1}
                name={name}
                index={1}
                page={page}
                setPage={setPage}
              />
            ) : (
              <span className={styles.paginate + ' ' + styles.ellipsis}>
                ...
              </span>
            )}

            {Array.from(
              Array.from(
                { length: 3 },
                (x, i) => i + Math.max(Math.min(page, nbPages - 4), 3) - 1
              ),
              (el, index) => (
                <ButtonPage
                  key={el}
                  name={name}
                  index={el}
                  page={page}
                  setPage={setPage}
                />
              )
            )}
            {page > nbPages - 4 ? (
              <ButtonPage
                key={nbPages - 2}
                name={name}
                index={nbPages - 2}
                page={page}
                setPage={setPage}
              />
            ) : (
              <span className={styles.paginate + ' ' + styles.ellipsis}>
                ...
              </span>
            )}

            <ButtonPage
              key={nbPages - 1}
              name={name}
              index={nbPages - 1}
              page={page}
              setPage={setPage}
            />
          </span>
        )}
      </span>
      <Next page={page} name={name} setPage={setPage} nbPages={nbPages} />
    </div>
  )
}
