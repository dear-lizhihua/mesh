---
sidebar_position: 111
---

# arco-design-vue 实现一个 TreeSelect 组件，一些细节

## _hooks/use-state.js

```javascript
import { ref } from 'vue'

export default function useState (defaultValue) {
  const value = ref(defaultValue)
  const setValue = (newValue) => {
    value.value = newValue
  }
  return [value, setValue]
}
```

## _utils/is.js

```javascript
const opt = Object.prototype.toString
export function isArray (obj) {
  return opt.call(obj) === '[object Array]'
}
export function isObject (obj) {
  return opt.call(obj) === '[object Object]'
}
export function isUndefined (obj) {
  return obj === undefined
}
```

## tree/hooks/use-tree-data.js

## tree/utils/tree-data.js

## tree-select/hooks/use-selected-state.js

## render() 引用 setup()

### render() 引用 this.render()

select-view.jsx

```javascript
export default defineComponent({
  name: 'SelectView',
  setup (props) {
    const render = () => {
      if (isArray(validValue.value)) {
        return (
          <InputTag />
        )
      }
    }
    return {
      render,
    }
  },
  render () {
    return this.render()
  },
})
```

### render() 引用 this.data

tree-select/panel.jsx

```jsx
export default defineComponent({
  name: 'TreeSelectPanel',
  props: {
    treeProps: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { treeProps } = toRefs(props)
    return {
      treeProps,
    }
  },
  render() {
    return (
      <Tree
        {...this.treeProps}
      />
    )
  }
})
```

## jsx 使用 v-slots 和透传 props

```javascript
export default defineComponent({
  render() {
    return (
      <Tree
        ref="refTree"
        {...this.computedTreeProps}
        checkable={this.checkable}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
        v-slots={this.treeSlots}
      />
    );
  },
})
```

## 问题

### tree-checkable 是如何转换为 checkable

- 展示 checkbox 即 `:tree-checkable="true"`：表示 Tree 组件展示 checkbox。SelectView 组件展示多个 Tag
- 不展示 checkbox 即 `:tree-checkable="false"`：表示 Tree 组件不展示 checkbox
  - `:multiple="true"`：SelectView 组件展示多个 Tag
  - `:multiple="false"`：SelectView 组件展示一个 Text

结论：是否展示 checkbox，只影响展示逻辑，不影响勾选逻辑
