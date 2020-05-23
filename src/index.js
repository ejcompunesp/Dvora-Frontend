import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Nunito Sans:300,400,600,700,800,900",
      "Roboto:300,400,600,700,800",
      "Nunito:400,600,700,900",
      "Ubuntu:400,600,700",
      "Montserrat:400,600,700"
    ]
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
