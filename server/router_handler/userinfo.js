import db from "../db/index.js"

// 发送验证码的处理函数
export const sendVerifyCode = (req, res) => {
    let result = []
    let arr = req.params.phoneNumber.split('')
    while (result.length < 4) {
        const randomIndex = Math.floor(Math.random() * arr.length)
        result.push(arr[randomIndex] * 3 % 5)
    }
    res.send(result.join(''))
}

// 发送用户信息的处理函数
export const getUserInfo = (req, res) => {
    let {
        username
    } = req.body

    // 2.根据用户名查询用户的数据
    const sql = `select * from ev_users where username=?`
    db.query(sql, username, function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.send({
                status: 1,
                message: err.message
            })
        }
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) {
            return res.send({
                status: 1,
                message: '登录失败'
            })
        }
        res.send(results)
    })
}

// 搜索模块的数据处理函数
export const getSearchInfo = (req, res) => {
    let {
        keyword,
        order
    } = req.body
    // 根据 keyword 对数据进行检索
    // 商品标题 商品价格
    let result
    let searchList = {
        status: 0,
        "小米": {
            id: 0,
            title: "小米",
            price: 123

        },
        "华为": {
            id: 1,
            title: "华为",
            price: 222

        },
        "苹果": {
            id: 2,
            title: "苹果",
            price: 333

        }
    }

    if (keyword) {
        result = searchList[keyword]
    }
    res.send(result)
}