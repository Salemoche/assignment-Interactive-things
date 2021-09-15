import router from 'next/router';
import React, { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
// const ReactSearchAutocomplete = require( 'react-search-autocomplete' );

const SearchComponent = () => {
    const [municipalities, setMunicipalities] = useState([])

    useEffect(() => {
        initialFetch();
    }, [])

    const initialFetch = async () => {
        const res = await fetch(`https://municipality-example-api.vercel.app/api/municipalities?name=e`);
        const data = await res.json();
        setMunicipalities(data.municipalities);
    }

    const handleOnSearch = async (string: string, results: any) => {

        const res = await fetch(`https://municipality-example-api.vercel.app/api/municipalities?name=${ string }`);
        const data = await res.json();
        setMunicipalities(data.municipalities);
        console.log(data, municipalities);

        console.log(string, results);
    }
    
    const handleOnHover = (result: any) => {
        console.log(result);
    }
    
    const handleOnSelect = (municipality: any) => {
        console.log(municipality);
        router.push(`/municipality/${municipality.id}`);
        
    }
    
    const handleOnFocus = () => {
        console.log('Focused');
    }
    
    const formatResult = (municipality: any) => {
        return municipality;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+municipality+'</strong>'}}></p>); //To format result as html
    }

    return (
        <div className="iat-search">
            {/* <form onSubmit={ searchMunicipality }> */}
            <label htmlFor="search">Nach welcher Gemeinde suchen Sie?</label>
            {/* <div className="iat-search__bar__icon"></div> */}
            <div className="iat-search__bar">
                <ReactSearchAutocomplete 
                    items={municipalities}
                    placeholder="Suche nach Gemeindename..."
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                    styling={{
                        // backgroundColor: 'green',
                    }}
                />
            </div>
            {/* </form> */}
        </div>
    )
}

export default SearchComponent
