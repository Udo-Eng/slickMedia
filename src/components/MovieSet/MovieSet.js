import classes from './movieset.module.css';
import MovieItem from '../MovieItem/MovieItem';



const MovieSet = (props) => {

    return (
        <div className={classes.movieset}>
            <h3>Movie Category</h3>
            <div className={classes.movieItemContainer}>
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
            </div> 
        </div>
    );
}


export default MovieSet;