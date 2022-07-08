import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    const createLink = (title) => {
        return (
            <Link href={`/${title.toLowerCase()}`}>{title}</Link>
        )   
    }
    return (
        <div style={styles.navbar}>
            {createLink('About')}
            {createLink('Projects')}
            {createLink('Resume')}
            {createLink('Contact')}
        </div>
    )
}

const styles = {
    navbar: {
        width: '100vw',
        height: 60,
        position: 'fixed',
        top: 0,
        left: 0,
        boxShadow: '0px 1px 20px',
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: 20
    }
}

export default Navbar;