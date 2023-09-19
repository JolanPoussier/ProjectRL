import SearchBar from '@/components/filters/searchBar/searchBar'
import style from './page.module.scss'
import MostViewedMoves from '@/components/mostViewedMoves/mostViewedMoves'

// `app/page.tsx` is the UI for the `/` URL

export default function Page() {
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
