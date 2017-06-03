// Import React and HelloText class
import React, {Component} from 'react';
import HelloText from './HelloText';

var HelloBox = React.createClass({

  render() {
      return
      <MuiThemeProvider>
        <div>
            <HelloText/>
        </div>
      </MuiThemeProvider>
  }

});

// export default HelloBox ;
