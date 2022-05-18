// APIkeys : e923ac1e2bd04192bfc06cba467a5531
import React from 'react'

const SearchResult = ({searchList}) => { 
    return (
        <>
            {
            searchList.map(({title})=>{
                return (<p>{title}</p>)
            })
        }
        </>
    )
}

export default SearchResult