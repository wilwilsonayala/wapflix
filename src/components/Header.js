import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'white', fontSize: '20px' }}>ALURAFILX</div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="new">
          <Link to="/new">Nuevo Video</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default CustomHeader;
