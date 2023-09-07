"use client";

import NavBarComputer from './navbarComputer';
import MobileNavBar from './mobileNavbar';
import findAllCategories from '@/utils/datas/allCategories';
import { Category } from '@/utils/datas/datasType';


export default function NavBar () {

    let categories: Category[] = findAllCategories() || [];

    return (
        <>
            <MobileNavBar categories={categories}/> 
            <NavBarComputer categories={categories}/> 
        </>
    )
}