import classes from './movieset.module.css';
import MovieItem from '../MovieItem/MovieItem';



const MovieSet = (props) => {

    const {movieList} = props;

    console.log(movieList);

    return (
        <div className={classes.movieset}>
            <h3>{movieList[0].genre}</h3>
            <div className={classes.movieItemContainer}>
                    <MovieItem title={movieList[0].title}/>
                    <MovieItem title={movieList[0].title}/>
                    <MovieItem title={movieList[0].title}/>
                    <MovieItem title={movieList[0].title}/>
                    <MovieItem title={movieList[0].title} />
            </div> 
        </div>
    );

}


export default MovieSet;