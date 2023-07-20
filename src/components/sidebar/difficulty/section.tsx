"use client"

import style from "./page.module.scss";
import Image from "next/image";
import starImage from "src/assets/star/star.png"; 
import starGenerator from "@/assets/functions/starGenerator";


export default function Section ({star, difficulty, ranks}: {star: number, difficulty: string, ranks: string} ) {
    return (
        <div className={style.section}>
            <div className={style.checkbox}>
                <input
                  type="checkbox"
                  className={style.checkboxInput}
                //   checked={isChecked}
                //   onChange={handleCheckboxChange}
                />
            </div>
            <div className={style.starContainer}>
                {starGenerator({star})}
            </div>
            <div className={style.rankContainer}>
                {difficulty}
                ({ranks})
            </div>
        </div>
    )
}

