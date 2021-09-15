import router from 'next/router'
import React, { FC } from 'react'

interface ButtonInterface {
    className: string
}

const HomePageButtonComponent: FC<ButtonInterface> = ({className}) => {

    const handleClick = () => {
        router.push("/");
    }

    return (
        <button className={`iat-button ${className}`} onClick={handleClick}>
            Zurück zur Startseite
        </button>
    )
}

export default HomePageButtonComponent
