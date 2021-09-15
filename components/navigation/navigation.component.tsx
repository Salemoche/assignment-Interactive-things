import React from 'react'
import Link from 'next/link'

const NavigationComponent = () => {
    return (
        <nav className="iat-navigation">
            <Link href="/"><h1 className="iat-navigation__heading">Schweizer Gemeinden</h1></Link>
            <div className="iat-navigation__subheading">Assignment Developer Recruitment</div>
        </nav>
    )
}

export default NavigationComponent
