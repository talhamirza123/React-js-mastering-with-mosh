import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import '../App.css';


// MATERING RAECT

//helllo

class Movies extends Component 
{
    state = 
    {
        movies:  getMovies(),   
    };
    handledelete = (movie) => 
    {
     console.log(movie);   
    } 
    render() 
    { 
        const { length: count } = this.state.movies;        
        
        if(count === 0) return <p>There are no movies in the table</p> 
        
        
        return (   
        <React.Fragment> <p>Showing {count} in the database</p>  
        <div className="container">
        <br></br>
         <table className="table table-striped table-hover">
        <thead>
        <tr> 
        <th>title</th>
        <th>genre</th>
        <th>Stock</th>
        <th>Rate</th>
        </tr>
        </thead>
        <tbody>
        { 
         this.state.movies.map 
         (
             movie => 
             (
             <tr key={movie._id}>
             <th scope="row">1</th>
             <td>{movie.title}</td>
             <td>{movie.genre.name}</td>
             <td>{movie.numberInStock}</td>
             <td>{movie.dailyRentalRate}</td>
            <td>
            <button onClick={() => this.handledelete(movie)} 
            className="btn btn-danger btn-sm">Delete</button>
            </td>  
             </tr>    
             )
             )
         }
        </tbody>
        </table>
        </div>
            </React.Fragment>
        );            
        }
};
     
export default Movies;