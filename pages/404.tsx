import React from 'react'
import HomePageButtonComponent from '../components/home-page-button/home-page-button.component';
import LayoutComponent from '../components/layout/layout.component';

function NotFoundComponent() {
    return (
        <LayoutComponent>
            <main className="iat-404">
                <div className="iat-404__illustration">
                </div>
                <div className="iat-404__notice">Diese Seite existiert leider nicht.</div>
                <HomePageButtonComponent className="iat-404__home-button" iconPosition="right"/>
            </main>
        </LayoutComponent>
    )
}

export default NotFoundComponent
