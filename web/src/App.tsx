import React from 'react';
import Routes from './routes';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return(
    <div className="App">
          <ToastContainer />
         <Routes />
    </div>
    );
}

export default App;
