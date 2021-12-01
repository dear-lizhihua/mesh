---
sidebar_position: 131
---

# 使用 vite-node 运行 CommonJS 和 ES Modules 模块

> vite-node 将 Vite 作为 Node.js 运行时。

## 初始化项目，安装 vite-node

```shell
$ yarn init -y
$ yarn add vite-node
```

## 安装 koa@2 (CommonJS 模块)

```shell
$ yarn add koa
```

## 安装 execa@6 (ES modules 模块)

```shell
$ yarn add execa
```

## 使用 vite-node + import.meta.env

### 添加 .env 文件

文件内容如下

```text
VITE_PORT=8500
```

### 打印 import.meta.env

创建 src/index.js 文件，文件内容如下

```javascript
console.log(import.meta.env)
```

### 执行脚本

```shell
$ ./node_modules/.bin/vite-node src/index.js
{
  VITE_PORT: '8500',
  BASE_URL: '/',
  MODE: 'development',
  DEV: true,
  PROD: false,
  SSR: true
} 
```

## 使用 vite-node + koa@2 (CommonJS 模块)

### 添加 src/index.js 文件

文件内容如下

```javascript
const Koa = require('koa')
const app = new Koa()
const port = import.meta.env.VITE_PORT

app.use(async (ctx) => {
  ctx.response.body = 'hello world'
})

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`)
})
```

### 执行脚本

```shell
$ ./node_modules/.bin/vite-node src/index.js
server start at http://localhost:8500
```

## 使用 vite-node + execa@6 (ES modules 模块)

### 执行不存在的命令，捕获错误

添加 src/index.js 文件，文件内容如下

```javascript
import { execa } from 'execa'
try {
  await execa('unknown', ['command'])
} catch (error) {
  console.dir(error)
  /*
  {
    message: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',
    errno: -2,
    code: 'ENOENT',
    syscall: 'spawn unknown',
    path: 'unknown',
    spawnargs: ['command'],
    originalMessage: 'spawn unknown ENOENT',
    shortMessage: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',
    command: 'unknown command',
    escapedCommand: 'unknown command',
    stdout: '',
    stderr: '',
    all: '',
    failed: true,
    timedOut: false,
    isCanceled: false,
    killed: false
  }
  */
}
```

### 执行存在的命令，输出结果

```javascript
import { execa } from 'execa'
try {
  const {stdout} = await execa('node', ['-v'])
  console.log(stdout) // v14.18.1
} catch (error) {
  console.log(error)
}
```

### 执行脚本

```shell
./node_modules/.bin/vite-node src/index.js
```

## vite-node + watch 模式

### 添加 src/index.js 文件

文件内容如下

```javascript
console.log(1)
```

### 执行脚本（watch 模式）

```shell
$ ./node_modules/.bin/vite-node -w src/index.js

vite node  watch mode enabled
1
vite node  program exited, waiting for file changes...
```

### 修改 src/index.js 文件

文件内容改为 2

```javascript
console.log(2)
```

查看控制台

```shell
vite node  /Users/lizhihua/workspace/test/src/index.js changed, restarting...
2
vite node  program exited, waiting for file changes...
```

## 参考链接

- [antfu/vite-node](https://github.com/antfu/vite-node)
- [vite-node 初试](https://cnodejs.org/topic/616510f5fe0c514512aee3e8)
