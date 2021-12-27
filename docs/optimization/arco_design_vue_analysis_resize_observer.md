---
sidebar_position: 104
---

# arco-design-vue 分析 ResizeObserver 组件

## 基本用法

- [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
- [ResizeObserver Polyfill](https://github.com/que-etc/resize-observer-polyfill)

通过 ResizeObserver 接口，可以报告 `一个 Element 的 content box 或 border box` 或 `一个 SVGElement 的 bounding box` 方面的变化。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ResizeObserver</title>
</head>
<body>
<script>
  const ro = new ResizeObserver((entries, observer) => {
    for (const entry of entries) {
      const {left, top, width, height} = entry.contentRect
      console.log('Element:', entry.target)
      console.log(`Element's size: ${width}px x ${height}px`)
      console.log(`Element's paddings: ${top}px ; ${left}px`)
    }
  })
  ro.observe(document.body)
</script>
</body>
</html>
```

## 组件封装

- [Arco Design - resize-observer.tsx](https://github.com/arco-design/arco-design-vue/blob/main/packages/web-vue/components/_components/resize-observer.tsx)

### JavaScript 重写版本 (JSX 形式)

```jsx
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
} from 'vue'
import ResizeObserver from 'resize-observer-polyfill'
const findDomNode = (vnode) => {
  let node = vnode.el
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node
}

export default defineComponent({
  name: 'ResizeObserver',
  emits: [
    'resize',
  ],
  setup (props, {emit, slots}) {
    let resizeObserver
    const findElement = (instance) => {
      return findDomNode(instance.vnode)
    }

    const createResizeObserver = (target) => {
      if (!target) return
      resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0]
        emit('resize', entry)
      })
      resizeObserver.observe(target)
    }
    onMounted(() => {
      const instance = getCurrentInstance()
      if (instance) {
        const element = findElement(instance)
        createResizeObserver(element)
      }
    })
    return () => {
      const children = slots.default && slots.default()
      return children && children.length ? children[0] : null
    }
  },
})
```

## 分析代码

### 分析代码：getCurrentInstance

[Composition API - getCurrentInstance](https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance) 支持访问内部组件实例。

```javascript
const instance = getCurrentInstance()
```

### 分析代码：findElement 和 findDomNode

从 Vue 的 VNode 中找出是元素类型的 DOM 节点。

```javascript
if (instance) {
  const element = findElement(instance)
}
```

### 分析代码：createResizeObserver

用于观察 element 元素，在 element 元素发生变化时，触发 `(entries) => {}` 回调，然后向上层组件发送 resize 事件。

```javascript
const createResizeObserver = (target) => {
  if (!target) return
  resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0]
    emit('resize', entry)
  })
  resizeObserver.observe(target)
}

if (instance) {
  const element = findElement(instance)
  createResizeObserver(element)
}
```
