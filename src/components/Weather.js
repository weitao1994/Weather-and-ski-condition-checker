import React from "react"

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info">

                {
                    this.props.location && <p className="weather__key">Location:
                    <span className="weather__value"> {this.props.location} </span></p>
                }
                {
                    this.props.temperature && <p className="weather__key">Temperature:
                    <span className="weather__value"> {this.props.temperature}°C </span></p>
                }
                {
                    this.props.totalSnowfall_cm && <p className="weather__key"> Today's snowfall:
                    <span className="weather__value"> {this.props.totalSnowfall_cm} cm </span></p>
                }
                {
                    this.props.chance_of_snow && <p className="weather__key">Chance of snow:
                    <span className="weather__value"> {this.props.chance_of_snow}% </span></p>
                }
                {
                    this.props.chance_of_fog && <p className="weather__key">Chance of fog:
                    <span className="weather__value"> {this.props.chance_of_fog}% </span></p>
                }
                {
                    this.props.visibility && <p className="weather__key">Visibility:
                    <span className="weather__value"> Level {this.props.visibility} </span></p>
                }
                {
                    this.props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value"> {this.props.humidity}% </span></p>
                }
                {
                    this.props.wind_speed && <p className="weather__key">Wind speed:
                    <span className="weather__value"> {this.props.wind_speed} km/h </span></p>
                }
                {
                    this.props.error && <p className="weather__error"> {this.props.error} </p>
                }
            </div>
        );
    }
}
export default Weather;
