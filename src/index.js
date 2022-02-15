import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Contact, Service_1, Service_2, Service_3, Service_4, Service_5, Service_6, Service_7, Service_8, Service_9, NotFound } from './pages'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/service_1" element={ <Service_1 /> } />
      <Route path="/service_2" element={ <Service_2 />} />
      <Route path="/service_3" element={ <Service_3 />} />
      <Route path="/service_4" element={ <Service_4 />} />
      <Route path="/service_5" element={ <Service_5 />} />
      <Route path="/service_6" element={ <Service_6 />} />
      <Route path="/service_7" element={ <Service_7 />} />
      <Route path="/service_8" element={ <Service_8 />} />
      <Route path="/service_9" element={ <Service_9 />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="*" element={ <NotFound />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

