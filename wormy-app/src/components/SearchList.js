import React from 'react'
import { Link } from "react-router-dom";
import { Details } from './Details'


function SearchList(props) {

  return (

    <div className='searchlist'>
      {props.results.map((result, index) =>
        <div className='list-items'>
          <img
            src={result.best_book.small_image_url._text}
            height='170px'
            width='125px'
          />
          <Link to={`/Details/${index}`} >
            <h3 className="search-h3">{result.best_book.title._text}</h3></Link>
        </div>
      )}

    </div>



  )
}

export default SearchList