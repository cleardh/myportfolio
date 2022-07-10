import React from 'react';

const Neumorphism = ({ type, className, style, children }) => {
    return (
        <div className={`${type} ${className}`} style={style}>{children}</div>
    )
}

export default Neumorphism;