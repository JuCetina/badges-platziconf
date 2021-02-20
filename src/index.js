import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import Badge from './components/Badge';

const root = document.getElementById('root');

ReactDOM.render(<Badge avatarUrl="https://picsum.photos/200" firstName="Juan" lastName="Pérez" jobTitle="Web developer" twitter="cetiju"/>, root);


