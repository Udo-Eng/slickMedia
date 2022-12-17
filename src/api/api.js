// function to get movie by A valid IMDb ID (e.g. tt1285016)

let url = "http://www.omdbapi.com/?i=tt3896198&apikey=ec6fdc50";


export const getMovie = async function(){

    return fetch(url).then(result => result.json()).then(data => {
        let newMovie = {
            title : data.Title,
            year : data.Year,
            rated : data.Rated,
            genre : data.Genre
        }

        return newMovie;
    })
 }
