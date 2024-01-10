import React, { useState } from 'react';
import '../components/style.css';
import WeatherDetails from './WeatherDetails';

function SearchMain() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
        <div className='wrap'>
            <div className='searc'>
                <input type='search' placeholder='Search City...' id='search' value={searchTerm} onChange={(e) => 
                setSearchTerm(e.target.value)} />
            </div>
            <button className='searchButton'>Search</button>
        </div>
        <WeatherDetails />
        </>
    );
}

export default SearchMain;