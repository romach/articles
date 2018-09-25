'use strict';

// injects 'welcome' module
let welcome = require('./welcome');

welcome("home");

exports.welcome = welcome; // export function to use it in html