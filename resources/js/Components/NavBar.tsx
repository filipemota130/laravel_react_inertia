import logo from "../../../public/VQDT_logo.svg";
import React from 'react';
import "../../css/Navbar.css"

type NavBarProps = {
    role: string;
    className?: string;
}


function NavBar({role, className}:NavBarProps){
    return (
        <>
            <nav className='w-screen border-4 gap-4'>
                <img src={logo} />
                <ul className='flex gap-4'>
                    {
                        role === 'prof' ? 
                        (
                            <>
                                <li className=''><a href='#'>Elaborar</a></li>
                                <li className=''><a href='#'>Professor</a></li>
                            </>
                        )
                        : 
                        (
                            <>
                                <li className=''> Aluno </li>
                            </>
                        )
                    }
                    <img src={}></img>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;