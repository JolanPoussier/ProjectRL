import minimalizeText from "@/utils/functions/minimalizeText";
import style from "./searchBar.module.scss";
import moves from "@/utils/datas/moves";
import Link from "next/link";
import { useState } from "react";

export default function SuggestionSide ({inputValue, resetInput, displayFunc, setOverlay}: {inputValue: string, resetInput: Function, displayFunc?: Function, setOverlay: Function}) {

    let movesToShow = [];
    movesToShow = moves.filter(move => ((move.category.includes(minimalizeText(inputValue))) || (minimalizeText(move.title).includes(minimalizeText(inputValue)))))

    function handleClick () {
        resetInput("")
        displayFunc ? displayFunc() : "";
        setOverlay(false);
    }


    return (
            <div className={style.suggestionSide}>
                <ul className={style.suggestionList}>
                    {movesToShow.map(move => (
                       <Link className={style.suggestionLinks} key={move.id} onClick={handleClick} href={`/${move.category}/${move.slug}`}>
                            <li className={style.suggestionItems}>{move.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
    )
}