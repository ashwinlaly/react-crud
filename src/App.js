import React, { Component, Suspense, lazy } from 'react';
import GoogleLogin from 'react-google-login';
// import {FirstLetterUC} from './Context/FirstLetterUCContext';
const Location = lazy(() => import('./Components/Location'))
const Table = lazy(() => import('./Components/Table'))
const Input = lazy(() => import('./Components/Input'))


class App extends Component {
  constructor(props){
    super(props)
  }

  data = [
    {
      id : 1,
      name : "Ashwin",
      age: 10,
      class : 1111
    },
    {
      id : 2,
      name : "Joi",
      age : 10,
      class : 1111
    }
  ];

  responseGoogle = (response) => {
    console.log(response);
  }
  
  render(){
    return (
      <div className="container-fluid ">
        {/* <NetworkError> */}
          <Suspense fallback={<div>Loading...</div>}>
              {/* <Location />
              <Table data={this.data}/>
              <Input type="text" name="name" id="name" placeholder="Enter the name" label="Name" value="" validation="required,min:6,max:10"/> */}
              <GoogleLogin
                clientId="656525447069-bfmjti1nt6jru32lretlkva5647u1gnj.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
          </Suspense>
        {/* </NetworkError> */}
      </div>
    );
  }
}

// const NetworkError = () => {
//   return (
//     <>Network Error</>
//   )
// }

export default App;