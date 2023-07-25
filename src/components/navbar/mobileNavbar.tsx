"use client";

import Link from 'next/link';
import style from './page.module.scss';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import logo from "src/assets/logo/logoMobile.png";
import burger from "@/assets/logo/menu.png";
import sidebarArrow from "@/assets/logo/sidebarMobile.png";
import categories from '@/utils/datas/categories';
import { useEffect, useState } from 'react';
import SidebarMobile from '../sidebar/sidebarMobile';

export default function NavBar () {

    const params = useParams();

    const [toggleBurger, setToggleBurger] = useState(false);
    const [displaySideMenu, setdisplaySideMenu] = useState(false);

    function handleToggleBurger(){
        setToggleBurger(!toggleBurger)
    }

    function handleDisplaySideMenu(){
        setdisplaySideMenu(!displaySideMenu)
    }

    useEffect(() =>{
        setdisplaySideMenu(!displaySideMenu)
    }, [params.move])

    return (
        
        <div className={style.mainMobile}>
            <div className={toggleBurger ? style.overlayMobile_active : style.overlayMobile} onClick={handleToggleBurger}></div>

            <button className={style.sideBarButton} onClick={handleDisplaySideMenu}>
                    <Image src={sidebarArrow} alt="Logo du site" width={35} height={35}/>
            </button>
            <SidebarMobile displaySideMenu={displaySideMenu} displayFunc={() => setdisplaySideMenu(!displaySideMenu)}/>

            <div className={style.logo}>
                <Link href={"/"}>
                    <Image src={logo} alt="Logo du site" width={70} height={70}/>
                </Link>
            </div>

            <button className={style.burgerButton} onClick={handleToggleBurger}>
                <Image src={burger} alt='burger menu' width={50} height={50}/>
            </button>

            <div className={toggleBurger ? style.menuBurger_active : style.menuBurger}>
                <button className={style.closeButton} onClick={handleToggleBurger}>x</button>
                <div className={style.containerMobile}>
                    {categories.map((category) => 
                        (
                            <div key={category} className={style.elementMobile}>
                                <Link onClick={handleToggleBurger} key={category} className={params.category===category ? style.link_active : style.link} href={`/${category}`}>
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