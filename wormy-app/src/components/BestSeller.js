import React, { useEffect } from 'react'
import axios from 'axios'
// import { withRouter, Link } from "react-router-dom"
function BestSeller(props) {


  return (
    <>

      <h1>New York Times Best BestSeller</h1>
      {props.results.map((result) =>
        <div>
          <h3>{result.title}</h3>
          <img src={result.book_image} />
        </div>


      )}

    </>


  )

}
export default BestSeller