import React from 'react'
import { Link, Redirect, withRouter } from "react-router-dom";

function SeeMore(props) {
  const results = props.results
  const index = parseInt(props.match.params.index)
  console.log(results[index])


  return (
    <div className='more-box'>

      <img
        src={props.results[index].book_image}
        alt="book cover"
        height='185px'
        width='140px'
      />


      <div className='more-text'>
        <h3>{props.results[index].title}</h3>
        <h4>{props.results[index].author}</h4>
        <p>{props.results[index].description}</p>

        <h3>How to purchase</h3>

        <div className='buyTag'>
          <a className='aTag' href={props.results[index].buy_links[0].url} >Amazon</a>
          <a className='aTag' href={props.results[index].buy_links[1].url} >Apple Books</a>
          <a className='aTag' href={props.results[index].buy_links[2].url} >Barnes and Noble</a>
        </div>

      </div>


    </div>
  )
}

export default withRouter(SeeMore)