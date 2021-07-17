import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { initialState, reducer } from './reducer';
import { StateProvider } from './StateProvider';



ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,

  document.getElementById('root')
);
