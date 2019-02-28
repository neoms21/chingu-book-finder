import { shallow } from 'enzyme';
import axios from 'axios';
import React from 'react';
import Dashbaord from '../dashboard';
import * as constants from '../../../utils/constants';

describe('Dashboard tests', () => {
  it('should fire the request for fetching books', done => {
    const wrapper = shallow(<Dashbaord />);
    axios.get = jest.fn().mockResolvedValue({ data: { items: [{ id: '1' }, { id: '2' }] } });
    const searchBar = wrapper.find('SearchBar');

    searchBar.props().handleClick();

    setTimeout(() => {
      expect(wrapper.state().books).toEqual([{ id: '1' }, { id: '2' }]);
      done();
    }, 100);
  });

  it('should timeout the request if goes above timeout', done => {
    constants.API_REQUEST_TIMEOUT = 5;
    const wrapper = shallow(<Dashbaord />);
    axios.get = jest.fn().mockImplementation(() => {
      return new Promise(function(resolve) {
        setTimeout(() => {
          resolve([]);
        }, 20);
      });
    });
    const searchBar = wrapper.find('SearchBar');

    searchBar.props().handleClick();

    setTimeout(() => {
      expect(wrapper.state().errorMessage).toEqual('oops something went wrong!!, please try again later');
      done();
    }, 100);
  });
});
