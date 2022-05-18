// APIkeys : e923ac1e2bd04192bfc06cba467a5531
import React from 'react'
import styled from 'styled-components'
import SearchResultCard from './SearchResultCard'


const SearchResultBlock = styled.div`
    margin : 10px
`

const SearchResult = ({searchList}) => { 
    return (
        <>
            {
            searchList.map(({title,urlToImage, url})=>{
                return (<SearchResultCard title={title} imageUrl = {urlToImage} link={url}></SearchResultCard>)
            })
        }
        </>
    )
}

export default SearchResult