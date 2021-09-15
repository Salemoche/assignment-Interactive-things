import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchComponent = () => {

    const [municipalities, setMunicipalities] = useState([])

    const handleOnSearch = async (string: string, results: any) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.

        const res = await fetch(`https://municipality-example-api.vercel.app/api/municipalities?name=${ string }`);
        const data = await res.json()
        // setMunicipalities([ ...data ])
        setMunicipalities(data.municipalities)
        console.log(data, municipalities);


        console.log(string, results)
    }
    
    const handleOnHover = (result: any) => {
        // the item hovered
        console.log(result)
    }
    
    const handleOnSelect = (item: any) => {
        // the item selected
        console.log(item)
    }
    
    const handleOnFocus = () => {
        console.log('Focused')
    }
    
    const formatResult = (item: any) => {
        return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
    }

    return (
        <div className="iat-search">
            {/* <form onSubmit={ searchMunicipality }> */}
            <label htmlFor="search">Nach welcher Gemeinde suchen Sie?</label>
            {/* <div className="iat-search__bar__icon"></div> */}
            <div className="iat-search__bar__bar">
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
