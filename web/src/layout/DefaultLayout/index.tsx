import React from 'react';
import SideBar from '../../components/SideBar';

import { WrapperContent } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <WrapperContent>
        <SideBar />
        {children}
      </WrapperContent>
    </>
  );
};

export default DefaultLayout;
