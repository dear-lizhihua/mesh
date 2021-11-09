---
sidebar_position: 105
---

# 观察 @vitejs/plugin-vue 行为：理解 vue 模块内部的导出函数

## 链接

- [Vite 文档 - 指南](https://vitejs.dev/guide/)

## 使用 Vite 和 @vitejs/plugin-vue 初始化项目

```shell
$ yarn create vite
```

## 安装依赖和执行构建

```shell
$ yarn
$ yarn build
```

观察构建结果。

## 分析 img：理解 base64 url

- [Base64 Image Example](https://codepen.io/jamiekane/pen/YayWOa)

### template

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>
```

### render function

```javascript
import {createElementVNode} from 'vue'
var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
const _hoisted_1 = /* @__PURE__ */ createElementVNode("img", {
  alt: "Vue logo",
  src: _imports_0
}, null, -1)
```

## 分析 HelloWorld.vue：理解 scopedId, export_sfc

```javascript
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) sfc[key] = val
  return sfc
}
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3d3c9e2e"]])
```

_export_sfc 用于导出单文件组件，并且在对象上面挂载一些 props。本质上就是原样返回 (sfc) => sfc。

这里挂载的是组件的 scopeId。

## 分析 HelloWorld.vue：理解 _sfc_main$1, script setup 语法

这里的 $1，指 App.vue 这个 main 组件中，第一个子组件，即 HelloWorld.vue 的 render 函数。

### template

```html
<template>
  <h1>{{ msg }}</h1>
  <p>Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a></p>
  <p><a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> | <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a></p>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>
```

### script

```javascript
import { ref } from 'vue'
defineProps({msg: String})
const count = ref(0)
```

### render function

```javascript
const _sfc_main$1 = {
  props: {msg: String},
  setup(__props) {
    const count = ref(0)
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("h1", null, toDisplayString(__props.msg), 1),
        _hoisted_1$1,
        _hoisted_2,
        createElementVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
        }, "count is: " + toDisplayString(count.value), 1),
        _hoisted_3
      ], 64)
    }
  }
}
```

### 分析 script setup 语法

- defineProps({msg: String}) 被转译为 props: {msg: String}
- const count = ref(0) 被转译为 setup(__props) { const count = ref(0) }

可以看出 script setup 语法，自动地在 msg 和 ref 外面包裹了 props 和 setup。

## 分析 HelloWorld.vue：组件内部的静态优化

观察上面的 HelloWorld.vue，三个 p 标签都是静态节点，没有隐含变量，Vue 为其进行了静态优化。

```html
<template>
  <h1>{{ msg }}</h1>
  <p>...</p>
  <p>...</p>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>...</p>
</template>
```

### render function

> 静态优化时，要把 scopeId 传给静态优化的组件，使其也受 scoped 样式影响。

注意，调用 _withScopeId 绑定 scopeId。

```javascript
import { createElementVNode, pushScopeId, popScopeId, createTextVNode } from "vue"
const _withScopeId = (n) => (pushScopeId("data-v-3d3c9e2e"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Recommended IDE setup: "),
  /* @__PURE__ */ createElementVNode("a", {href: "https://code.visualstudio.com/", target: "_blank"}, "VSCode"),
  /* @__PURE__ */ createTextVNode(" + "),
  /* @__PURE__ */ createElementVNode("a", {href: "https://github.com/johnsoncodehk/volar", target: "_blank"}, "Volar")
], -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createElementVNode("a", {href: "https://vitejs.dev/guide/features.html", target: "_blank"}, " Vite Documentation "),
  /* @__PURE__ */ createTextVNode(" | "),
  /* @__PURE__ */ createElementVNode("a", {href: "https://v3.vuejs.org/", target: "_blank"}, "Vue 3 Documentation")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Edit "),
  /* @__PURE__ */ createElementVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test hot module replacement. ")
], -1));
```

## 分析 App.vue：理解 _sfc_main

### template

```html
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>
```

### render function

```javascript
import {ref, openBlock, createElementBlock, Fragment, createVNode} from 'vue'
var App_vue_vue_type_style_index_0_lang = ""
const _sfc_main = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1, // 指上面的 img(base64)
        createVNode(HelloWorld, { msg: "Hello Vue 3 + Vite" })
      ], 64)
    }
  }
}
export { _sfc_main as App }
```
