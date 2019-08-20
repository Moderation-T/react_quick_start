import React, {useState} from 'react';

import {Route} from 'react-router-dom';
import PrivateRoute from '../privateRoute';
import {view as Header} from '../components/header';
import {view as Sidebar} from '../components/sidebar';
import DataBrowser from './container/DataBrowser';
import styles from './home.module.css';
import config from '../configs/config';

const {isLogin} = config;

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 80 : 256;
  const sidebarStyle = {
    flex: `0 0 ${sidebarWidth}px`,
    width: `${sidebarWidth}px`,
  };

  return (
    <div className="ant-layout ant-layout-has-sider">
      <div style={sidebarStyle} className="ant-layout-sider ant-layout-sider-dark">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className={`${styles['content-wrapper']} ant-layout`}>
        <div className={`${styles.header} ant-layout-header`}>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <div className={`${styles.content} ant-layout-content`}>
          {/* 二级路由 */}
          {isLogin ? (
            <PrivateRoute exact path="/home/browser" component={DataBrowser} />
          ) : (
            <Route exact path="/home/browser" component={DataBrowser} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
