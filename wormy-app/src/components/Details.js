import React from 'react'
import { withRouter } from "react-router-dom"

function Details(props) {
  const results = props.results
  const index = parseInt(props.match.params.index)
  console.log(results[index])

  return (
    <>
      <img src={props.results[index].best_book.image_url._text} alt="" />
      <h2>{props.results[index].best_book.title._text}</h2>
      <h4>{props.results[index].best_book.author.name._text}</h4>
    </>
  )
}



export default withRouter(Details)