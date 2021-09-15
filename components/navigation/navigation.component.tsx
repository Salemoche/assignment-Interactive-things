import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Navigation.module.scss';

const NavigationComponent = () => {
    return (
        <nav className={styles['iat-navigation']}>
            <div className={styles["iat-navigation__text-container"]}>
                <Link href="/"><h1 className={styles["iat-navigation__heading"]}>Schweizer Gemeinden</h1></Link>
                <div className={styles["iat-navigation__subheading"]}>Assignment Developer Recruitment</div>
            </div>
            <div className={styles["iat-navigation__l18n-container"]}>
                <Link href="/"><span className={styles["iat-navigation__l18n__item"]}>DE</span></Link>
            </div>
        </nav>
    )
}

export default NavigationComponent
