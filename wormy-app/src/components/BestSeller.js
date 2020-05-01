import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';


function BestSeller(props) {

  return (
    <div
      style={props.style}
      className='seller-main'>
      <h1  >New York Times Best BestSeller</h1>

      <div className='seller-imgs'>
        {props.results.map((result, index) =>
          <div className='seller-image'>
            <Link to={`/SeeMore/${index}`}>
              <img
                src={result.book_image}
                height='155px'
                width='110px' />
            </Link>
          </div>
        )}
      </div>

    </div >
  )
}

export default BestSeller