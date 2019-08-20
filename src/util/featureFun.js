// 对查询关键字中的特殊字符进行编码
const encodeSearchKey = key => {
  const encodeArr = [
    {
      code: '%',
      encode: '%25',
    },
    // {
    //   code: '?',
    //   encode: '%3F',
    // },
    // {
    //   code: '#',
    //   encode: '%23',
    // },
    // {
    //   code: '&',
    //   encode: '%26',
    // },
    // {
    //   code: '=',
    //   encode: '%3D',
    // },
  ];
  return key.replace(/[%?#&=]/g, $ => {
    for (const k of encodeArr) {
      if (k.code === $) {
        console.log(k.encode);

        return k.encode;
      }
    }
  });
};

export {encodeSearchKey};
