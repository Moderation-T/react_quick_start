import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as LocalStorage from './util/localstorage';

import { view as Login } from './login';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 是否有权限 有 true 没有false
      isAuthenticated: !!LocalStorage.get('token'),
    };
  }

  componentWillMount() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) {
      const { history } = this.props;
      setTimeout(() => {
        history.replace('/login');
      }, 1000);
    } else {
      const user = LocalStorage.get('userinfo');
      const tokenExpiredAt = new Date(user.tokenExpiredAt).getTime(); // 过期时间
      const now = new Date().getTime(); // 现在时间

      if (now >= tokenExpiredAt) {
        // 过期了
        const { history } = this.props;
        setTimeout(() => {
          history.replace('/login');
        }, 1000);
      } else {
        // 没过期
        console.log('没过期');
      }
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthenticated } = this.state;

    return isAuthenticated ? <Route {...rest} render={props => <Component {...props} />} /> : <Login />;
  }
}

export default withRouter(PrivateRoute);
