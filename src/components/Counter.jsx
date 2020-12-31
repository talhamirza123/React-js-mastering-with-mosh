import React, { Component } from 'react';
// import { getMovies } from '../services/fakeMovieService';
import '../App.css';


// MATERING RAECT

//helllo

/// hi

class Counter extends Component 
{
    state = 
    {
        count: 0   
    };
    handleIncrement()
    {
        console.log('Increment Clicked');
    }
    render() { 
        return (    
                 <div>
                 <span className={this.formatCount()}></span>
                 <button onClick={this.handleIncrement} className="btn btn-danger">Increment</button>
                 </div>
        );                
     }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
};
     
export default Counter;