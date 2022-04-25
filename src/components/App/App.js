// import logo from '../../logo.svg';
// import './App.css';
// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;



import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Categories from '../Categories/categories';
import Books from '../Books/BookList/books';
import Header from '../Header/header';
import BooksAdd from '../Books/BooksAdd/booksAdd';
import libraryService from "../../repository/libraryRepository";
import BooksEdit from "../Books/BooksEdit/booksEdit";
import SelectedBook from "../Books/SelectedBook/selectedBook";
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books:[],
            categories: [],
            authors:[],
            selectedBook:{}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>
                        <Route path={"/books/add"} exact render={() =>
                            <BooksAdd categories={this.state.categories}
                                      authors={this.state.authors}
                                        onAddBook={this.addBook}/>}/>
                        <Route path={"/books/edit/:id"} exact render={() =>
                            <BooksEdit categories={this.state.categories}
                                         onEditBook={this.editBook}
                                         authors={this.state.authors}
                                         book={this.state.selectedBook}/>}/>
                        <Route path={"/selectedbook"} exact render={() =>
                            <SelectedBook
                                onEdit={this.getEditBook}
                                book={this.state.selectedBook}/>}/>
                        <Route path={["/books","/"]} exact render={() =>
                            <Books books={this.state.books}
                                      onDelete={this.deleteBook}
                                      onMarkAsTaken={this.markAsTaken}
                                      onEdit={this.getEditBook}
                                      />}/>
                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.allAuthors();
    }

    loadBooks = () => {
        libraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCategories = () => {
        libraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }
    allAuthors = () => {
        libraryService.getAllAuthors()
            .then((data) => {
                this.setState({
                    authors:data.data
                })
            });
    }
    getAddBook = () => {
        libraryService.getAddPage()
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            });
    }
    getEditBook = (id) => {
        libraryService.getEditPage(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            });
    }
    deleteBook = (id) => {
        libraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name, category, authorId,availableCopies) => {
        libraryService.addBook(name, category, authorId,availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    markAsTaken = (id) => {
        libraryService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }
    editBook = (id, name, category, newAuthorId,availableCopies) => {
        libraryService.editBook(id, name, category, newAuthorId,availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
}

export default App;

