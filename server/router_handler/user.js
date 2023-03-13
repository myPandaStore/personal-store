/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
import db from "../db/index.js"
import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// import jwtSecretKey from '../config.js'

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

// 注册用户的处理函数
export const regUser = (req, res) => {
    console.log(req.body)
    // 1.检测表单数据是否合法
    const userinfo = req.body[0].userinfo

    if (!userinfo.username || !userinfo.password) {
        return res.send({
            status: 1,
            message: '用户名或密码不能为空！'
        })
    }

    // 2.检测用户名是否被占用
    const selectSql = `select * from ev_users where username=?`
    db.query(selectSql, [userinfo.username], function (err, results) {
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
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // 4.插入新用户
    const insertSql = 'insert into ev_users set ?'
    db.query(insertSql, {
        username: userinfo.username,
        password: userinfo.password
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
    const userinfo = req.body
    if (!userinfo.username || !userinfo.password) {
        return res.send({
            status: 1,
            message: '用户名或密码不能为空！'
        })
    }
    // 2.根据用户名查询用户的数据
    const sql = `select * from ev_users where username=?`
    db.query(sql, userinfo.username, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('登录失败！')

        // 3.判断用户输入的密码是否正确
        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            // return res.cc('登录失败！')
        }

        // 4.生成 JWT 的 Token 字符串
        // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
        // const user = {
        //     ...results[0],
        //     password: '',
        //     user_pic: ''
        // }

        // 生成 Token 字符串
        // const tokenStr = jwt.sign(user, jwtSecretKey.jwtSecretKey, {
        //     expiresIn: '10h', // token 有效期为 10 个小时
        // })
        // res.send({
        //     status: 0,
        //     message: '登录成功！',
        //     // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
        //     token: 'Bearer ' + tokenStr,
        //   })
    })

    res.send('login OK')
}