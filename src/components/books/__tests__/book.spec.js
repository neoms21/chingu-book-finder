import { shallow } from 'enzyme';
import React from 'react';
import Book from '../book';
import 'jest-styled-components';

describe('Book tests', () => {
  let defaultProps = { book: { volumeInfo: { title: 'title', authors: ['aa'] } } };

  it('book component is loaded correctly without images', () => {
    const wrapper = shallow(<Book {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('book component is loaded correctly with images', () => {
    defaultProps.book.volumeInfo.imageLinks = { thumbnail: '' };
    const wrapper = shallow(<Book {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('book component is loaded if no authors', () => {
    defaultProps.book.volumeInfo.authors = undefined;
    const wrapper = shallow(<Book {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
