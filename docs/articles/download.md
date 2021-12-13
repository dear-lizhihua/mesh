# 下载文件

## 发送 HTTP 请求，将响应类型设置为 Blob

```javascript
const prefixUrl = path => import.meta.env.VITE_PREFIX + import.meta.env.VITE_VERSION + path
const getTableExport = async ({params}) => {
  const pathname = prefixUrl('/table/export')
  return axios.get(pathname, {
    params,
    responseType: 'blob',
  })
}
```

## 从 response 中读取 content-disposition 和 content-type，并且解析出 filename

在 axios 拦截器中，我们将 axios 包装的 `response` 挂载 `__origin__` 属性上面（这个步骤省略）。

然后我们：

1. 从 response 上面读取 ContentDisposition 和 ContentType
2. 再从 ContentDisposition 中解析出 filename

```javascript
const exportTable = async () => {
  const blob = await getCostsExport({invoice_month: '2021-12'})
  const ContentDisposition = blob.__origin__.headers['content-disposition']
  const ContentType = blob.__origin__.headers['content-type']
  const filename = /filename=(.*)$/g.exec(ContentDisposition)[1]
  // ...
}
```

## 下载文件

```javascript
const exportTable = async () => {
  // ...
  downloader(blob, ContentType, filename)
}

const downloadURI = (uri, name) => {
  let link = document.createElement('a')
  link.download = name
  link.style.display = 'none'
  link.href = uri
  link.click()
}
const downloader = (data, type, name) => {
  let blob = new Blob([data], {type})
  let url = window.URL.createObjectURL(blob)
  downloadURI(url, name)
  window.URL.revokeObjectURL(url)
}
```

## 后端处理 HTTP 请求

### [MIME types - application/octet-stream](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#applicationoctet-stream)

这是二进制文件的默认设置。由于这意味着未知的二进制文件，浏览器通常不会执行它，甚至会询问是否应该执行它。将 [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) 标头设置为 attachment，浏览器会弹出 "Save As(保存为)" 对话框。

### [Content-Disposition: attachment; filename="filename.jpg"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)
 
表示着 HTTP 文本会被下载到本地，大多数浏览器会呈现一个 "Save As(保存为)" 对话框，将 filename 的值，预先填充为下载文件的名称。
