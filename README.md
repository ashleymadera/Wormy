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
- _Provide a daily read_
- _List top bestsellers_
- _Link to Good read via details page_


<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Client-side routing for single page apps_ |
|       Jest       |      _JavaScript testing framework_        |


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
|__ assets/
      |__ data-tests
|__ Main.css
|__ components/
      |__ Home.js
      |__ Search.js
      |__ DailyRead.js
      |__ Best.js
      |__ SearchListjs
      |__ Details.js
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _Has link to home when on details page._       |
|   Search bar | funtional  |   n   |   n   | _For book serach by author or title_      |
| Daily Read  | functional |   n   |   y   | _ Renders one book daily read _                 |
| BestSellers | functional |   n   |   n   | _Four best sellers on the NYT list_ |
| Detail Page | functional |   n   |   y   | _ Book details and link to purchase _            |
<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Search Bar   |    H     |     8 hrs      |     8 hrs     |     TBD    |
| Bestsellers  |    H     |     6 hrs      |     6 hrs     |     TBD    |
| Homepage  Templete |     L    |     3 hrs      |     3 hrs     |     TBD    |
| Navigation   |    L     |     3 hrs      |     3 hrs     |     TBD    |
| Jest  |    H     |     12 hrs      |     12 hrs     |     TBD    |
| Book Detail Component|    H     |     6 hrs      |     6 hrs     |     TBD     |
| Daily Read |    M     |     6 hrs      |     6 hrs     |     TBD    |
| Search list   |    M     |     6 hrs      |     6 hrs     |     TBD    |
| Stylesheets |    M     |     6 hrs      |     6 hrs     |     TBD    |
| TOTAL               |          |     56 hrs      |     56 hrs     |     TBD     |

<br>

#### Helper Functions


|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| forEach| _Calls function for each element of an array_ |

<br>

### Post-MVP


- _Add a favorites list._
- _Login in to save searches and create must-reads, favorite lists._

<br>

***

## Project Delivery

### Code Showcase



### Code Issues & Resolutions

