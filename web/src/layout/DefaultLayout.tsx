import React from 'react';
import Container from '@material-ui/core/Container';
import TopBar from '../components/TopBar';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <>{children}</>
      </Container>
    </>
  );
};

export default DefaultLayout;
