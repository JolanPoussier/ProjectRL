"use client";

import Link from 'next/link';
import style from './page.module.scss';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import logo from "src/assets/logo/logo.png";
import categories from '@/utils/datas/categories';
import { useMediaQuery } from 'react-responsive';

export default function NavBarComputer () {

    const params = useParams();

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <div className={style.main}>
            <div className={style.logo}>
                <Link href={"/"}>
                    <Image src={logo} alt="Logo du site" width={240} height={60}/>
                </Link>
            </div>
            <div className={style.container}>
                {categories.map((category) => 
                    (
                        <div key={category} className={style.element}>
                            <Link key={category} className={`${params.category===category ? style.link_active : style.link}`} href={`/${category}`}>
                                {category}
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}