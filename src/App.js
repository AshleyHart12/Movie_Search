import React, { useState, useEffect } from "react";
import Movie from './Components/movieCard';
import Search from './Components/search';

const Movie_Api = "https://www.omdbapi.com/?s=man&apikey=dc43bd63";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
   fetch(Movie_Api)
   .then((res) => res.json())
   .then(response => {
     setMovies(response.Search);
     setLoading(false)
   });
  }, []);

  const search = input => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${input}&apikey=dc43bd63`)
    .then(res => res.json())
    .then(response => {
      if(response.Response === "True"){
        setMovies(response.Search);
        setLoading(false);
        console.log(response.Search)
      } else {
        setErrorMessage(response.Error);
        setLoading(false);
      }
    });
  };


return (
  <div className="App">
    <Search search={search} />

    <div>
      {
        loading && !errorMessage ? (
          <h2>...loading...</h2>
        ) : errorMessage ? (
          <h2>{errorMessage}</h2>
        ) : (
          movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        )
      }
    </div>
  </div>
)

}

export default App;