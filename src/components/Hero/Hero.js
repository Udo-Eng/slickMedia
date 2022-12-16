import classes from "./hero.module.css";

const Hero = () => {
return (
<div className={classes.hero}>
    <div className={classes.innerContainer}>
        <p className={classes.heroText}>
        Watch
        something
        incredible
        </p>
    </div>
   
</div>
);
};

export default Hero;
