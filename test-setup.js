// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
// global.window = {};
 
// if (!global.window.localStorage) {
//   global.window.localStorage = {
//     getItem() {
//       return "{}";
//     },
//     setItem() {}
//   };
// }
 