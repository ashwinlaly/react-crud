import React, { Component } from 'react';
import Posts from '../Posts';

class Timer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            message : 'hi'
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.timer = setInterval(() =>{
            this.tick();
        }, 1000)        
    }

    tick(){
        this.setState({date : new Date()})
    }
    handleChange = () => {
        this.setState({message : "welcome"});
    }
    // handleChange(){
    //     this.setState({message : "welcome"});
    // }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return (
            <>
                {this.state.date.toLocaleTimeString()}
                <Posts {...this.state} handleChange={this.handleChange} />
            </>
        )
    }
}

export default Timer;