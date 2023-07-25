"use client";

import { useMediaQuery } from 'react-responsive';
import NavBarComputer from './navbarComputer';
import MobileNavBar from './mobileNavbar';

export default function NavBar () {


    const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <>
        {isSmallScreen ?
            <MobileNavBar /> :
            <NavBarComputer /> 
            }
        </>
    )
}