import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom';

const STYLES=['btn--primary','btn--outline'];
const SIZES=['btn--medium','btn--large'];
export const Button=({
    childern, 
    type, 
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonStyle : SIZES[0]
    // const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    // const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    // const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    return (
        <Link to='/home3' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {childern}
            </button>

        </Link>
    )
};