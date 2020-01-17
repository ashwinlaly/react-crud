import React, {Component} from "react";

class Posts extends Component {
    render(){
        return (
            <>
                {this.props.message}
                <button onClick={this.props.handleChange} >Handle Click</button>
            </>
        )
    }
} 

// const Posts = (props) => {
//     return (
//         <div className="component-posts">
//             <div className="card">
//                 <div className="card-body">
//                     {props.name}
//                 </div>
//                 <div className="card-footer">
//                     <Comment message={props.message} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// const Comment = ({message}) => {
//         message = 123
//         return (
//         <>
//             <small className="text-muted bg-gradient-primary">
//                 {message}
//             </small>
//         </>
//     )
// }

export default Posts;