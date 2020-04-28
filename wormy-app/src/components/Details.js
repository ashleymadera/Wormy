import React from 'react'
import { withRouter } from "react-router-dom"

function Details(props) {
  const results = props.results
  const index = parseInt(props.match.params.index)
  console.log(results[index])
  return (
    <div>

    </div>
  )
}

export default withRouter(Details)