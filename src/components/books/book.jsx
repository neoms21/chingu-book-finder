import React from 'react';
import styled from 'styled-components';

import noImg from '../../assets/images/no-img.jpg';
import { Icon } from 'semantic-ui-react';

const BookDiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1vh;
  width: 40vh;
  border: solid 1px grey;
  margin: 5px;
  background: #c8f7c5;
  border-radius: 8px;
`;

const Img = styled.img`
  height: 192px;
  width: 128px;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 16px;
  align-items: flex-start;
  height: 90%;
`;

const H4 = styled.h4`
  text-align: left;
`;

const Authors = styled.div`
  flex: 1;
`;

const RatingsDiv = styled.div`
  display: flex;
`;

const Rating = styled.span`
  flex: 1;
`;

const Book = ({ book }) => {
  const { title, authors, imageLinks, averageRating, previewLink } = book.volumeInfo;

  return (
    <BookDiv>
      <Img src={imageLinks ? imageLinks.thumbnail : noImg} alt={title} />

      <BookDetails>
        <H4>{title}</H4>

        {authors && (
          <Authors>
            {authors.map(a => (
              <span key={a}>{a}</span>
            ))}
          </Authors>
        )}

        <RatingsDiv>
          <Rating>
            {averageRating} <i className="icon star" />
          </Rating>

          <a href={previewLink}>
            <Icon name="external alternate" />
          </a>
        </RatingsDiv>
      </BookDetails>
    </BookDiv>
  );
};

export default Book;
