import React, { useEffect, useState } from 'react'
import Row from '../Row/Row'
import axios from 'axios'
import './Home.scss'
import { Link } from 'react-router-dom'

const apiKey = "03211aa613e5a9e1750a957ac40c5905"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated"

const Home = () => {
    const [upcomingMovies,setUpcomingMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(()=>{
        const fetchUpcoming = async()=>{
            const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
            setUpcomingMovies(results);
            console.log(results);
        }
        const fetchNowPlaying = async()=>{
            const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
            setNowPlayingMovies(results)
        }
        const fetchPopular = async()=>{
            const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
            setPopularMovies(results)
        }
        const fetchTopRated = async()=>{
            const {data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
            setTopRatedMovies(results)
        }
        const getAllGenre = async()=>{
            const {data:{results}} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
           await setGenre(results)
           console.log(`genre ${results}`);
        }

        fetchUpcoming()
        fetchNowPlaying()
        fetchPopular()
        fetchTopRated()
        getAllGenre()


    },[])
  return (
    <div className='home'>
        <div className="banner"></div>
        <Row title={"Upcomming"} arr={upcomingMovies}/>
        
            <Row title={"Now Playing"} arr={nowPlayingMovies} />
            <Row title={"Popular"} arr={popularMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />
            <div className="genreBox">
                <h1>Genre</h1>
                {genre?.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                       <h1>length {item.length}</h1>
                    </Link>
                ))}
            </div>
    </div>
  )
}

export default Home