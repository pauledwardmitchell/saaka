import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';

import ProgramsShow from './ProgramsShow'


ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
      <ProgramsShow />
  </React.Fragment>,
  document.getElementById('programs')
);
