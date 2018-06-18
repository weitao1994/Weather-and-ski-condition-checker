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
              
            </div>
        );
    }
}
export default Weather;
