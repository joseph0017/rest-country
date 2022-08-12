import {useState} from 'react'
import Card from './components/card'
import Searchbar from './components/searchbar'
import useFetch from './useFetch'

const HomePage = () => {
    const { data: countries, isPending, error } = useFetch('https://restcountries.com/v3.1/all')

    const [common, setCommon] = useState('')

    const [foundCountry, setFoundCountry] = useState(countries)

    const [region, setRegion] = useState()

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = countries.filter((country) => {
            return country.name.common.toLowerCase().startsWith(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
          });
          setFoundCountry(results);
        } else {
            setFoundCountry(countries);
          // If the text field is empty, show all countries
        }
        setCommon(keyword);
    }

    const filterRegion = (keyword) => {
      if (keyword !== '') {
        const results = countries.filter((country) => {
          return country.region === keyword;
        });
        setFoundCountry(results);
      } else {
          setFoundCountry(countries);
      }
      setRegion(keyword);
  }
          
    return (
        <div className = "home">
            <Searchbar common = {common} filter = {filter} region = {region} filterRegion = {filterRegion}  />
            { error && <div> { error } </div> }
            { countries && <Card countries = {countries} foundCountry = {foundCountry} />}
            { isPending && <h1 className = "loading-center"> Loading... Just a sec </h1> }
        </div>
    )
}

export default HomePage


