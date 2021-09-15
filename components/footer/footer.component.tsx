import React from 'react'
import IATLogo from '../../assets/icons/brandmark.svg';

const FooterComponent = () => {
    return (
        <footer className="iat-footer">
            <div className="iat-footer__bar">
                <div className="iat-footer__icon iat-icon">
                    <IATLogo/>
                </div>
                <div className="iat-footer__text">Interactive Things</div>
            </div>
        </footer>
    )
}

export default FooterComponent
