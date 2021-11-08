import React , {useState, useEffect} from 'react'
import axios from '../axios';
import requests from '../requests';
import   '../Banner.css';

function Banner({name, description}) {
    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        async function fetchData(){
                     const request = await axios.get(requests.fetchNetflixOriginals);
                     const response = request.data.results[ Math.floor(Math.random() * request.data.results.length -1 )];
                     console.log(request.data.results);
                     console.log(response);
                    setMovie(response);
            return request; 
        } 
        fetchData();
    }, []);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "...": str;
    }
    
    return (
      <header className="banner" style={{ 
          backgroundSize:"cover",
          backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center"
          }}>
          <div className="banner__container">
                     <h1 className="banner__title" >{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h2 className = "banner__description">{truncate(movie?.overview, 150)}
                    </h2>
          </div>    
          <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
