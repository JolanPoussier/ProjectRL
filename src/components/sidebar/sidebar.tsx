"use client"

import style from "./sidebar.module.scss";
import Difficulty from "./difficulty/difficulty";
import Input from "./input/input";
import Shortcuts from "./shortcuts/shortcuts";

export default function Sidebar () {


    return (
            <div className={style.main}>
                <Input />
                <Difficulty />
                <Shortcuts />
            </div>
    )
}