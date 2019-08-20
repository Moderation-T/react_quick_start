import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Menu} from 'antd';
import {withRouter} from 'react-router';
import config from '../../configs/config';
import styles from './sidebar.module.css';

import data from './data.js';

// logoName
const {title, logo} = config;
const {SubMenu} = Menu;

const Sidebar = ({collapsed, history}) => {
  return (
    <div className="ant-layout-sider-children">
      <div className={styles.logo}>
        <a href="/home">
          <img src={logo} alt="logo" />
          <h1 style={{marginLeft: '10px'}}>{title}</h1>
        </a>
      </div>
      <Menu
        theme="dark"
        style={{padding: '16px 0', width: '100%'}}
        selectedKeys={[history.location.pathname]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {data.map(item => {
          if (item.children instanceof Array) {
            return (
              <SubMenu
                key={item.key}
                title={
                  <span>
                    <Icon type={item.icon} />
                    <span>{item.label}</span>
                  </span>
                }
              >
                {item.children.map(subItem => (
                  <Menu.Item key={subItem.key}>
                    <Link to={`/${subItem.url}`}>{subItem.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.key}>
                <Link to={`${item.url}`}>
                  <Icon type={item.icon} />
                  <span>{item.label}</span>
                </Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </div>
  );
};

export default withRouter(Sidebar);
