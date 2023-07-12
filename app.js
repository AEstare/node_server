const express = require('express')
const app = express()
const port = 4396

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//必须在配置cors中间件之前配置jsonp接口
app.get('/api/jsonp', (req, res) => {
    //定义jsonp接口的具体实现过程
    //获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback
    // 得到要通过jsonp形式发送给客户端的数据
    const data = { name: 'zs', age: 20 }
    // 根据前两部得到的数据拼接处函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 吧拼接的字符串响应给客户端script标签进行解析执行
    res.send(scriptStr)
})


//一定要在路由之前，配置cors这个中间件，从而解决接口跨域问题
const cors = require('cors')
app.use(cors())

//导入路由模块
const apiRouter = require('./apiRouter')
app.use('/api', apiRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))