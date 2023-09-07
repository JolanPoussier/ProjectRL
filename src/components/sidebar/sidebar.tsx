"use client"

import style from "./sidebar.module.scss";
import Difficulty from "./difficulty/difficulty";
import SearchBar from "./searchBar/searchBar";
import Shortcuts from "./shortcuts/shortcuts";

export default function Sidebar () {


    return (
            <div className={style.main}>
                <SearchBar />
                <Difficulty />
                <Shortcuts />
            </div>
    )
}