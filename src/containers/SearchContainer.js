import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
    padding-left: 0.50rem;
    padding-right: 0.50rem;
`;

const SearchTitle = styled.h1`
    font-size: inherit;
`;

const SearchInput = styled.input`
    border-radius: 4px;
    font-size: inherit;

    &:focus {
        /* background-color: yellow; */
        /* border: 8px solid red; */
        outline: none;
        border: 2px solid blue;
    }
`;

const SearchList = styled.ul`
    /* padding: 0; */

    max-height: 25rem;
    overflow-y: scroll;
    max-width: 15rem;

    border: 2px solid rgba(0, 0, 0, 0.5);
    padding: 2px;

    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
        width: 11px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid white;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const SearchItem = styled.li`
    list-style: none;
`;

const SearchContainer = () => {
    const [allCountries, setAllCountries] = useState([
        // 'Scotland',
        // 'France',
        // 'Australia',
        // 'America',
        // 'England'
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const getCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setAllCountries(
            data.map((country) => country.name.common)
        )
    };

    useEffect(() => {
        getCountries();
    }, [])

    const handleClick = (event) => {
        // console.dir(event.target.innerText);
        setSearchTerm(event.target.innerText)
    };

    const filteredList = (filterTerm) => {
        return allCountries.filter( (country) => {
                return country.toLowerCase().includes(searchTerm.toLowerCase())
            } )
            .map((country, index) => {
                return <SearchItem key={index} onClick={handleClick}>{country}</SearchItem>
            })
    }

    const handleFiltering = (event) => {
        setSearchTerm(event.target.value);
    };

    return <SearchDiv>
        <SearchTitle>Search:</SearchTitle>
        <SearchInput type="text" placeholder="country"
            value={searchTerm}
            onChange={handleFiltering} />

        { searchTerm.length === 0 ? <p>Enter something!</p> :
          <SearchList>{filteredList(searchTerm)}</SearchList> }
    </SearchDiv>
};

export default SearchContainer;