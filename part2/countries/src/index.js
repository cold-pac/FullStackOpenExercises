import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';



const App = () => {

    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    //const [capital, setCapital] = useState('');
    const [capitalWeather, setCapitalWeather] = useState([]);
    

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((response) => {
                console.log(response.data)
                setCountries(response.data)
                }
            )
    }, [])

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }


    let countryContainer; 

    const yourSearch = (searcher) => {
        if (searcher === '') {
            return 
        }
        countryContainer = [];
        countries.forEach((elem) => {
            if (elem.name.includes(searchTerm) || elem.name.toLowerCase().includes(searchTerm)) {
                countryContainer.push(elem);
            }
        });
        if (countryContainer.length === 1) {
            return (
                <div> 
                    <h1>{countryContainer[0].name}</h1>
                    <div>capital {countryContainer[0].capital}</div>
                    <div>population {countryContainer[0].population}</div>
                    <h2>languages</h2>
                    <ul>
                        {countryContainer[0].languages.map(elem => <li key = {elem.nativeName}>{elem.name}</li>)}
                    </ul>
                    <img alt="flag" src = {countryContainer[0].flag} style = {{width: '15vw'}}/>
                    <h2>Weather in {countryContainer[0].capital}</h2>
                    <div></div>
                    {/* 
                    <div><b>temperature:</b>{countryContainer[1].current.temperature} Celsius</div>
                    <img src = {countryContainer[1].current.weather_icons} alt = "weather icon" />
                    <div><b>wind:</b>{countryContainer[1].current.wind_speed}{countryContainer[1].current.wind_degree}{countryContainer[1].current.wind_dir}</div> */}
                </div>
            )
        } else if (countryContainer.length <= 10) {
            return countryContainer.map((elem,index) => <div key = {index}>{elem.name} <button onClick = {function () {setSearchTerm(elem.name); yourSearch(searchTerm);}}>show</button></div>);
        } else  { 
            return "Too many matches, specify another filter";
        }
    }

    return (
        <div>
            <span>Find Countries </span>
            <input value = {searchTerm} onChange = {handleChange}/>
            <div>{yourSearch(searchTerm)}</div>
        </div>       
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
