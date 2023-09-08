"use client"

import { useState } from "react";
import style from "./searchBar.module.scss";
import searchIcon from "@/assets/icons/searchIcon.png";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import SuggestionSide from "./suggestionSide";

export default function SearchBar ({displayFunc}: {displayFunc?: Function}) {

    const [inputValue, setInputValue] = useState<any>("");
    const [overlay, setOverlay] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
        (e.target.value === "") ? setOverlay(false) : setOverlay(true);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push(`/${inputValue}`);    
        displayFunc ? displayFunc() : "";
    }

    return (
        <>
            <div className={ overlay ? style.overlaySearchBar_active : style.overlaySearchBar } onClick={() => setOverlay(false)}></div>
            <div className={style.inputContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={inputValue && overlay ? style.inputDivBorder : style.inputDiv}>
                        <input 
                            className={style.input}
                            placeholder="Trouves ta méchanique" 
                            type="text" 
                            value={inputValue} 
                            onChange={handleInputChange}
                            onClick={() => setOverlay(true)} 
                        />
                        <button onClick={handleSubmit} className={style.searchIcon}>
                            <Image alt="searchIcon" src={searchIcon} width={30} height={30}/>
                        </button>
                    </div>
                </form>
                {inputValue && overlay && <SuggestionSide inputValue={inputValue} resetInput={setInputValue} displayFunc={displayFunc} setOverlay={setOverlay}/>}
            </div>
        </>
    )
}