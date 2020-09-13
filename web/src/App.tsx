import React from 'react';
import './styles/reset.css';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from 'react-router-dom';
import Routes from './routes';
import theme from './styles/theme';
import history from './services/history';

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
