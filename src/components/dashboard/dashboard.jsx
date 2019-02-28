import React, { Component } from 'react';
import { SearchBar } from '../search-bar';
import styled from 'styled-components';
import axios from 'axios';
import BooksList from '../books/books-list';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error-message/error-message';
import { API_REQUEST_TIMEOUT } from '../../utils/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function timeout(timeout, promise) {
  return new Promise(async function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('timeout'));
    }, timeout);
    promise.then(resolve, reject);
  });
}

class Dashbaord extends Component {
  state = { books: [] };

  fetchBooks = async query => {
    this.setState({ isLoading: true, errorMessage: '', books: [] });
    try {
      const result = await timeout(
        API_REQUEST_TIMEOUT,
        axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&fields=items/id,items/volumeInfo&startIndex=0`
        )
      );

      this.setState({
        books: result.data.items,
        isLoading: false,
      });
    } catch (e) {
      this.setState({ errorMessage: 'oops something went wrong!!, please try again later', isLoading: false });
    }
  };

  render() {
    return (
      <Container>
        <SearchBar handleClick={this.fetchBooks} />
        {this.state.isLoading ? <Spinner /> : <BooksList books={this.state.books} />}
        {this.state.errorMessage && <ErrorMessage message={this.state.errorMessage} />}
      </Container>
    );
  }
}

export default Dashbaord;
