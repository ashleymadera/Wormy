![gif](https://media.giphy.com/media/VgNctFELbNwdTNMWRs/giphy.gif)


# Wormy

# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


### Overview

_**Wormy** is a bookworms best friend. Search for Hundreds of titles, receive daily book suggestions, and view top bestsellers. Find your next imaginative adventure through Wormy._

<br>

### Wireframes


![Mobile](https://i.imgur.com/jUEO5Jr.png)

- Mobile View

![iPad](https://i.imgur.com/Gy2k3sz.png)

- iPad View Body

![Desktop](https://i.imgur.com/sQLzXYr.png)

- Desktop View


<br>

### MVP

**Wormy** MVP Wil be the sigle-page app that allows avid readers to find new book suggestion and connect by search to hundreds of titles. It is compatible to mobile, iPad and desktops view

<br>

#### Goals

- _Search by title or author_
- _Provide a Weekly read_
- _List New York Times top bestsellers_
- _Link to Amazon, Apple Books, and Barnes and Noble via See more page_


<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Client-side routing for single page apps_ |
|    StoryBook    |  _User interface development environment_  |


<br>

#### Data



|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
|Good Read| yes | _https://www.goodreads.com/api/documentation_ | _https://www.goodreads.com/search.xml?key=ybeFDV188bV1sTPf7xemw&q=Ender%27s+Game_ |
|New York Times| yes | _https://developer.nytimes.com/?it=a_ | _https://api.nytimes.com/svc/books/v3/lists/overview/.json?api-key=sJ7v7xRwG0tQ9Z3wxgHJVmvRqPeKrIea_ |


<br>

#### Component Hierarchy



```
src
|__ App.js
|__ App.css
   |__ components/
      |__ Background.js
      |__ Background.stories.js
      |__ BestSeller.js
      |__ BestSeller.stories.js
      |__ Buttons.js
      |__ Buttons.stories.js
      |__ Details.js
      |__ Footer.js
      |__ Footer.stories.js
      |__ Search.js
      |__ Search.stories.js
      |__ Searchlist.js
      |__ SeeMore.js
      |__ WeeklyRead.js
      
              
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  Search List | functional |   n   |   n   | _Container for search reseult with links for details_         |
|  Header | functional |   n   |   n   | _Wormy logo and link to home when on details page._       |
|  Search bar | funtional  |   n   |   n   | _ For book serach by author or title_      |
| Weeklty Read  | functional |   n   |   y   | _ Renders one book weekly read as a recommendation _           |
| BestSellers | functional |   n   |   n   | _Five best sellers on the NYT list_ |
| Detail | functional |   n   |   y   | _ Book details from search list_    |
| See More | functional |   n   |   y   | _ Book details from BestSellers list_    |
<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Search Bar   |    H     |     4 hrs      |     2 hrs     |     2 hrs     |
|   Api Calls |    H     |     8 hrs      |     6 hrs     |     6 hrs     |
| Bestsellers  |    H     |     6 hrs      |     4 hrs     |     4 hrs    |
| Homepage  Templete |     L    |     3 hrs      |     4 hrs     |     4 hrs    |
| Navigation   |    L     |     3 hrs      |     5 hrs     |     5 hrs    |
| Storybook |    H     |     6 hrs      |     5 hrs     |     5hrs    |
| Book Detail Component|    H     |     6 hrs      |     6 hrs     |     6 hrs      |
| See More Component|    H     |     6 hrs      |     4 hrs     |     4 hrs      |
| Weekly Read |    M     |     6 hrs      |     5 hrs     |    5 hrs    |
| Search list   |    M     |     6 hrs      |     6 hrs     |    6 hrs    |
| Stylesheets |    M     |     6 hrs      |     6 hrs     |    6hrs     |
| TOTAL               |          |     60 hrs      |     54 hrs     |    54 hrs     |

<br>

#### Helper Functions


|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Map| _ creates an array by calling a specific function on each element present in the parent array._ |

<br>

### Post-MVP


- _Add a favorites list._
- _Login in to save searches and create must-reads, favorite lists._
- _Add  descriptions to search list items with second Good Read api call._

<br>

***

## Project Delivery

### Code Showcase
```

  const apiCall = async (e) => {
    e.preventDefault()
    const response = await axios(`https://corsanywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=ybeFDV188bV1sTPf7xemw&q=${input}`)
    const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
    const parseRes = JSON.parse(resJSON)
    console.log(parseRes.GoodreadsResponse.search.results.work)
    setResults(parseRes.GoodreadsResponse.search.results.work)


  }
  ```


### Code Issues & Resolutions

-I could not find an API to make Daily recommendations for I use NYT's weekly list to generate a weekly recommendation

-Good Read ap call search method does not provide book descriptions. Will try implementing an second api call set off by the click of the search result index.

