import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Service_1 from './pages/Service_1';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/service_1" element={ <Service_1/> } />
      <Route path="*" element={ <NotFound />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

