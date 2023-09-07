"use client"

import { useState } from "react";
import style from "./input.module.scss";
import searchIcon from "@/assets/icons/searchIcon.png";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Input () {

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
                <div className={style.inputDiv}>
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
        </div>
    )
}