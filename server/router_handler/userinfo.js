import db from "../db/index.js";

// 发送验证码的处理函数
export const sendVerifyCode = (req, res) => {
  let result = [];
  let arr = req.params.phoneNumber.split("");
  while (result.length < 4) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push((arr[randomIndex] * 3) % 5);
  }
  res.send(result.join(""));
};

// 发送用户信息的处理函数
export const getUserInfo = (req, res) => {
  let { username } = req.body;

  // 2.根据用户名查询用户的数据
  const sql = `select * from ev_users where username=?`;
  db.query(sql, username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.send({
        status: 1,
        message: err.message,
      });
    }
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) {
      return res.send({
        status: 1,
        message: "登录失败",
      });
    }
    res.send(results);
  });
};

// 搜索模块的数据处理函数
export const getSearchInfo = (req, res) => {
  let { keyword, order } = req.body;
  // 根据 keyword 对数据进行检索
  // 商品标题 商品价格
  let result;
  let searchList = {
    status: 0,
    小米: {
      id: 0,
      title: "小米",
      price: 123,
    },
    华为: {
      id: 1,
      title: "华为",
      price: 222,
    },
    苹果: {
      id: 2,
      title: "苹果",
      price: 333,
    },
  };

  if (keyword) {
    result = searchList[keyword];
  }
  res.send(result);
};

// 初始化 cartList
let cartList = [
  {
    skuName: "小米",
    skuPrice: 1111,
    skuNum: 1000,
    imgUrl: "http://127.0.0.1:3007/goods1.png",
    isChecked: 0,
  },
  {
    skuName: "华为",
    skuPrice: 4444,
    skuNum: 1000,
    imgUrl: "http://127.0.0.1:3007/goods1.png",
    isChecked: 0,
  },
  {
    skuName: "苹果",
    skuPrice: 3333,
    skuNum: 1000,
    imgUrl: "http://127.0.0.1:3007/goods1.png",
    isChecked: 0,
  },
  {
    skuName: "红米米",
    skuPrice: 2222,
    skuNum: 1000,
    imgUrl: "http://127.0.0.1:3007/goods1.png",
    isChecked: 0,
  },
];
export const getCartList = (req, res) => {
  res.send(cartList);
};

export const checkCart = (req, res) => {
  let { skuName, isChecked } = req.params;
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].skuName === skuName) {
      cartList[i].isChecked = isChecked;
    }
  }
  res.send(cartList);
};

export const addToCart = (req, res) => {
  let { skuName, skuNum } = req.params;
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].skuName === skuName) {
      switch (skuNum) {
        case "1":
          cartList[i].skuNum += 1;
          break;
        case "-1":
          cartList[i].skuNum -= 1;
          break;
        case "0":
          cartList[i].skuNum = cartList[i].skuNum;
          break;
        default:
          cartList[i].skuNum = Number(skuNum);
      }
    }
  }
  res.send(cartList);
};

export const deleteCart = (req, res) => {
  let { skuName } = req.params;
  cartList = cartList.filter((item) => item.skuName !== skuName);
  res.send(cartList);
};

export const getUserAddress = (req, res) => {
  let addressList = [
    {
      id: 0,
      username: "张三",
      isDefault: "0",
      consignee: "hhh",
      fullAddress: "北京市昌平区宏福科技园综合楼6层",
      phoneNum: "15010658793",
    },
    {
      id: 1,
      username: "李四",
      isDefault: "0",
      consignee: "hhh",
      fullAddress: "北京市昌平区宏福科技园综合楼6层",
      phoneNum: "13590909098",
    },
    {
      id: 2,
      username: "王五",
      isDefault: "1",
      consignee: "北京市昌平区宏福科技园综合楼6层",
      fullAddress: "北京市昌平区宏福科技园综合楼6层",
      phoneNum: "13590909098",
    },
  ];
  res.send(addressList);
};

export const getOrderInfo = (req, res) => {
  let ranDamId = Math.floor(Math.random() * 9);
  let orderInfo = {
    orderId: ranDamId,
    detailArrayList: [
      {
        imgUrl: "http://127.0.0.1:3007/trade/goods.png",
        skuName:
          "Apple iPhone 6s (A1700) 64G 玫瑰金色 移动联通电信4G手机硅胶透明防摔软壳 本色系列",
        skuId: "0",
        orderPrice: 123,
        skuNum: 1111,
      },
      {
        imgUrl: "http://127.0.0.1:3007/trade/goods.png",
        skuName:
          "Apple iPhone 6s (A1700) 64G 玫瑰金色 移动联通电信4G手机硅胶透明防摔软壳 本色系列",
        skuId: "1",
        orderPrice: 123,
        skuNum: 1111,
      },
    ],
  };
  res.send(orderInfo);
};

export const submitOrder = (req, res) => {
  let orderId = Math.floor(Math.random() * 9);
  res.send({
    code: 200,
    tradNo: orderId,
  });
};

export const getPayInfo = (req, res) => {
  let data = {
    code: 200,
    data: {
      totalFee: 9999,
      codeUrl: "http://127.0.0.1:3007/trade/goods.png",
    },
  };
  res.send(data);
};

export const getStatus = (req, res) => {
  let result = {
    code: 200,
  };
  res.send(result);
};

export const getMyOrder = (req, res) => {
  let data = {
    code: 200,
    data: {
      hhh: "test",
    },
  };
  res.send(data);
};

export const getItem = (req, res) => {
  let data = {
    code: 200,
    data: {
      "hhh":{
        
      },
      "jjj":"test"
    }
  }
  res.send(data)
};
