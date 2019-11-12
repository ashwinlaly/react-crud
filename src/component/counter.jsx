import React, { Component } from 'react'

class Counter extends Component {

    //https://picsum.photos/
    state = {
        count : 0,
        tags : [1,2,3]
    }

    // constructor(){
    //     super();
    //     this.handleClick = this.handleClick.bind(this);
    // }
    
    render(){
        return (
            <>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button className='btn btn-primary btn-sm' onClick={this.handleClick}>+</button>
                { this.state.tags.length === 0 && "No items" }
                {
                    this.state.tags.map((i) => {
                        return (
                            <span key={i} >
                                {i}
                            </span>
                        )
                    })
                }
            </>
        );
    }

    getBadgeClass() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    handleClick = () => {
        console.log(this.state.count);
    }

}

export default Counter;