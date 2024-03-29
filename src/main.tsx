import { Flowbite } from 'flowbite-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';

import './index.css';


const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Flowbite>
    <Provider store={store}>
      <App />
    </Provider>
  </Flowbite>,
);
