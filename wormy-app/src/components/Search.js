import React from 'react'

const Search = (props) =>
  (
    <div className='header-form'>
      <form style={props.style} >
        <input
          type="text"
          placeholder='Search'
          onChange={props.onChange}
          value={props.input}
        />
      </form></div>
  )
export default Search