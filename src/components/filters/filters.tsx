'use client'

import style from './filters.module.scss'
import Difficulty from './difficulty/difficulty'
import SearchBar from './searchBar/searchBar'

export default function Filters() {
  return (
    <div className={style.main}>
      <SearchBar />
      <Difficulty />
    </div>
  )
}
