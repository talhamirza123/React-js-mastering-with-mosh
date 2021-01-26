import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
    
    render() {
        return  (
        //     <div>       
            
            
             
        //          <button 
        //           onClick={this.props.onReset} 
        //           className="btn btn-danger btn-sm m-2"
        //           >
        //           Reset Buttom
        //           </button>   
            
            
        //    {
        //         this.props.counters.map
        //         (
        //           counter =>
        //        <Counter 
        //            key={counter.id} 
        //            onDelete={this.props.onDelete}
        //            onIncrement={this.props.onIncrement}
        //            counter={counter}
        //             >         
        //     </Counter>
        //     )
        //         } 
        //     </div>
        <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        
        
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            
            counter={counter}
          />
        ))}
      </div>
             );
    }
}
export default Counters;