//List items
const movies = Array.from(document.querySelectorAll("li"))
//Extract the datas on an array
const moviesLengths = movies.map(movie => movie.dataset.time)
//Return the seconds
const moviesTotalLengthInSeconds = moviesLengths.map(movieLength => {
            const [minutes, seconds] = movieLength.split(":")
            return Number(minutes * 60) + Number(seconds)
        }
    ).reduce((totalInSeconds, movieLengthInSeconds) => totalInSeconds + movieLengthInSeconds, 0
)

const totalLength = `${Math.floor(moviesTotalLengthInSeconds / 3600)} hours 
    ${Math.floor(moviesTotalLengthInSeconds % 3600 / 60)}' ${moviesTotalLengthInSeconds % 3600 % 60}''`

console.log(totalLength)