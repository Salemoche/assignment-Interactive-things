import React, { useEffect, FC } from 'react'
import {useRouter} from 'next/router'
import HomePageButtonComponent from '../../../components/home-page-button/home-page-button.component';
import LayoutComponent from '../../../components/layout/layout.component';

interface MunicipalityInterface {
    municipality: any
}

const MunicipalityComponent: FC<MunicipalityInterface> = ({ municipality }) => {
    const router = useRouter();
    const { id } = router.query

    return (
        <LayoutComponent>
            <main className="iat-municipality">
                <HomePageButtonComponent className="iat-municipality__home-button" iconPosition="left"/>
                <h1>{ municipality.name } </h1>
            </main>
        </LayoutComponent>
    )
}

export default MunicipalityComponent

export const getServerSideProps = async( context ) => {
    const res = await fetch(`https://municipality-example-api.vercel.app/api/municipality?id=${ context.params.id }`);
    const municipality = await res.json()

    return {
        props: {
            municipality
        }
    }
}

// export const getStaticProps = async ( context ) => {
//     const res = await fetch(`https://municipality-example-api.vercel.app/api/municipality?id=${ context.params.id }`);
//     const item = await res.json()

//     return {
//         props: {
//             item
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://municipality-example-api.vercel.app/api/municipalities`);
//     const items = await res.json()
//     const ids = items.map(article => article.id);
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false // for 404
//     }
// }
