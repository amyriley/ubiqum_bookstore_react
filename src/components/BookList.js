import React, { Component } from "react";
import OneBook from "../components/OneBook";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    if (this.props.filteredBooks.length === 0) {
      return (
        <div>
          {this.props.books.map(book => (
            <OneBook
              key={book.titulo}
              title={book.titulo}
              img={book.portada}
              description={book.descripcion}
            />
          ))}
        </div>
      );
    }

    return (
      <div>
        {this.props.filteredBooks.map(book => (
          <OneBook
            key={book.titulo}
            title={book.titulo}
            img={book.portada}
            description={book.descripcion}
          />
        ))}
      </div>
    );
  }
}

export default BookList;
