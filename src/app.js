import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import 'normalize.css/normalize.css';

import './styles/styles.scss';

import Router from './routers/Router';


render(<Router/>, document.getElementById('app'));
