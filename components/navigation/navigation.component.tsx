import React from 'react'
import Link from 'next/link'

const NavigationComponent = () => {
    return (
        <nav className='iat-navigation'>
            <div className="iat-navigation__text-container">
                <Link passHref href="/"><h1 className="iat-navigation__heading">Schweizer Gemeinden</h1></Link>
                <div className="iat-navigation__subheading">Assignment Developer Recruitment</div>
            </div>
            <div className="iat-navigation__l18n-container">
                <Link passHref href="/"><span className="iat-navigation__l18n__item">DE</span></Link>
            </div>
        </nav>
    )
}

export default NavigationComponent
