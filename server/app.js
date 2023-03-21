// @ts-nocheck
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./router/user.js";
import userinfoRouter from "./router/userinfo.js";
import joi from "joi";
import config from "./config.js";
import { expressjwt } from "express-jwt";

const app = express();

// vue3+vite项目踩坑
// ES6 module 中没有像 CommonJs "__dirname" 全局变量
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 图片 webp 处理
app.use((req, res, next) => {
  if (req.url.endsWith(".webp")) {
    let parts = req.url.split("@");
    if (parts[0].endsWith(".jpg") || parts[0].endsWith(".png")) {
      const filePath = "http://127.0.0.1:3007" + parts[0];
      req.url = filePath;
    } else {
      console.log("invalid URL format");
    }
  }
  next();
});
// 向外托管静态图片资源
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api", userRouter);
app.use("/my", userinfoRouter);

// 错误中间件
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) {
    return res.send({
      status: 1,
      // message: err instanceof Error ? err.message : err
      message: err.message,
    });
  }

  // 未知错误
  // 捕获身份认证失败的错误
  if (err.name === "UnauthorizedError") {
    return res.send({
      status: 1,
      message: "身份认证失败！",
    });
  }
});

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(
  expressjwt({
    secret: config.jwtSecretKey,
    algorithms: ["HS256"],
  }).unless({
    path: [/^\/api\//],
  })
);

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
  console.log("api server running at http://127.0.0.1:3007");
});
