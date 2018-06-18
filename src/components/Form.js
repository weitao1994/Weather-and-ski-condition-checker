import React from "react"

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="mountain" placeholder="City/Mountain..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button> Get Weather </button>
            </form>
        );
    }
}
export default Form;