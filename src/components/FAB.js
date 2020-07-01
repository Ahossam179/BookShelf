import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class FAB extends Component {
    render() {
        return (
            <div className="open-search">
              {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
              <Link to={"/BookShelf/search"}>Add a book</Link>
            </div>
        )
    }
}
