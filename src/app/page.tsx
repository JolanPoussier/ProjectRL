import SearchBar from '@/components/filters/searchBar/searchBar'
import style from './page.module.scss'
import MostViewedMoves from '@/components/mostViewedMoves/mostViewedMoves'
// import { useState } from 'react'

export default function Page() {
  // const [searchInput, setSearchInput] = useState<string>('')

  return (
    <div className={style.main}>
      <h1 className={style.title}>Trouve ta mécanique</h1>
      <div className={style.input}>
        <SearchBar />
      </div>
      <MostViewedMoves />
    </div>
  )
}
