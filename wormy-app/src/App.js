import React from 'react';

import { useEffect } from 'react'
import axios from 'axios'


function App() {


  useEffect(() => {
    const apiCall = async () => {
      const response = await axios('https://www.goodreads.com/search.xml?key=ybeFDV188bV1sTPf7xemw&q=Ender%27s+Game')
      // would be
      console.log(response)
      // updateParks(listOfParks)
    }
    apiCall()
  }, [])




  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
