import React, { Component } from 'react';

class Input extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : props.value,
            rules : [],
            message : props.message
        }
    }
    componentDidMount(){
        this.setState({rules : this.props.validation.split(',')}, () => {})
    }
    handleChange = (e) => {
        this.setState({value : e.target.value})
        this.handleValidation()
    }
    handleValidation = (e) => {
        this.state.rules.map((i, j) =>{
            if(i === 'required'){
                (this.state.value === '') ? this.setState({message : `${this.props.name} field is required`})
                                            : this.setState({message : ''})
            } else {
                let validation = i.split(':')[0].trim()
                let length = i.split(':')[1].trim()
                if(validation === 'min'){
                    (this.state.value.length < length) ? 
                    this.setState({message : `${this.props.name} field is in-valid`})
                    : this.setState({message : ''})
                }
                // if(validation === 'max'){
                //     (this.state.value.length > length) ? 
                //             this.setState({message : `${this.props.name} field is in-valid`})
                //             : this.setState({message : ''})
                // }
            }
        })
    }
    render(){
        return (
            <>
                <div className="form-group">
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    <input 
                        type={this.props.type}
                        name={this.props.name}
                        id={this.props.id}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={this.handleChange}
                        onBlur={this.handleValidation}
                    />
                    <small id={`${this.props.id}_help`} className="form-text text-danger">{this.state.message}</small>
                </div>
            </>
        )
    }
}

export default Input;