'use client'

import style from './sidebar.module.scss'
import Difficulty from './difficulty/difficulty'
import SearchBar from './searchBar/searchBar'
import Shortcuts from './shortcuts/shortcuts'

export default function SidebarMobile({
  displaySideMenu,
  displayModal,
}: {
  displaySideMenu: boolean
  displayModal: Function
}) {
  function handleToggleSide() {
    displayModal()
  }

  return (
    <div className={displaySideMenu ? style.mainMobile_active : style.mainMobile}>
      <button className={style.closeButton} onClick={handleToggleSide}>
        x
      </button>
      <div className={style.searchBar}>
        <SearchBar displayModal={displayModal} />
      </div>
      <Difficulty />
      <Shortcuts displayModal={displayModal} />
    </div>
  )
}
