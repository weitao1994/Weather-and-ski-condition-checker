import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "38cfd46b38204cf588754048181606";
let time = new Date();
let index = Math.round((time.getHours()) / 3) - 1;


class App extends React.Component {
    state = {
        temperature: undefined,
        location: undefined,
        chance_of_snow: undefined,
        totalSnowfall_cm: undefined,
        visibility: undefined,
        humidity: undefined,
        wind_speed: undefined,
        condition: undefined,
        error: undefined

    }

    getWeather = async (e) => {
        e.preventDefault();

        const mountain = e.target.elements.mountain.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.worldweatheronline.com/premium/v1/ski.ashx?key=${API_KEY}&q=${mountain}+${country}&format=json`);
        const response = await api_call.json();


        if (index < 1) {
            index = 0;
        }

        if (mountain && country) {           //error handling: invalid input

            if(response.data.error) {     //error handling: no data
                this.setState({
                    temperature: undefined,
                    location: undefined,
                    chance_of_snow: undefined,
                    totalSnowfall_cm: undefined,
                    chance_of_fog: undefined,
                    visibility: undefined,
                    humidity: undefined,
                    wind_speed: undefined,
                    error: "Unable to find any matching weather location to the query submitted."
                });
            } else {
                console.log(response);
                this.setState({
                    
                    temperature: response.data.weather[0].top[0].maxtempC,
                    location: response.data.request[0].query,
                    chance_of_snow: response.data.weather[0].chanceofsnow,
                    totalSnowfall_cm: response.data.weather[0].totalSnowfall_cm,
                    chance_of_fog: response.data.weather[0].hourly[index].chanceoffog,
                    visibility: response.data.weather[0].hourly[index].visibility,
                    humidity: response.data.weather[0].hourly[index].humidity,
                    wind_speed: response.data.weather[0].hourly[index].top[0].windspeedKmph,
                    error: ""
                });
            }
        } else {
            this.setState({
                temperature: undefined,
                location: undefined,
                chance_of_snow: undefined,
                totalSnowfall_cm: undefined,
                chance_of_fog: undefined,
                visibility: undefined,
                humidity: undefined,
                wind_speed: undefined,
                error: "Please enter the value."
            });
        }
        
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div >
                            <div >
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather
                                        temperature={this.state.temperature}
                                        location={this.state.location}
                                        chance_of_snow={this.state.chance_of_snow}
                                        totalSnowfall_cm={this.state.totalSnowfall_cm}
                                        chance_of_fog={this.state.chance_of_fog}
                                        visibility={this.state.visibility}
                                        humidity={this.state.humidity}
                                        wind_speed={this.state.wind_speed}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
            
        );
    }
}


export default App;