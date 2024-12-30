import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', color: 'white', backgroundColor: '#001529' }}>
      ALURAFILX ©2024
    </Footer>
  );
};

export default CustomFooter;