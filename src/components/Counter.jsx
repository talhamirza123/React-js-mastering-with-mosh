import React, { Component } from 'react';
// import { getMovies } from '../services/fakeMovieService';
import '../App.css';
// MATERING RAECT
//helllo
/// hi
/// hellloo here are the new update one nd it run too
///LATEST UPDATE
class Counter extends Component 
{
        render() {         
        return (    
           <div className="row">
                 
          <div className="col-1">
                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
       </div>                 
                 <div className="col-2">
                   <button 
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-secondary btn-sm m-2"
                  >
                  +
                  </button>
                  <button 
                  onClick={() => this.props.onDecrement(this.props.counter)}
                  className="btn btn-secondary btn-sm m-2"
                   disabled={this.props.counter.value === 0 ? "disabled" : ""}
                  >
                  -
                  </button>
                  <button 
                  onClick={() => this.props.onDelete(this.props.counter.id)} 
                  className="btn btn-danger btn-sm m-2"
                  >
                  Delete
                  </button> 
                  </div>
                  </div>
        );                
     }
    getBadgeClasses()
      {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
      }  
      formatCount() 
      {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
      }
};
export default Counter;