import React from 'react'
import { Link } from "react-router-dom";

function DailyRead(props, index) {
  return (

    <div className='weekly-main'>
      <h1>Weekly Read</h1>
      <div className='weekly-details'>
        <img
          src={props.results.book_image}
          height='155px'
          width='110px' />

        <div className='weekly-text'>
          <h3>{props.results.title}</h3>
          <p>{props.results.description}</p>

        </div>
      </div>

    </div>
  )
}


export default DailyRead