import React from 'react'
import Card from '../Card/Card'
import './Row.scss'
const imgUrl = "https://image.tmdb.org/t/p/original"
const Row = ({title,arr=[]}) => {
  return (
    <div className='row'>
        
        <h2>{title}</h2>

        <div className="row_images">
          {arr.map((item)=>(
            <img src={`${imgUrl}/${item.poster_path}`} alt="cover" />
          ))}
        </div>
        <hr />
        <br />
        <br />
    </div>
  )
}

export default Row