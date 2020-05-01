import React from 'react'

const Search = (props) =>
  (
    <div className='header-form'>
      <form style={props.style} >
        <input
          type="text"
          placeholder='Search' />
      </form></div>
  )
export default Search