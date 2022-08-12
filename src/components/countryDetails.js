import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import leftArrow  from '../assets/left-arrow.png';

const CountryDetails = () => {
    const { cca3 } = useParams()
    const { data: countries, error, isPending } = useFetch('https://restcountries.com/v3.1/alpha/' + cca3)
    
    console.log(countries)

    return (
        <div >        
            { isPending && <h1 className = "loading-center"> Country Loading... </h1> }
            { error &&  <div> {error} </div> }
            { countries && countries.map((country) => (
            <div key = {country.cca3} >  
            <Link to = '/'>
            <button className="go-back">
                <img src = {leftArrow} className = "left-arrow" alt = "leftArrow"  />
                 Back </button>
            </Link>
            
            <div className="national-detail">
                <div className="national-flag">
                    <img src = {country.flags.png} alt =  'National flag'  />
                    </div>
                    <div className="country-text-details">
                    <h1 className="country">  { country.name.common } </h1>

                    <div className="population"> Population: { country.population } </div>
                    <div className="region">Region: { country.region } </div>
                    <div className="sub-region">Sub Region: { country.subregion } </div>
                    <div className="capital">Capital:  {country.capital}  </div>
                </div>   
                
                <div className="second-text-details">
                    <div className="top-level-domain">Top Level Domain: {country.tld} </div>
                    <div className="currencies">Currencies: {Object.keys(country.currencies)} </div>
                    <div className="languanges">Languanges: {Object.values(country.languages)} </div>
                </div>
            </div>

            </div> 
            ))}
        </div>
    )
}

export default CountryDetails
