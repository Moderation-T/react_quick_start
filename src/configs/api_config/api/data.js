import config from '../../config';

const {API_BASE_URL} = config;

export function apiData() {
  return {
    // 表格数据
    getData: `${API_BASE_URL}/getdata`,
  };
}
