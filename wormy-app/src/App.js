import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Redirect } from 'react-router-dom'
import convert from 'xml-js'
import BestSeller from './components/BestSeller';
import SearchList from './components/SearchList';
import Details from './components/Details'
import DailyRead from './components/DailyRead';


function App() {
  //states for GoodRead Api calls
  const [input, setInput] = useState("");
  const [resultsForGood, setResults] = useState([])


  //States for NEw Yrok Times BestSellers Api
  const [bestList, setList] = useState([])

  useEffect(() => {
    const apiCallBest = async (e) => {
      const response = await axios('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=sJ7v7xRwG0tQ9Z3wxgHJVmvRqPeKrIea')
      console.log(response.data)
      setList(response.data.results.lists[3].books)
      // console.log(bestList)
    }
    apiCallBest()
  }, [])



  // api call for book search

  const apiCall = async (e) => {
    e.preventDefault()
    const response = await axios(`https://corsanywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=ybeFDV188bV1sTPf7xemw&q=${input}`)
    const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
    console.log(JSON.parse(resJSON))
    const parseRes = JSON.parse(resJSON)
    setResults(parseRes.GoodreadsResponse.search.results.work)
    console.log(resultsForGood)
  }



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



      <Route exact path='/'>
        <DailyRead />
      </Route>



      <BestSeller results={bestList} />



      <div>

        <Route exact path='/'>
          {resultsForGood.length && <Redirect to='/searchlist' />}
        </Route>


        <Route exact path='/searchlist'>
          <SearchList results={resultsForGood} />
        </Route>

        <Route path="/Details/:index" component={Details} >
          <Details results={resultsForGood} />
        </Route>


      </div>
    </>
  );
}

export default App;
