import React, {useState, useEffect} from "react"
import MoviesCard from "./MoviesCard"
import NewMovie from "./NewMovie"

function MovieContainer() {
 const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then(resp => resp.json())
    .then(data => setMovies(data)
    )
  },[])   
  
    
  function deleteMovie(id) {
    setMovies(movies.filter(movie => movie.id !== id));
    fetch(`http://localhost:9292/movies/${id}`, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify()
    })
    .then(res => res.json())
    .then(data => setMovies(data))
    setMovies(movies.filter(movie => movie.id !== id))
    
  }
  
  function addNewMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }



    return (
      <div>
        <NewMovie addNewMovie={addNewMovie}/>
       {movies.map(movie => <MoviesCard movie={movie} key={movie.id} deleteMovie={deleteMovie} addNewMovie={addNewMovie}/>)}
       
      </div>
    );
  }
  
  export default MovieContainer;