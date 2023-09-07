"use client"

import style from "./sidebar.module.scss";
import Difficulty from "./difficulty/difficulty";
import SearchBar from "./searchBar/searchBar";
import Shortcuts from "./shortcuts/shortcuts";

export default function SidebarMobile ({ displaySideMenu, displayFunc }: {displaySideMenu: boolean, displayFunc: Function}) {

    function handleToggleSide () {
        displayFunc();
    }

    return (
        <div className={ displaySideMenu ? style.mainMobile_active : style.mainMobile }>
            <button className={style.closeButton} onClick={handleToggleSide}>x</button>
            <div className={style.searchBar}>
                <SearchBar displayFunc={displayFunc}/>
            </div>
            <Difficulty />
            <Shortcuts displayFunc={displayFunc} />
        </div>
    )
}