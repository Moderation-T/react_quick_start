// 一只鱼
import yizhiyu from '../assets/images/yizhiyu.jpeg';
// 愚唐杂记
import yutangzaji from '../assets/images/yutangzaji.jpg';

const logoNames = {
  yizhiyu,
  yutangzaji,
};

export default {
  // 后端 API 设置
  API_BASE_URL: '',
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
