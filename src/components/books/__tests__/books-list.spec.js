import { shallow } from 'enzyme';
import React from 'react';
import BooksList from '../books-list';

describe('Books lists tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BooksList books={[{ id: 'a' }, { id: 'b' }]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders error message when no books', () => {
    const wrapper = shallow(<BooksList />);
    expect(wrapper).toMatchSnapshot();
  });
});
