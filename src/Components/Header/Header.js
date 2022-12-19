import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import './Header.scss'

const Header = () => {
    const navigate = useNavigate()
  return (
    <nav className='header'>
        <img onClick={()=>navigate('/')} src="https://img.freepik.com/premium-vector/film-camera-logo_7108-42.jpg?w=2000" alt="" />
        <Link to='/tvshows'>Tv Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/recent'>Recently Added</Link>
        <Link to='/mylist'>My List</Link>
        <ImSearch/>
    </nav>
  )
}

export default Header