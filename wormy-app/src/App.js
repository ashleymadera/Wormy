import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Redirect } from 'react-router-dom'
import convert from 'xml-js'
import BestSeller from './components/BestSeller';
import SearchList from './components/SearchList';
import Details from './components/Details'


function App() {

  const [input, setInput] = useState("");

  const [results, setResults] = useState([])

  // api call for book search

  const apiCall = async (e) => {
    e.preventDefault()
    const response = await axios(`https://corsanywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=ybeFDV188bV1sTPf7xemw&q=${input}`)

    console.log(response)
    const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
    console.log(JSON.parse(resJSON))
    const parseRes = JSON.parse(resJSON)

    setResults(parseRes.GoodreadsResponse.search.results.work)

    console.log(results)

    // const bookName = parseRes.GoodreadsResponse.search.results.work[0].best_book.title._text
    // console.log(bookName)

  }


  // const addPlus = string => {
  //   newKeyword = string
  // }



  // const apiCallBest = async () => {
  //   const response = await axios('https://api.nytimes.com/svc/books/v3/lists/current/{list}.json')

  //   return (response)

  // }
  // apiCallBest()



  return (
    <>
      <header>
        {/* <img src="https://imgur.com/8cIyLoo" alt="Wormy Logo" /> */}
        <h1>Wormy</h1>
      </header>

      <div>

      </div>
      <form >

        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={e => setInput(e.target.value)}
        >
        </input>
        <button onClick={apiCall}>Go</button>
      </form>

      <div>
        <h1>Daily Read</h1>
      </div>

      <div>
        <Route path='/'>
          {results.length && <Redirect to='/searchlist' />}
        </Route>


        <Route path='/searchlist'>
          <SearchList results={results} />
        </Route>

        <Route path="/Details/:index" component={Details} >
          <Details results={results} />
        </Route>


      </div>
    </>
  );
}

export default App;
