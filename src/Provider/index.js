import React, {
    Component
} from 'react'
export const MyContext = React.createContext();

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks: books => {
                const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
                const read = books.filter(book => book.shelf === "read");
                const wantToRead = books.filter(book => book.shelf === "wantToRead")
                this.setState({
                    books,
                    currentlyReading,
                    read,
                    wantToRead
                })
            },
            moveBook: (book, newShelf, allShelfs) => {
                debugger
                const newBooks = this.state.books.map(filteredBooks => {
                    const foundID = allShelfs[newShelf].find(
                        bookID => bookID === filteredBooks.id
                    );
                    if (foundID) {
                        filteredBooks.shelf = newShelf;
                    }
                    return filteredBooks;
                });
                this.state.addBooks(newBooks);
            }
        }
    }
    render() {
        return ( <MyContext.Provider value = {{...this.state}} > 
                    {this.props.children} 
                </MyContext.Provider>
        )
    }
}