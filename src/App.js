 import React, { Component } from "react";

 import Navbar from './components/navbar';
 import Counters from './components/Counters';

 import './App.css';

 class App extends Component {
// hi how are you//
    state = { 
        counters: 
         [
             {id: 1, value: 3},
             {id: 2, value: 0},
             {id: 3, value: 0},
             {id: 4, value: 0},
         ]     
       }
       hanldeincrement = counter => {
       
       const counters = [... this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter};
       counters[index].value++;
       
       this.setState({ counters });
       }
       
       handleReset = () => {
         const counters = this.state.counters.map(c => {
           c.value = 0;
           return c;
         });
         this.setState({ counters })
       }   
       handleDelete = counterid => {
         
         const counters = this.state.counters.filter(c => c.id !== counterid);  
         this.setState({ counters })
       };  
    
     render() { 
         return ( 
                 <React.Fragment>
                 <Navbar />
                 <main class="container">
                 <Counters 
                 counters={this.state.counters}
                 onReset={this.handleReset}
                 onIncrement={this.hanldeincrement}
                 onDelete={this.handleDelete}
                 
                 />
                 </main>
                 </React.Fragment>
                  );
     }
 }
  
 export default App;
 
// export default App;