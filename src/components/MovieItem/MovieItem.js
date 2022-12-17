import classes from './movieitem.module.css';



const MovieItem = (props) => {
    
        const {title} = props;

    return (
        <div className={classes.movieitem}>
            <p>{title}</p>
        </div>
    );
}


export default MovieItem;