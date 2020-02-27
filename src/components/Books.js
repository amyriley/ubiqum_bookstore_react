import React, { Component } from "react";
import BookList from "../components/BookList";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filteredBooks: []
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
    this.filterBooks(e.target.value);
  };

  filterBooks = searchTerm => {
    let filteredBooks = this.state.books;
    filteredBooks = filteredBooks.filter(book => {
      let bookTitle = book.titulo.toLowerCase();
      return bookTitle.includes(searchTerm.toLowerCase());
    });
    this.setState({
      filteredBooks
    });
    console.log(filteredBooks);
  };

  render() {
    return (
      <div>
        <h1>Bookstore</h1>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </div>
        <BookList
          books={this.state.books}
          filteredBooks={this.state.filteredBooks}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://api.myjson.com/bins/udbm5")
      .then(results => results.json())
      .then(result => this.setState({ books: result.books }))
      .then(r => console.log(this.state))
      .catch(e => console.log(e));
  };
}
