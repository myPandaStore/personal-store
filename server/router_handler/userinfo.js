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