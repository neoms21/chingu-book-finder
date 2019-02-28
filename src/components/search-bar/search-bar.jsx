import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import ErrorMessage from '../error-message/error-message';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv = styled.div`
  &&& {
    width: 80%;
    margin-top: 20px;
  }
`;
const StyledButton = styled(Button)`
  &&& {
    margin-left: 1em;
  }
`;

const CloseIcon = styled(Icon)`
  &&& {
    position: absolute;
    right: 110px;
    margin-top: 10px;
  }
`;

const SearchBar = ({ handleClick }) => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(false);

  return (
    <ContainerDiv>
      <StyledDiv className={`ui icon input ${error ? 'error' : ''}`}>
        <input
          type="text"
          value={searchText}
          placeholder="Search for a book here..."
          onChange={e => {
            setSearchText(e.target.value);
            setError(false);
          }}
        />

        {searchText && (
          <div
            onClick={() => {
              setSearchText('');
            }}
          >
            <CloseIcon aria-hidden="true" className="close link icon red" />
          </div>
        )}
        <StyledButton
          positive
          onClick={() => {
            if (!searchText) {
              setError(true);
              return;
            }
            handleClick(searchText);
          }}
        >
          Search
        </StyledButton>
      </StyledDiv>

      {error && <ErrorMessage message="Please enter search text" />}
    </ContainerDiv>
  );
};

export default SearchBar;
