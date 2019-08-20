import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Icon, Dropdown, Menu} from 'antd';
import {connect} from 'react-redux';
import * as LocalStorage from '../../util/localstorage';
import styles from './header.module.css';
import config from '../../configs/config';

const {isLogin} = config;

class Header extends Component {
  logout = () => {
    const {history} = this.props;
    LocalStorage.remove('token');
    LocalStorage.remove('userinfo');
    history.push('/login');
  };

  render() {
    const {collapsed, setCollapsed} = this.props;
    const user = LocalStorage.get('userinfo');

    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={this.logout}>退出登录</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={styles['header-wrapper']}>
        <span className={styles['header-collapsed']} onClick={() => setCollapsed(!collapsed)}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>

        <div className={styles['header-user']}>
          {isLogin ? (
            <Dropdown overlay={menu} placement="bottomCenter">
              <span className="login">
                <span style={{color: '#001529'}}>
                  <Icon type="user" />
                  {isLogin ? user.username || '' : ''}
                </span>
              </span>
            </Dropdown>
          ) : (
            <span className="login">
              <span style={{color: '#001529'}}>
                <Icon type="user" />
                {isLogin ? user.username || '' : ''}
              </span>
            </span>
          )}
        </div>
      </div>
    );
  }
}

// const mapState = state => {
//   return {
//     shenhu: state.shenhu,
//   };
// };

// const mapDispatch = dispatch => ({
//   getTableData: payload => dispatch.shenhu.getTableData(payload),
// });

export default withRouter(
  connect()(Header)
  // mapState,
  // mapDispatch
);
