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