import SearchBar from '@/components/filters/searchBar/searchBar'
import style from './page.module.scss'
import MostViewedMoves from '@/components/mostViewedMoves/mostViewedMoves'
import HomePageText from '@/components/homePageText/homePageText'

export default function Page() {
  return (
    <div className={style.main}>
      <div className={style.background}></div>
      <HomePageText />
      <div className={style.input}>
        <SearchBar submitRedirection="/toutescategories?search=" />
      </div>
      <MostViewedMoves />
    </div>
  )
}
