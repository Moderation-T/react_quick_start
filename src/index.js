import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { LocaleProvider } from 'antd';
import moment from 'moment';
import createLoadingPlugin from '@rematch/loading';

import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import "./configs/style.less";
import './assets/css/common.css';

import * as models from './models';
import App from './App';

moment.locale('zh-cn');

const loadingPlugin = createLoadingPlugin({ models });

const store = init({
  models,
  plugins: [loadingPlugin],
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={zh_CN}>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
