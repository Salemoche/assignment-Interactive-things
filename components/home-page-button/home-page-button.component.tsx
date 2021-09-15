import router from 'next/router'
import React, { FC } from 'react'
import ArrowIcon from '../../assets/icons/arrow.svg';
interface ButtonInterface {
    iconPosition: string
    className: string
}

const HomePageButtonComponent: FC<ButtonInterface> = ({className, iconPosition}) => {

    const handleClick = () => {
        router.push("/");
    }

    return (
        <button className={`iat-button ${className}`} onClick={handleClick}>
            <div className="iat-footer__icon iat-icon" style={{
                order: iconPosition == 'left' ? 0 : 1,
                transform: iconPosition == 'left' ? 'none' : 'rotate(180deg)',
                margin: iconPosition == 'left' ? '0 10px 0 0' : '0 0 0 10px'
                }}>
                <ArrowIcon/>
            </div>
            <span>Zurück zur Startseite</span>
        </button>
    )
}

export default HomePageButtonComponent
