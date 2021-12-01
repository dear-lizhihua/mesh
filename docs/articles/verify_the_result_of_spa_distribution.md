---
sidebar_position: 121
---

# 验证 SPA 构建结果

## 安装 [serve](https://www.npmjs.com/package/serve)

```shell
# npm 全局环境安装
$ npm install -g serve
# 或者，yarn 全局环境安装
$ yarn global add serve
```

## 验证 dist

进入项目构建结果目录 dist。

```shell
$ cd /dist
```

以 -s 模式，运行 Node.js server。

```shell
$ serve -s
```
