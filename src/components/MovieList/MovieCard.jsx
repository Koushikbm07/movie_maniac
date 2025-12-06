import React  from 'react'
import "./MovieCard.css"
import Star from "../../assets/images/star.png"
const MovieCard = ({movie}) => {

    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className="movie_card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='movie_poster' />
            <div className="movie_details">
                <h3 className="movie_details_heading">{movie.original_title}</h3>
                <div className="align_center movie_date_rate">
                    <p className="movie_date">{movie.release_date}</p>
                    <p className="movie_rate">{movie.vote_average}
                        <img src={Star} alt="" className="emoji" /></p>
                </div>
                <div className="movie_description">
                    {movie.overview.slice(0,100)+"..."}
                </div>
            </div>

        </a>
    )
}

export default MovieCard