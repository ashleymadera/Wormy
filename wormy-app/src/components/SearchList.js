import React from 'react'
import { Link } from "react-router-dom";
import { Details } from './Details'


function SearchList(props) {

  // const bookName = parseRes.GoodreadsResponse.search.results.work[0].best_book.title.text
  return (

    <>
      {props.results.map((result, index) =>
        <div>
          <img
            src={result.best_book.small_image_url._text}
          />
          <Link to={`/Details/${index}`} >
            <h2>{result.best_book.title._text}</h2></Link>
        </div>


      )}
    </>


  )
}

export default SearchList