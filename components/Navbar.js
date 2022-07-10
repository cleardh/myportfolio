import React from 'react';
import Link from 'next/link';
import Neu from './Neumorphism';

const Navbar = () => {
    const createLink = (title) => {
        return (
            <Link href={`/${title.toLowerCase()}`} passHref>
                <a>
                    <Neu type='concave' className='multi-color-text'>{title}</Neu>
                </a>
            </Link>
        )   
    }
    return (
        <div className='navbar'>
            {createLink('About')}
            {createLink('Projects')}
            {createLink('Resume')}
            {createLink('Contact')}
        </div>
    )
}

export default Navbar;