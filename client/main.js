'use strict'

import React from 'react';
import { Render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Root from '../components/Root';

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
)
