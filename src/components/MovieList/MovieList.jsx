import React, { useEffect , useState} from 'react'
import "./MovieList.css"
import Fire from "../../assets/images/fire.png"
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'
import sortFun from "lodash"
const MovieList = ({type,title,emoji}) => {

    const [movies,setMovies]=useState([]);
    const [minRating,setMinRating]=useState(0);
    const [filteredMovies,setFilteredMovies]=useState([]);
    const [sort,setSort]=useState({
        by:'default',
        order:'asc'
    })
    useEffect(()=>{
            fetchMovies();
    
    },[type])

    useEffect(()=>{
        if(sort.by!='default'){
            const sortedMovies=sortFun.orderBy(filteredMovies,[sort.by],[sort.order]);  
            setFilteredMovies(sortedMovies);
        }
    },[sort])

    const  fetchMovies=async()=>{
        const response=await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=adfa7472c2f0cb7dcbae1eeac1fce795`)
        const data=await response.json();
        setMovies(data.results)
        setFilteredMovies(data.results);

    }

    const handleFilter=(rate)=>{
        if(minRating==rate){
            setMinRating(0);
            setFilteredMovies(movies);
        }
        else{

            setMinRating(rate)
            const filteredMovies=movies.filter((movie)=>movie.vote_average>=rate);
            setFilteredMovies(filteredMovies);
        }
    }
const handleSort=(e)=>{

    const {name,value}=e.target;
    setSort( prev => ({...prev,[name]:value})
    )

}
console.log(sort)
  return (
    <section className="movie_list" id={type}>
        <header className="align_center movie_list_header">
            <h2 className="align_center movie_list_title">{title}
                <img src={emoji} alt="" className="navbar_emoji" />
            </h2>

            <div className="align_center movie_list_fs">
               <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[8,7,6]} />

                <select name='by' id="" className="movie_sorting" onChange={handleSort} value={sort.by} >
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name='order' id="" className="movie_sorting" onChange={handleSort} value={sort.order}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </header>

        <div className="movie_cards">
            {
                
                filteredMovies.map((movie)=>
                <MovieCard key={movie.id} movie={movie} />
            )
            }
        </div>

    </section>
  )
}

export default MovieList