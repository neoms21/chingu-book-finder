import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SearchBar from '../search-bar';

describe('Book tests', () => {
  let defaultProps = {};
  it('book component is loaded correctly', () => {
    const wrapper = shallow(<SearchBar {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show close icon when text is entered', () => {
    const wrapper = mount(<SearchBar />);
    let icon = wrapper.find('i');
    expect(icon.length).toEqual(0);
    const searchInput = wrapper.find('input');

    searchInput.simulate('change', { target: { value: 'abcd' } });

    icon = wrapper.find('i');
    expect(icon.length).toEqual(1);
    icon.simulate('click');
  });

  it('should show error message if button is clicked without search text', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<SearchBar handleClick={clickMock} />);
    const searchInput = wrapper.find('input');

    searchInput.simulate('change', { target: { value: 'abcd' } });

    let submit = wrapper.find('button');

    submit.simulate('click');
    let errorMessage = wrapper.find('div.negative');
    expect(clickMock).toHaveBeenCalledWith('abcd');
    expect(errorMessage.length).toEqual(0);
  });

  it('should call click with entered text', () => {
    const clickMock = jest.fn().mockImplementation(() => {
      console.log('in mock');
    });
    const wrapper = mount(<SearchBar handleClick={clickMock} />);
    let submit = wrapper.find('button');

    submit.simulate('click');
    let errorMessage = wrapper.find('div.negative');
    expect(clickMock).not.toHaveBeenCalled();
    expect(errorMessage.length).toEqual(1);
  });
});
