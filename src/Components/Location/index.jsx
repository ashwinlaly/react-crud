import React, { Component } from "react";

class Location extends Component {
    
    state = {
        lat : null,
        log : null,
        errorMessage : ''
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(loca => {
            this.setState({
                            lat : loca.coords.latitude,
                            log : loca.coords.longitude
                        })
        }, errorMessage => {
            console.log(errorMessage.message);
            this.setState({errorMessage : errorMessage.message})
        })
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
        
    render() {
        return (
            <>
                {(this.state.errorMessage !== '') ? this.state.errorMessage : 
                    <>
                        Latitude : {this.state.lat} <br/>
                        Longitute : {this.state.log}
                    </>}
            </>
        );
    }
}

export default Location;