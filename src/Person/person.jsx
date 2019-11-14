import React, { Component } from 'react';

const person = (props) => {
    const {name, age} = props.person;
    return (
        <>
            <button onClick={props.handleClick}>Test</button>
            <p>Hi {name} Age {age}</p>
        </>        
    );
}

// class person extends Component {
//     render() {
//         return (
//             <>{this.props.name}</>
//         );
//     }
// }

export default person;