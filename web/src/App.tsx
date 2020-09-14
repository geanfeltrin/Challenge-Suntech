import React from 'react';
import * as dotenv from 'dotenv';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/global';

dotenv.config();
const App: React.FC = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </>
  );
};

export default App;
