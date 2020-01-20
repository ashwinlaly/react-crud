import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      term : '',
      isLoading : true,
      result : []
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    axios.get("https://api.unsplash.com/search/photos", {
      params : { query : this.state.term},
      headers : {
        Authorization: 'Client-ID dbf9bb24636786097de16101b3e88b0c235424e6a29de28928108adbefb62a46'
      }
    }).then(data => {
      let res = data.data.results
      this.setState({result : res})
    });
  }

  handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
  }
  
  render(){
    return (
      <>
          <SearchBox term={this.state.term} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <br/>
          {(this.state.result.length > 0) ? <ListImage result={this.state.result}/> : 'No data' }
      </>
    );
  }
}


const SearchBox = (props) =>  {
  return(
    <>
      <form onSubmit={props.handleSubmit}>
        <input 
          type="text" 
          name="term" 
          id="term" 
          value={props.term} 
          placeholder="Enter the search value"
          onChange={props.handleChange}
        />
      </form>
    </>
  )
}

const ListImage = ({result}) => {
  return (
    <>
      {result.map((i,j) =>{
        return(
          <img key={j} src={i.urls.small} alt={i.alt_description} height="50" width="50"/>
        )
      })}
    </>
  )
}

export default App;