"use client";

import Link from 'next/link';
import style from './page.module.scss';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import logo from "src/assets/logo/logoMobile.png";
import burger from "@/assets/logo/menu2.png"
import categories from '@/utils/datas/categories';
import { useState } from 'react';

export default function NavBar () {

    const params = useParams();

    const [toggleBurger, setToggleBurger] = useState(false);

    function handleToggle(){
        setToggleBurger(!toggleBurger)
    }

    return (
        
        <div className={style.mainMobile}>
            <div className={toggleBurger ? style.overlayMobile_active : style.overlayMobile} onClick={handleToggle}></div>
            <div className={style.logo}>
                <Link href={"/"}>
                    <Image src={logo} alt="Logo du site" width={70} height={70}/>
                </Link>
            </div>
            <button className={style.burgerButton} onClick={handleToggle}>
                <Image src={burger} alt='burger menu' width={50} height={50}/>
            </button>
            <div className={toggleBurger ? style.menuBurger_active : style.menuBurger}>
                <button className={style.closeButton} onClick={handleToggle}>x</button>
                <div className={style.containerMobile}>
                    {categories.map((category) => 
                        (
                            <div key={category} className={style.elementMobile}>
                                <Link onClick={handleToggle} key={category} className={params.category===category ? style.link_active : style.link} href={`/${category}`}>
                                    {category}
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )    
    
}