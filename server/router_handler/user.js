/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
import db from "../db/index.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import jwtSecretKey from '../config.js'



// 注册用户的处理函数
export const regUser = (req, res) => {
    // 1.检测表单数据是否合法
    let {
        username,
        password
    } = req.body

    if (!username || !password) {
        return res.send({
            status: 1,
            message: '用户名或密码不能为空！'
        })
    }

    // 2.检测用户名是否被占用
    const selectSql = `select * from ev_users where username=?`
    db.query(selectSql, [username], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.send({
                status: 1,
                message: err.message
            })
        }
        // 用户名被占用
        if (results.length > 0) {
            return res.send({
                status: 1,
                message: '用户名被占用，请更换其他用户名！'
            })
        }
    })

    // 3.对密码进行加密处理
    password = bcrypt.hashSync(password, 10)
    // 4.插入新用户
    const insertSql = 'insert into ev_users set ?'
    db.query(insertSql, {
        username: username,
        password: password
    }, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.send({
            status: 1,
            message: err.message
        })
        // SQL 语句执行成功，但影响行数不为 1
        if (results.affectedRows !== 1) {
            return res.send({
                status: 1,
                message: '注册用户失败，请稍后再试！'
            })
        }
        // 注册成功
        res.send({
            status: 0,
            message: '注册成功！'
        })
    })
}

// 登录的处理函数
export const login = (req, res) => {
    // 1.检测表单数据是否合法
    let {
        username,
        password
    } = req.body
    if (!username || !password) {
        return res.send({
            status: 1,
            message: '用户名或密码不能为空！'
        })
    }
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
        // 3.判断用户输入的密码是否正确
        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(password, results[0].password)

        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.send({
                status: 1,
                message: '请检查你的登录密码，登录失败！'
            })
        }

        // 4.生成 JWT 的 Token 字符串
        const user = {
            ...results[0],
            password: '',
            user_pic: ''
        }

        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, jwtSecretKey.jwtSecretKey, {
            expiresIn: '10h', // token 有效期为 10 个小时
        })
        res.send({
            status: 0,
            message: '登录成功！',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer ' + tokenStr,
            userName: username,
            userInfo: results
        })
    })
}

// 退出登录的处理函数
export const logout = (req, res) => {
    res.send({
        status: 0,
        message: '退出登录成功！',
        token: "",
        userName: "",
        userInfo: ""
    })
}

export const getBaseCategoryLis = (req, res) => {
    let data = [{
            status: 0
        },
        {
            "cateGoryName@1": "  图书、音像、数字商品",
            "cateGoryId": 0,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "家用电器",
            "cateGoryId": 1,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书才怪",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "手机、数码、充值",
            "cateGoryId": 2,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "  图书、音像、数字商品",
            "cateGoryId": 3,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "家用电器",
            "cateGoryId": 4,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "手机、数码、充值",
            "cateGoryId": 5,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "  图书、音像、数字商品",
            "cateGoryId": 6,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "家用电器",
            "cateGoryId": 7,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "手机、数码、充值",
            "cateGoryId": 8,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "  图书、音像、数字商品",
            "cateGoryId": 9,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "家用电器",
            "cateGoryId": 10,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "手机、数码、充值",
            "cateGoryId": 11,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "  图书、音像、数字商品",
            "cateGoryId": 12,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "家用电器",
            "cateGoryId": 13,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "手机、数码、充值",
            "cateGoryId": 14,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "  图书、音像、数字商品",
            "cateGoryId": 15,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "家用电器",
            "cateGoryId": 16,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "手机、数码、充值",
            "cateGoryId": 17,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "  图书、音像、数字商品",
            "cateGoryId": 18,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "家用电器",
            "cateGoryId": 19,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        },
        {
            "cateGoryName@1": "手机、数码、充值",
            "cateGoryId": 20,
            "cateGoryChild": {
                "cateGoryName@2": [
                    "电子书",
                    "婚恋/两性",
                    "文学",
                    "经管",
                    "畅读VIP"
                ]
            }
        }
    ]
    res.send(data)
}
export const getBanner = (req, res) => {
    let data = [{
            "imgUrl": "http://127.0.0.1:3007/home/banner1.jpg",
            "id": 0
        },
        {
            "imgUrl": "http://127.0.0.1:3007/home/banner2.jpg",
            "id": 1
        },
        {
            "imgUrl": "http://127.0.0.1:3007/home/banner3.jpg",
            "id": 2
        },
        {
            "imgUrl": "http://127.0.0.1:3007/home/banner4.jpg",
            "id": 3
        },
    ]
    res.send(data)
}

export const getFloorBanner = (req, res) => {
    let data = [{
        "imgUrl": "http://127.0.0.1:3007/home/floor-1-b01.png",
        "id": 0
    },
    {
        "imgUrl": "http://127.0.0.1:3007/home/floor-1-b02.png",
        "id": 1
    },
    {
        "imgUrl": "http://127.0.0.1:3007/home/floor-1-b03.png",
        "id": 2
    },
    {
        "imgUrl": "http://127.0.0.1:3007/home/floor-1-b01.png",
        "id": 3
    },
]
res.send(data)
}