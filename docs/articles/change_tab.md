---
sidebar_position: 101
---

# 切换标签页时，渲染动态组件

## template

```html
<template>
  <div class="tab__tabs">
    <a-tabs type="card" :activeKey="currentTab" @change="changeTab">
      <a-tab-pane
        v-for="item in tabs"
        :key="item.value"
        :tab="item.label"
      />
    </a-tabs>
  </div>
  <div class="tab__content">
    <Component
      :is="currentComponent"
    />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import tabsLogic from './components/tabs'
export default defineComponent({
  setup () {
    const {tabs, currentTab, changeTab, currentComponent} = tabsLogic()
    return {
      // 显示隐藏切换逻辑
      tabs,
      currentTab,
      changeTab,
      currentComponent,
    }
  },
})
</script>
<style lang="scss" scoped>
.tab__content {
  border: 1px solid #ccc;
}
</style>
```

## tabsLogic

```javascript
import { ref, computed } from 'vue'

import ComponentA from './component-a.vue'
import ComponentB from './component-b.vue'
import ComponentC from './component-c.vue'

export default function () {
  const currentTab = ref('ComponentA')
  const tabs = [
    {label: '组件A', value: 'ComponentA'},
    {label: '组件B', value: 'ComponentB'},
    {label: '组件C', value: 'ComponentC'},
  ]
  const componentsMap = new Map([
    ['ComponentA', ComponentA],
    ['ComponentB', ComponentB],
    ['ComponentC', ComponentC],
  ])
  const changeTab = (tabName) => currentTab.value = tabName
  const currentComponent = computed(() => componentsMap.get(currentTab.value))
  return {
    tabs,
    currentTab,
    changeTab,
    currentComponent,
  }
}
```

## component

### ComponentA

```html
<template>
  <div class="component">
    组件A
  </div>
</template>

<style lang="scss" scoped>
.component {
  height: 300px;
  background-color: #eee;
}
</style>
```

### ComponentB

```html
<template>
  <div class="component">
    组件B
  </div>
</template>

<style lang="scss" scoped>
.component {
  height: 300px;
  background-color: #ddd;
}
</style>
```

### ComponentC

```html
<template>
  <div class="component">
    组件C
  </div>
</template>

<style lang="scss" scoped>
.component {
  height: 300px;
  background-color: #ccc;
}
</style>
```
