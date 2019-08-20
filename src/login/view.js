import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {message} from 'antd';

import * as LocalStorage from '../util/localstorage';
import config from '../configs/config';

const {title} = config;

class view extends Component {
  componentDidMount() {
    this.renderForm();
  }

  renderForm = () => {
    const {AuthingForm} = window;
    const {login, history} = this.props;
    const form = new AuthingForm({
      // 必填，client ID
      clientId: '5d246a7aec626c3d6586cb27',
      // 必填，timestamp
      timestamp: Math.round(new Date() / 1000),
      // 必填，nonce
      nonce: Math.ceil(Math.random() * 10 ** 6),
      mountId: 'root',
      hideRegister: true,
      hideOAuth: true,
      hideClose: true,
      hideQRCode: true,
      title,
    });

    form.on('login', user => {
      LocalStorage.remove('token');
      LocalStorage.remove('userinfo');

      login({user, props: this.props}).then(() => {
        form.hide();
        history.push(`/home`);
      });
    });

    form.on('loginError', error => {
      message.error(error.message.message);
    });
  };

  render() {
    return null;
  }
}

const mapState = state => ({
  login: state.login,
});

const mapDispatch = dispatch => ({
  login: payload => dispatch.login.login(payload),
});

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(view)
);
