---
sidebar_position: 101
---

# arco-design-vue 和 ant-design-vue 用例调研：使用 TreeSelect 组件

## MeshCloud 业务需求

<img src="/img/optimization/arco_design_vue/tree_select.png" width="240px" />

一个 TreeSelect 组件

1. 实现基本逻辑
2. 实现过滤节点

## ant-design-vue 实现过滤

- [ant-design (v4) - TreeSelect](https://ant-design.gitee.io/components/tree-select-cn/)
- [ant-design-vue (v3) - TreeSelect](https://ant-design.gitee.io/components/tree-select-cn/)

### 注册 ant-design-vue

```javascript
import { createApp } from 'vue'

import AntdVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'

import App from './App.vue'
const app = createApp(App)
app.use(AntdVue)

app.mount('#app')
```

### 实现方案一：使用 treeNodeFilterProp="title"

将过滤属性从默认的 `value` 改为 `title`

```html
<template>
  <a-tree-select
    class="filter__select"
    :value="serviceRef"
    :tree-data="serviceOptions"
    tree-checkable
    tree-default-expand-all
    show-checked-strategy="SHOW_PARENT"
    treeNodeFilterProp="title"
    @change="changeService"
  />
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const serviceRef = ref(['152E-C115-5142', '1F14-4801-0E16', '24E6-581D-38E5'])
    const serviceOptions = ref([{
      title: `全部(17)`,
      value: 'all',
      key: 'all',
      children: [
        {"title":"Cloud Run","key":"152E-C115-5142","value":"152E-C115-5142"},
        {"title":"Cloud Scheduler","key":"1F14-4801-0E16","value":"1F14-4801-0E16"},
        {"title":"BigQuery","key":"24E6-581D-38E5","value":"24E6-581D-38E5"},
        {"title":"Cloud CDN","key":"2992-EE56-ACD8","value":"2992-EE56-ACD8"},
        {"title":"Cloud Functions","key":"29E7-DA93-CA13","value":"29E7-DA93-CA13"},
        {"title":"Cloud Logging","value":"5490-F7B7-8DF6","key":"5490-F7B7-8DF6"},
        {"title":"Stackdriver Monitoring","value":"58CD-E7C3-72CA","key":"58CD-E7C3-72CA"},
        {"title":"Cloud Memorystore for Redis","value":"5AF5-2C11-D467","key":"5AF5-2C11-D467"},
        {"title":"VM Manager","value":"5E18-9A83-2867","key":"5E18-9A83-2867"},
        {"title":"Compute Engine","value":"6F81-5844-456A","key":"6F81-5844-456A"},
        {"title":"Cloud Storage","value":"95FF-2EF5-5EA1","key":"95FF-2EF5-5EA1"},
        {"title":"Cloud SQL","value":"9662-B51E-5089","key":"9662-B51E-5089"},
        {"title":"Cloud Pub/Sub","value":"A1E8-BE35-7EBC","key":"A1E8-BE35-7EBC"},
        {"title":"Vertex AI","value":"C7E2-9256-1C43","key":"C7E2-9256-1C43"},
        {"title":"Source Repository","value":"CAE2-A537-4A95","key":"CAE2-A537-4A95"},
        {"title":"App Engine","value":"F17B-412E-CB64","key":"F17B-412E-CB64"},
        {"title":"Cloud DNS","value":"FA26-5236-B8B5","key":"FA26-5236-B8B5"},
      ]
    }])
    const changeService = (value) => serviceRef.value = value
    return {
      serviceRef,
      serviceOptions,
      changeService,
    }
  },
}
</script>
<style>
.filter__select {
  width: 100%;
}
</style>
```

### 实现方案二：重写过滤节点函数

```html
<template>
  <a-tree-select
    class="filter__select"
    :value="serviceRef"
    :tree-data="serviceOptions"
    tree-checkable
    tree-default-expand-all
    show-checked-strategy="SHOW_PARENT"
    :filterTreeNode="filterTreeNode"
    @change="changeService"
  />
</template>
<script>
import { ref } from 'vue'
export default {
  components: {},
  setup () {
    const serviceRef = ref(['152E-C115-5142', '1F14-4801-0E16', '24E6-581D-38E5'])
    const serviceOptions = ref([{
      title: `全部(17)`,
      value: 'all',
      key: 'all',
      children: [
        {"title":"Cloud Run","key":"152E-C115-5142","value":"152E-C115-5142"},
        {"title":"Cloud Scheduler","key":"1F14-4801-0E16","value":"1F14-4801-0E16"},
        {"title":"BigQuery","key":"24E6-581D-38E5","value":"24E6-581D-38E5"},
        {"title":"Cloud CDN","key":"2992-EE56-ACD8","value":"2992-EE56-ACD8"},
        {"title":"Cloud Functions","key":"29E7-DA93-CA13","value":"29E7-DA93-CA13"},
        {"title":"Cloud Logging","value":"5490-F7B7-8DF6","key":"5490-F7B7-8DF6"},
        {"title":"Stackdriver Monitoring","value":"58CD-E7C3-72CA","key":"58CD-E7C3-72CA"},
        {"title":"Cloud Memorystore for Redis","value":"5AF5-2C11-D467","key":"5AF5-2C11-D467"},
        {"title":"VM Manager","value":"5E18-9A83-2867","key":"5E18-9A83-2867"},
        {"title":"Compute Engine","value":"6F81-5844-456A","key":"6F81-5844-456A"},
        {"title":"Cloud Storage","value":"95FF-2EF5-5EA1","key":"95FF-2EF5-5EA1"},
        {"title":"Cloud SQL","value":"9662-B51E-5089","key":"9662-B51E-5089"},
        {"title":"Cloud Pub/Sub","value":"A1E8-BE35-7EBC","key":"A1E8-BE35-7EBC"},
        {"title":"Vertex AI","value":"C7E2-9256-1C43","key":"C7E2-9256-1C43"},
        {"title":"Source Repository","value":"CAE2-A537-4A95","key":"CAE2-A537-4A95"},
        {"title":"App Engine","value":"F17B-412E-CB64","key":"F17B-412E-CB64"},
        {"title":"Cloud DNS","value":"FA26-5236-B8B5","key":"FA26-5236-B8B5"},
      ]
    }])
    const changeService = (value) => serviceRef.value = value
    const filterTreeNode = (inputValue, treeNode) => treeNode.title.toLowerCase().includes(inputValue.toLowerCase())
    return {
      serviceRef,
      serviceOptions,
      filterTreeNode,
      changeService,
    }
  },
}
</script>
<style>
.filter__select {
  width: 100%;
}
</style>
```
## arco-design-vue 实现过滤

- [arco-design-vue (v2) - TreeSelect](https://arco.design/vue/component/tree-select)

### 注册 arco-design-vue

```javascript
import { createApp } from 'vue'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import App from './App.vue'
const app = createApp(App)
app.use(ArcoVue)

app.mount('#app')
```

### 实现方案：重写过滤节点函数

```html
<template>
  <a-tree-select
    v-model="serviceRef"
    :data="serviceOptions"
    :filter-tree-node="filterTreeNode"
    :allow-search="true"
    :allow-clear="true"
    :tree-checkable="true"
    tree-checked-strategy="child"
  />
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const serviceRef = ref(['152E-C115-5142', '1F14-4801-0E16', '24E6-581D-38E5'])
    const serviceOptions = ref([{
      title: `全部(17)`,
      value: 'all',
      key: 'all',
      children: [
        {"title": "Cloud Run", "key": "152E-C115-5142", "value": "152E-C115-5142"},
        {"title": "Cloud Scheduler", "key": "1F14-4801-0E16", "value": "1F14-4801-0E16"},
        {"title": "BigQuery", "key": "24E6-581D-38E5", "value": "24E6-581D-38E5"},
        {"title": "Cloud CDN", "key": "2992-EE56-ACD8", "value": "2992-EE56-ACD8"},
        {"title": "Cloud Functions", "key": "29E7-DA93-CA13", "value": "29E7-DA93-CA13"},
        {"title": "Cloud Logging", "value": "5490-F7B7-8DF6", "key": "5490-F7B7-8DF6"},
        {"title": "Stackdriver Monitoring", "value": "58CD-E7C3-72CA", "key": "58CD-E7C3-72CA"},
        {"title": "Cloud Memorystore for Redis", "value": "5AF5-2C11-D467", "key": "5AF5-2C11-D467"},
        {"title": "VM Manager", "value": "5E18-9A83-2867", "key": "5E18-9A83-2867"},
        {"title": "Compute Engine", "value": "6F81-5844-456A", "key": "6F81-5844-456A"},
        {"title": "Cloud Storage", "value": "95FF-2EF5-5EA1", "key": "95FF-2EF5-5EA1"},
        {"title": "Cloud SQL", "value": "9662-B51E-5089", "key": "9662-B51E-5089"},
        {"title": "Cloud Pub/Sub", "value": "A1E8-BE35-7EBC", "key": "A1E8-BE35-7EBC"},
        {"title": "Vertex AI", "value": "C7E2-9256-1C43", "key": "C7E2-9256-1C43"},
        {"title": "Source Repository", "value": "CAE2-A537-4A95", "key": "CAE2-A537-4A95"},
        {"title": "App Engine", "value": "F17B-412E-CB64", "key": "F17B-412E-CB64"},
        {"title": "Cloud DNS", "value": "FA26-5236-B8B5", "key": "FA26-5236-B8B5"},
      ]
    }])
    const filterTreeNode = (inputValue, treeNode) => treeNode.title.toLowerCase().includes(inputValue.toLowerCase())
    return {
      serviceRef,
      serviceOptions,
      filterTreeNode,
    }
  },
}
</script>
```
