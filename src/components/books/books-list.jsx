import React from 'react';
import Book from './book';
import styled from 'styled-components';
import ErrorMessage from '../error-message/error-message';

const BooksDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
  justify-content: center;
  margin-top: 20px;
  height: ${props => (props.books ? '30vh' : '0')};
`;

const BooksList = ({ books }) => {
  return (
    <BooksDiv>
      {books ? books.map(b => <Book key={b.id} book={b} />) : <ErrorMessage message="No books for this query!!" />}
    </BooksDiv>
  );
};

export default BooksList;
