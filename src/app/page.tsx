'use client'

import SearchBar from '@/components/filters/searchBar/searchBar'
import style from './page.module.scss'
import MostViewedMoves from '@/components/mostViewedMoves/mostViewedMoves'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [searchInputHome, setSearchInputHome] = useState<string>('')
  const router = useRouter()
  return (
    <div className={style.main}>
      <h1 className={style.title}>Trouve ta mécanique</h1>
      <div className={style.input}>
        <SearchBar
          searchInput={searchInputHome}
          setSearchInput={setSearchInputHome}
          submitAction={() => router.push(`/category?search=${searchInputHome}`)}
        />
      </div>
      <MostViewedMoves />
    </div>
  )
}
