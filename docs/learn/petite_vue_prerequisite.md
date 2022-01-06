---
sidebar_position: 101
---

# petite-vue 预先准备

## 下载源码

```shell
$ git clone https://github.com/vuejs/petite-vue.git
```

## 安装依赖

```shell
$ yarn install
```

## 构建结果

编辑 vite.config.ts 文件，

```javascript
export default defineConfig({
  build: {
    minify: false, // 注意，这里不压缩
  }
})
```

然后执行

```shell
$ yarn build
```

查看 dist/petite-vue.es.js 文件。
