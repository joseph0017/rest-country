import React from 'react'

const Searchbar = ({ common, filter, filterRegion, }) => {
    console.log(filterRegion)
 
    return (
        <div className = "bar">
        <input placeholder = "Search for a country..."
                type="search"
                value={common}
                onChange={filter}
                className="input"
        />

        <div className="dropdown">
        <button className="dropbtn">Filter by Region
        </button>

        <div className="dropdown-content">
            <div  onClick = {() => filterRegion('Africa')}>Africa</div>
            <div  onClick = {() => filterRegion('Americas')}>Americas</div>
            <div  onClick = {() => filterRegion('Asia')}>Asia</div>
            <div onClick = {() => filterRegion('Europe')}>Europe</div>
            <div onClick = {() => filterRegion('Oceania')}>Oceania</div>
        </div>
        </div>
        </div>
    )
}

export default Searchbar



