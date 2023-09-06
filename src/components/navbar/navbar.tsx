"use client";

import NavBarComputer from './navbarComputer';
import MobileNavBar from './mobileNavbar';
import { useEffect, useState } from 'react';
import findAllCategories from '@/utils/datas/allCategories';

export default function NavBar () {


    interface Category {
        id: number;
        name: string;
      }

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        findAllCategories().then((data) => {
            setCategories(data.data)
            console.log(data)
        });
      }, [])


    return (
        <>
            <MobileNavBar categories={categories}/> 
            <NavBarComputer categories={categories}/> 
        </>
    )
}