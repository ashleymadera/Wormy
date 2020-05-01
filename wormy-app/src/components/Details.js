import React from 'react'
import { withRouter } from "react-router-dom"

function Details(props) {
  const results = props.results
  const index = parseInt(props.match.params.index)

  return (
    <div className='detail-box'>
      <img
        style={props.style}
        src={props.results[index].best_book.image_url._text}
        alt="book cover"
        height='155px'
        width='110px'
      />

      <div className='detail-text'>
        <h3>{props.results[index].best_book.title._text}</h3>
        <h4>{props.results[index].best_book.author.name._text}</h4>
      </div>

    </div>
  )
}



export default withRouter(Details)