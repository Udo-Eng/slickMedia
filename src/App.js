import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import MovieSet from './components/MovieSet/MovieSet';
import {getMovie} from './api/api';
import {useEffect, useState} from 'react';



function App() {

  let [movies,setMovies]  = useState([])


  // Call useEffect to perform an asynchronous process
  useEffect(()=>{

    const fetchMovies = async () => {

      let newMovie = await  getMovie();

      setMovies((prevState)=>{
          return [...prevState,newMovie];
      });

    }

    fetchMovies();

  },[])

  return (
    <div >
      <Header/>
      <Hero />
      <Search />
     {
      movies.length > 0 &&  <MovieSet movieList={movies}/>
     }
      {
      movies.length > 0 &&  <MovieSet movieList={movies}/>
     }
    </div>
  );
}

export default App;
