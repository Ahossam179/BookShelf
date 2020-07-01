import React from 'react'
import './App.css'
import {Switch,Route} from "react-router-dom"
import Home from './Views/Home';
import Search from './Views/Search';
import Provider,{MyContext} from './Provider'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <Provider>
      <Switch>
        <Route
         exact path = {"/BookShelf"}
         render={()=>(
         <MyContext.Consumer>
         {context => <Home {...context}/>}
         </MyContext.Consumer>
         )}
         />


        <Route exact path = {"/BookShelf/search"} component = {Search} />
      </Switch>
      </Provider>
      </div>      
    ) 
  }
}
export default BooksApp
