import {useState} from 'react';


import classes from "./search.module.css";

const Search = () => {
    const [search,setSearch] = useState("");

    const onChangeHandler = (event) => {
        setSearch(event.target.value);
    }

  return (
   <div className={classes.searchInput}>
    <label htmlFor="search" >Search</label>
        <input  id="search" value={search} onChange={onChangeHandler}/>
   </div>
     
   
  );
};

export default Search;
