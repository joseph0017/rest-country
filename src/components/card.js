import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ countries, foundCountry }) => {
    console.log(countries)
    return (
        <div className  ="card-content">            
            {foundCountry && foundCountry.length > 0 ? (
          foundCountry.map((country) => (
            <div className="card" key={country.cca3}>
            <Link to = {`/countries/${country.cca3}`} >
            <img src = { country.flags.png } alt = "countries"/>
            <h2 > { country.name.official } </h2>
            <div className="card-text">
            <div> Population: { country.population } </div>
            <div> Region: { country.region } </div>
            <div> Capital: { country.capital } </div>
            </div>
            </Link>
        </div>
          ))
        ) : (
          countries.map((country) => (
                <div className="card" key={country.cca3}>
                    <Link to = {`/countries/${country.cca3}`} >
                    <img src = { country.flags.png } alt = "countries"/>
                    <h2 > { country.name.official } </h2>
                    <div className="card-text">
                    <div> Population: { country.population } </div>
                    <div> Region: { country.region } </div>
                    <div> Capital: { country.capital } </div>
                    </div>
                    </Link>
                </div>
          ))
        )}
        </div>
    )
}

export default Card
