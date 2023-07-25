"use client"

import style from "./page.module.scss";
import Difficulty from "./difficulty/difficulty";
import Input from "./input/input";
import Shortcuts from "./shortcuts/shortcuts";

export default function SidebarMobile ({ displaySideMenu, displayFunc }: {displaySideMenu: boolean, displayFunc: Function}) {

    function handleToggleSide () {
        displayFunc();
    }

    return (
        <div className={ displaySideMenu ? style.mainMobile_active : style.mainMobile }>
            <button className={style.closeButton} onClick={handleToggleSide}>x</button>
            <Input />
            <Difficulty />
            <Shortcuts displayFunc={displayFunc} />
        </div>
    )
}