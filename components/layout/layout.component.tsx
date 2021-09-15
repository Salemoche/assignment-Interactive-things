import React, { FC } from 'react'
import MetaComponent from '../meta/meta.component';
import NavigationComponent from '../navigation/navigation.component';
import FooterComponent from '../footer/footer.component';

interface LayoutInterface {
    children: any
}

const LayoutComponent: FC<LayoutInterface> = ({ children }) => {
    return (
        <>
            <MetaComponent/>
            <NavigationComponent/>
            { children }
            <FooterComponent/>
        </>
    )
}

export default LayoutComponent
