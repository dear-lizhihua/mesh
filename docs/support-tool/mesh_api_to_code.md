---
sidebar_position: 100
---

# @mesh/api-to-code

## 整体目标：接口转换为调用代码

## 目标1：接口转换

目标描述：将如下 JSON Schema，转换为 JavaScript 调用代码

```json
{
  "/domains": {
    "post": {}
  }, 
  "/domains/:domainId": {
    "put": {}
  },
  "/certs": {
    "get": {}
  },
  "/certs/:certId": {
    "delete": {}
  }
}
```
```javascript
// 使用 Vite 提供的环境变量 import.meta.env
const prefixUrl = path => import.meta.env.VITE_PREFIX + import.meta.env.VITE_VERSION + import.meta.env.VITE_DOMAIN + path
// 根据业务需求自己定义
const prefixUrl = path => path

class ApiService {
  constructor (httpClient) {
    this.httpClient = httpClient
  }
  async postDomains (data) {
    const pathname = prefixUrl("/domains");
    return this.httpClient.post(pathname, data);
  } 
  async putDomainsByDomainId (data) {
    const pathname = prefixUrl("/domains/:domainId");
    return this.httpClient.put(pathname, data);
  }
  async getCerts (params) {
    const pathname = prefixUrl("/certs");
    return this.httpClient.get(pathname, {params});
  } 
  async deleteCertsByCertId (params) {
    const pathname = prefixUrl("/certs/:certId");
    return this.httpClient.delete(pathname, {params});
  }
}
```

## 目标2：使用 prettier 美化 JavaScript 代码

- https://prettier.io/
- https://prettier.io/docs/en/api.html

## 目标3：将拼接好的接口字符串，写入到文件

```text
const fs = require('fs')
fs.writeFileSync(...)
```

## 目标4：批量实现接口转换

1. 使用 glob library 读取 src 目录下的所有 JSON 文件。例如：https://www.npmjs.com/package/globby
2. 按照相应的目录结构，写入到 dist 目录下

## 目标5：编写测试用例
在 /tests 目录下，简单实现：示例 JSON 转换为 JavaScript 代码
- get 用例
- post 用例
- put 用例
- delete 用例
