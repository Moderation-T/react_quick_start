# 愚唐杂记

自用 react 项目快速启动工具

## 技术栈

react + antd(UI 框架) + rematch(状态管理) + react-router(路由)

## Installation

```

yarn install
yarn start
```

## Config

- 配置文件
  `src/configs/config`

```

  // 后端 API 设置
  API_BASE_URL: 'http://39.97.229.21/api',
  // 是否有启用登录
  isLogin: false,
  // 是否启用重定向
  isRedirect: true,
  // 设置系统名称
  title: '愚唐杂记',
  // logo修改
  logo: logoNames.yutangzaji,
  // 是否显示小扳手
  showInfotypes: true,
};

```

- 更改主题色
  `src/configs/style.less`

```
@import '~antd/lib/style/themes/default.less';

 // 主题色配置
@primary-color: #f05a23;

@import '~antd/lib/style/core/index.less';
@import '~antd/lib/style/components.less';

```
