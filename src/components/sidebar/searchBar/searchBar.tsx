"use client"

import { useState } from "react";
import style from "./searchBar.module.scss";
import searchIcon from "@/assets/icons/searchIcon.png";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import SuggestionSide from "./suggestionSide";

export default function SearchBar ({displayFunc}: {displayFunc?: Function}) {

    const [inputValue, setInputValue] = useState<any>("");
    const router = useRouter();

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        router.push(`/${inputValue}`);    
    }

    return (
        <div className={style.inputContainer}>
            <form onSubmit={handleSubmit}>
                <div className={inputValue ? style.inputDivBorder : style.inputDiv}>
                    <input 
                        className={style.input}
                        placeholder="Trouves ta méchanique" 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                    />
                    <button onClick={handleSubmit} className={style.searchIcon}>
                        <Image alt="searchIcon" src={searchIcon} width={30} height={30}/>
                    </button>
                </div>
            </form>
            {inputValue && <SuggestionSide inputValue={inputValue} resetInput={setInputValue} displayFunc={displayFunc}/>}
        </div>
    )
}