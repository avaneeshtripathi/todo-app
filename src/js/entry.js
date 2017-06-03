// Import CSS
import '../css/master.sass';

// Import React and JS
// import HelloBox from './HelloBox';
import ToDoList from './ToDoList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';

const HelloBox = () => (
  <MuiThemeProvider>
    <ToDoList/>
  </MuiThemeProvider>
);

// Render!
ReactDOM.render(<HelloBox />, document.getElementsByTagName('body')[0]);
