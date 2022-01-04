---
sidebar_position: 110
---

import GoogleListSelectUrl from '@site/static/img/optimization/arco_design_vue/arco_design_vue_implement_list_select_00.png';

# arco-design-vue 实现一个 ListSelect 组件

## 组件介绍

这个组件来自谷歌云平台

<img width="400px" src={GoogleListSelectUrl} />

## 实现目标

我们需要实现一个和谷歌云平台相同的 ListSelect 组件

1. 实现 SelectView 组件：选中文本
2. 实现 ListSelectPanel 组件：树节点、勾选、取消勾选
3. 实现 SelectView 组件和 ListSelectPanel 组件的联动：树节点进行勾选和取消勾选
4. 实现 `ListSelectPanel 组件内部的 ListSelectFilter 组件` 与 `ListSelectPanel 组件内部的 ListSelectCheck 组件` 和 `ListSelectPanel 组件内部的 ListSelectTree 组件` 的联动：输入时，过滤树节点

## 交互示意图

### SelectView 组件

- SelectView 组件内部的 InputText 组件

![](/img/optimization/arco_design_vue/arco_design_vue_implement_list_select_01.png)

### ListSelectPanel 组件

- ListSelectPanel 组件内部的 ListSelectFilter 组件
- ListSelectPanel 组件内部的 ListSelectCheck 组件
- ListSelectPanel 组件内部的 ListSelectTree 组件

![](/img/optimization/arco_design_vue/arco_design_vue_implement_list_select_02.png)

## 分析交互：互斥逻辑

我们将全选状态、勾选状态、过滤状态拆分为三个集合 allKeys, selectedKeys, filteredKeys。

假想，**我们存在一个下拉列表，全部选项包括 ['1', '2-a', '2-b']。**

### 场景一：selectedKeys 包含 filteredKeys

#### 模拟交互

- 我们在勾选框中勾选 `1`, `2-a` 两个节点。
- 我们在输入框中输入 1，过滤出 `1` 一个节点。

#### 集合状态

- allKeys: ['1', '2-a', '2-b']
- selectedKeys: ['1', '2-a']
- filteredKeys: ['1']

#### ListSelectCheck 组件的相关交互

- 此时 ListSelectCheck 组件应该表现为 `勾选状态`。
- ListSelectCheck 组件执行勾选动作后，此时应该由 `勾选状态` 进入 `取消勾选状态`。
- 如果我们在 ListSelectCheck 组件中 `执行取消勾选动作`，此时应该从 selectedKeys 中排除出去 filteredKeys。即选中 ['2-a']。

### 场景二：filteredKeys 与 selectedKeys 无交集

#### 模拟交互

- 我们在勾选框中勾选 `1` 一个节点。
- 我们在输入框中输入 2，过滤出 `2-a`, `2-b` 两个节点。

#### 集合状态

- allKeys: ['1', '2-a', '2-b']
- selectedKeys: ['1']
- filteredKeys: ['2-a', '2-b']

#### ListSelectCheck 组件的相关交互

- 此时 ListSelectCheck 组件应该表现为 `不勾选状态`。
- ListSelectCheck 组件执行勾选动作后，此时应该由 `不勾选状态` 进入 `勾选状态`。
- 如果我们在 ListSelectCheck 组件中 `执行勾选动作`，此时应该从 selectedKeys 中添加 filteredKeys。即选中 ['1', '2-a', '2-b']

### 场景三：filteredKeys 与 selectedKeys 有交集

#### 模拟交互

- 我们在勾选框中勾选 `1`, `2-a` 两个节点。
- 我们在输入框中输入 2，过滤出 `2-a`, `2-b` 两个节点。

#### 集合状态

- allKeys: ['1', '2-a', '2-b']
- selectedKeys: ['1', '2-a']
- filteredKeys: ['2-a', '2-b']

#### ListSelectCheck 组件的相关交互

- 此时 ListSelectCheck 组件应该表现为 `半勾选状态`。
- ListSelectCheck 组件执行勾选动作后，此时应该由 `半勾选状态` 进入 `勾选状态`。
- 如果我们在 ListSelectCheck 组件中 `执行勾选动作`，此时应该从 selectedKeys 中添加 filteredKeys。即选中 ['1', '2-a', '2-b']

## 实现代码：互斥逻辑

### 描述三种关系：包含、有交集、无交集

### 假定 allKeys

```javascript
const allKeys = ['1', '2-a', '2-b', '3']
```

### 场景一：selectedKeys 包含 filteredKeys

分析：filteredKeys 每个元素，都包含在 selectedKeys 数组中。

```javascript
const selectedKeys = ['1', '2-a']
const filteredKeys = ['1']
```

### 场景二：filteredKeys 与 selectedKeys 无交集

分析：filteredKeys 每个元素，都不在 selectedKeys 数组中。

```javascript
const selectedKeys = ['1']
const filteredKeys = ['2-a', '2-b']
```

### 场景三：filteredKeys 与 selectedKeys 有交集

分析：filteredKeys 每个元素，部分在 selectedKeys 数组中。

```javascript
const selectedKeys = ['1', '2-a']
const filteredKeys = ['2-a', '2-b']
```

### 取值逻辑

我们遍历 filteredKeys 数组，然后利用 [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/every) 和 [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 来计算包含、无交集、有交集三种关系。

将 selectedKeys 数组，转化为 selectedKeysSet 集合，有助于我们通过 [Set.prototype.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has) 方法，判断元素是否存在于集合中。也可以直接使用 [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 方法。

```javascript
const selectedKeysSet = new Set(selectedKeys)
const isContained = filteredKeys.every((filteredKey) => selectedKeysSet.has(filteredKey))
const isIntersectional = filteredKeys.some((filteredKey) => selectedKeysSet.has(filteredKey))
```

- `isContained: true`，符合 `包含` 关系。
- `isContained: false, isIntersectional: false`，符合 `无交集` 关系。
- `isContained: false, isIntersectional: true`，符合 `有交集` 关系。

## 实现代码：ListSelectCheck 组件

```javascript
import { defineComponent, toRefs, computed } from 'vue'
const getPrefixCls = value => value
export default defineComponent({
  name: 'ListSelectCheck',
  components: {InputText},
  emits: ['change'],
  props: {
    allKeys: {
      type: Array,
      default: () => []
    },
    selectedKeys: {
      type: Array,
      default: () => []
    },
    filteredKeys: {
      type: Array,
      default: () => []
    },
  },
  setup (props, {emit}) {
    const prefixCls = getPrefixCls('list-select-check')
    const {selectedKeys, filteredKeys} = toRefs(props)

    const isContained = computed(() => filteredKeys.value.every((filteredKey) => selectedKeys.value.includes(filteredKey)))
    const isIntersectional = computed(() => filteredKeys.value.some((filteredKey) => selectedKeys.value.includes(filteredKey)))
    const indeterminate = computed(() => isContained.value === false && isIntersectional.value === true)

    const onChange = (value) => {
      const _set = new Set()
      if (value === false) { // 现在是包含状态。
        selectedKeys.value.map(selectedKey => _set.add(selectedKey))
        filteredKeys.value.map(filteredKey => _set.delete(filteredKey))
      }
      if (value === true && indeterminate.value === false) { // 现在是无交集状态
        selectedKeys.value.map(selectedKey => _set.add(selectedKey))
        filteredKeys.value.map(filteredKey => _set.add(filteredKey))
      }
      if (value === true && indeterminate.value === true) { // 现在是有交集状态
        selectedKeys.value.map(selectedKey => _set.add(selectedKey))
        filteredKeys.value.map(filteredKey => _set.add(filteredKey))
      }
      emit('change', Array.from(_set))
    }

    return {
      prefixCls,
      isContained,
      indeterminate,
      onChange,
    }
  },
  render () {
    return (
      <div>
        <checkbox
          onChange={this.onChange}
          class={`${this.prefixCls}-checkbox`}
          value={'all'}
          model-value={this.isContained}
          indeterminate={this.indeterminate}
        >
          <InputText
            allKeys={this.allKeys}
            selectedKeys={this.selectedKeys}
          />
        </checkbox>
      </div>
    )
  },
})
```
