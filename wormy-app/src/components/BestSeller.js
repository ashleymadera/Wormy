import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

// import { withRouter, Link } from "react-router-dom"
function BestSeller(props) {


  return (
    <>

      <h1>New York Times Best BestSeller</h1>
      {props.results.map((result, index) =>
        <div>
          <Link to={`/SeeMore/${index}`}>
            <img
              src={result.book_image}
              height='155px'
              width='110px' />
          </Link>


        </div>


      )}

    </>


  )

}
export default BestSeller