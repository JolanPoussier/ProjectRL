"use client"

import style from "./page.module.scss";

export default function Input () {
    return (
        <div className={style.inputContainer}>
            <input 
                className={style.input}
                placeholder="  Trouves ta méchanique" 
                type="text" 
                // value={inputValue} 
                // onChange={handleInputChange} 
            />
        </div>
    )
}