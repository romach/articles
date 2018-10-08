'use strict';

// injects 'welcome' module
import welcome from './welcome';

// import styles
import './style.css'

welcome("from 'home' module");

export {welcome};

// module.exports = { // export function to use it in html
//     welcome: welcome
// };