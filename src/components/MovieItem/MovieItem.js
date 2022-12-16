import classes from './movieitem.module.css';



const MovieItem = (props) => {

    return (
        <div className={classes.movieitem}>
            <p>Movie Name</p>
        </div>
    );
}


export default MovieItem;