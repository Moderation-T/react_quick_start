import {createModel} from '@rematch/core';
import * as LocalStorage from '../util/localstorage';

export const login = createModel({
  state: {
    userInfo: {},
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    login(state, {user}) {
      LocalStorage.put('token', user.token);
      LocalStorage.put('userinfo', user);

      return {
        ...state,
        userInfo: user,
      };
    },
  },
  // dispatch
  effects: () => ({
    // 获取提取结果
    // async getExtractResult({ uuid, info_type }) {
    //   const response = await fetch(apiShenHu(uuid, info_type).getExtractResult).then(data => data.json());
    //   dispatch.login.login(response);
    //   return response;
    // },
  }),
});
