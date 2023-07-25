"use client"

import style from "./page.module.scss";
import Difficulty from "./difficulty/difficulty";
import Input from "./input/input";
import Shortcuts from "./shortcuts/shortcuts";
import { useMediaQuery } from 'react-responsive';

export default function Sidebar () {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <>
            { !isSmallScreen &&
            <div className={style.main}>
                <Input />
                <Difficulty />
                <Shortcuts />
            </div>
            }
        </>
    )
}