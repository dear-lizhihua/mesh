# @mesh/api-to-code

## 设计目标

将 `OpenAPI JSON 接口文档` 转为 `JavaScript 可调用代码`。

### 设计示例

```json
{
  "swagger": "2.0",
  "basePath": "/billing/gcp/v1",
  "paths": {
    "/costs/current_month/total": {
      "get": {
        "tags": [
          "概览"
        ],
        "summary": "本月总费用",
        "description": "",
        "parameters": [],
        "responses": {}
      }
    }
  }
}
```

转为

```javascript
const prefixUrl = path => import.meta.env.VITE_PREFIX + import.meta.env.VITE_VERSION + path
export class ApiService {
  constructor (httpClient) {
    this.httpClient = httpClient
  }
  async getCostsCurrentMonthTotal (params) {
    const pathname = prefixUrl('/costs/current_month/total')
    return this.httpClient.get(pathname, {params})
  }
}
```

## 工作目录结构

### /apis

放置 OpenAPI JSON 接口文档

### /dist

放置 JavaScript 可调用代码

## 使用方法

### 导出 OpenAPI JSON 接口文档

在 yapi 项目中，点击 `数据管理`，选择 swaggerjson，点击 `导出` 按钮。

![](/img/apis/mesh-api-to-code/export-yapi-swagger-json.png)

## 代码实现

### GitHub

- [dear-lizhihua/mesh-api-to-code](https://github.com/dear-lizhihua/mesh-api-to-code)
