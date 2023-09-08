"use client";

import NavBarComputer from './navbarComputer';
import MobileNavBar from './mobileNavbar';
import useCategories from '@/utils/datas/allCategories';
import { Category } from '@/utils/datas/datasType';


export default function NavBar () {

    let categories: Category[] = useCategories() || [];

    return (
        <>
            <MobileNavBar categories={categories}/> 
            <NavBarComputer categories={categories}/> 
        </>
    )
}