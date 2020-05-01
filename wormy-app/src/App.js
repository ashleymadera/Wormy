import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, Route, Redirect } from 'react-router-dom'
import convert from 'xml-js'
import BestSeller from './components/BestSeller';
import SearchList from './components/SearchList';
import Details from './components/Details'
import WeeklyRead from './components/WeeklyRead';
import SeeMore from './components/SeeMore'
import "./App.css"


function App() {
  //States for GoodRead Api calls
  const [input, setInput] = useState('');
  const [resultsForGood, setResults] = useState([])

  //States for New York Times BestSellers list box
  const [bestList, setList] = useState([])


  //States for New York Times BestSellers Daily Read

  const [weekly, setWeekly] = useState({})

  //api call for book search

  useEffect(() => {
    const apiCallWeekly = async (e) => {
      const response = await axios('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=sJ7v7xRwG0tQ9Z3wxgHJVmvRqPeKrIea')
      setWeekly(response.data.results.lists[10].books[0])
    }
    apiCallWeekly()
  }, [])

  // api call for bestsellers

  useEffect(() => {
    const apiCallBest = async (e) => {
      const response = await axios('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=sJ7v7xRwG0tQ9Z3wxgHJVmvRqPeKrIea')
      setList(response.data.results.lists[3].books)
    }
    apiCallBest()
  }, [])

  // api call for book search

  const apiCall = async (e) => {
    e.preventDefault()
    const response = await axios(`https://corsanywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=ybeFDV188bV1sTPf7xemw&q=${input}`)
    const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
    const parseRes = JSON.parse(resJSON)
    setResults(parseRes.GoodreadsResponse.search.results.work)

  }

  return (
    <>
      <header>
        <div className='header-box'>
          <div>
            <img src='//i.imgur.com/8cIyLoo.png'
              alt='Wormy Logo'
              height='155px'
              width='110px' />
          </div>
          <div>
            <Link to='/' > <h1>Wormy</h1></Link>
          </div>
        </div>

        <Route exact path='/'>
          <div className='header-form'>
            <form >
              <input
                type='text'
                placeholder='Search'
                value={input}
                onChange={e => setInput(e.target.value)}
              >
              </input>
              <button onClick={apiCall}>Go</button>
            </form></div>
        </Route>


      </header>



      {/* Search Bar*/}


      {/* Home page components */}

      <Route exact path='/'>
        <WeeklyRead results={weekly} />
      </Route>

      <Route exact path='/'>
        <BestSeller results={bestList} />
      </Route>


      {/* Detail and redirect components */}

      <div>
        <Route
          exact path='/'>
          {resultsForGood.length && <Redirect to='/searchlist' />}
        </Route>

        <Route exact path='/searchlist'>
          <SearchList results={resultsForGood} />
        </Route>

        <Route path='/Details/:index' component={Details} >
          <Details results={resultsForGood} />
        </Route>

        <Route path='/SeeMore/:index' component={SeeMore} >
          <SeeMore results={bestList} />
        </Route>
      </div>
    </>
  );
}

export default App;
