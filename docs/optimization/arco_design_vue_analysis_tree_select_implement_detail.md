---
sidebar_position: 104
---

# arco-design-vue 分析 TreeSelect 组件的实现细节

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

### tree-select/tree-select.vue

#### 数据不丢失响应式

> toRefs 用法：将响应式对象转换为普通对象。其中结果对象的每个属性，都指向原始对象相应属性的引用。

这里拿到 data, fieldNames, treeCheckable 三个引用，再创建出一个新的对象 { treeData, fieldNames, selectable, checkable }。

但此对象不是响应式的，我们需要使用 reactive({ treeData, fieldNames, selectable, checkable }) 恢复为响应式对象。

这样 useTreeData 函数内部才能够使用 watchEffect 观察到新的对象的变化

```javascript
const {
  data,
  fieldNames,
  treeCheckable,
} = toRefs(props)

const {flattenTreeData, key2TreeNode} = useTreeData(reactive({
  treeData: data,
  fieldNames,
  selectable: true,
  checkable: treeCheckable,
}))
```

## tree/hooks/use-tree-data.js

1. generateTreeData 函数：将用户传入的 `树结构+简单数据`（只包含 title, value, key, children 四个属性），映射为 `树结构+扩展数据`（包含 blockNode, checkable, children, disableCheckbox, disabled, draggable, isLeaf, isTail, key, level, lineless, parent, parentKey, pathParentKeys, selectable, showLine, title, treeNodeData, treeNodeProps, value 十几个属性，用于表述树的展示渲染和勾选交互）。
2. getFlattenTreeData 函数：使用 `深度优先` 遍历 `树结构`。
3. getKey2TreeNode 函数：创建一个 map，用于映射 key 和 node 之间的关系。

```javascript
import { computed, ref, toRefs, watchEffect } from 'vue'
import { getFlattenTreeData, getKey2TreeNode } from '../utils'
import { generateTreeData } from '../utils/tree-data'
export default function useTreeData (props) {
  const {
    treeData: propTreeData,
    fieldNames,
    selectable,
    showLine,
    blockNode,
    checkable,
    loadMore,
    draggable,
  } = toRefs(props)
  const treeData = ref([])
  watchEffect(() => {
    treeData.value = generateTreeData(propTreeData.value || [], {
      selectable: !!selectable?.value,
      showLine: !!showLine?.value,
      blockNode: !!blockNode?.value,
      checkable: !!checkable?.value,
      fieldNames: fieldNames?.value,
      loadMore: !!loadMore?.value,
      draggable: !!draggable?.value,
    })
  })
  const flattenTreeData = computed(() => getFlattenTreeData(treeData.value))
  const key2TreeNode = computed(() => getKey2TreeNode(flattenTreeData.value))
  return {treeData, flattenTreeData, key2TreeNode}
}
```

## tree-select/hooks/use-selected-state.js

正常化 modelValue 和 defaultValue 的值。细节描述如下：

- 将 undefined 转为 undefined。
- 多选或勾选情况下，将 `非数组结构的值` 转为 `数组结构的值`。
- 单选情况下，将 `数组结构的多个值` 转为 `数组结构的单个值`。

```javascript
export default function useSelectedState (props) {
  function normalizeValue (value) {
    if (isUndefined(value)) return undefined
    if (multiple?.value || treeCheckable?.value)
      return !isArray(value) ? [value] : value
    return isArray(value) ? value.slice(0, 1) : [value]
  }
  watchEffect(() => {
    const normalizeModelValue = normalizeValue(modelValue.value)
  })
  const normalizeDefaultValue = normalizeValue(defaultValue.value)
}
```

获取数组中的 keys。细节描述如下：

- 遍历数组。item 如果是对象取 item.value，item 如果不是对象取 item。
- 过滤数组。item 是 undefined 或 ''。

```javascript
const opt = Object.prototype.toString
const isObject = (obj) => opt.call(obj) === '[object Object]'
const isUndefined = (obj) => obj === undefined
export default function useSelectedState (props) {
  function getKeys (value) {
    if (!value) return undefined
    const keys = value.map((item) => (isObject(item) ? item.value : item)).filter((item) => !isUndefined(item) && item !== '')
    return keys
  }
  watchEffect(() => {
    const modelValueKeys = getKeys(normalizeModelValue)
  })
  const defaultKeys = getKeys(normalizeDefaultValue)
}
```

## tree/utils/index.js

getFlattenTreeData 函数：使用 `深度优先` 遍历 `树结构`。

```javascript
export function getFlattenTreeData (tree) {
  const flattenTreeData = []
  function preOrder (tree) {
    if (!tree) return
    tree.forEach((node) => {
      flattenTreeData.push(node)
      preOrder(node.children)
    })
  }
  preOrder(tree)
  return flattenTreeData
}
```


getKey2TreeNode 函数：创建一个 map，用于映射 key 和 node 之间的关系。

```javascript
export function getKey2TreeNode (flattenTreeData) {
  const key2TreeNode = {}
  flattenTreeData.forEach((node) => {
    key2TreeNode[node.key] = node
  })
  return key2TreeNode
}
```

## tree/utils/tree-data.js

树结构+简单数据的示例：

```javascript
const serviceOptions = ref([{
  title: `全部(17)`,
  value: 'all',
  key: 'all',
  children: [
    {'title': 'Cloud Run', 'key': '152E-C115-5142', 'value': '152E-C115-5142'},
    {'title': 'Cloud Scheduler', 'key': '1F14-4801-0E16', 'value': '1F14-4801-0E16'},
    {'title': 'BigQuery', 'key': '24E6-581D-38E5', 'value': '24E6-581D-38E5'},
    {'title': 'Cloud CDN', 'key': '2992-EE56-ACD8', 'value': '2992-EE56-ACD8'},
    {'title': 'Cloud Functions', 'key': '29E7-DA93-CA13', 'value': '29E7-DA93-CA13'},
    {'title': 'Cloud Logging', 'value': '5490-F7B7-8DF6', 'key': '5490-F7B7-8DF6'},
    {'title': 'Stackdriver Monitoring', 'value': '58CD-E7C3-72CA', 'key': '58CD-E7C3-72CA'},
    {'title': 'Cloud Memorystore for Redis', 'value': '5AF5-2C11-D467', 'key': '5AF5-2C11-D467'},
    {'title': 'VM Manager', 'value': '5E18-9A83-2867', 'key': '5E18-9A83-2867'},
    {'title': 'Compute Engine', 'value': '6F81-5844-456A', 'key': '6F81-5844-456A'},
    {'title': 'Cloud Storage', 'value': '95FF-2EF5-5EA1', 'key': '95FF-2EF5-5EA1'},
    {'title': 'Cloud SQL', 'value': '9662-B51E-5089', 'key': '9662-B51E-5089'},
    {'title': 'Cloud Pub/Sub', 'value': 'A1E8-BE35-7EBC', 'key': 'A1E8-BE35-7EBC'},
    {'title': 'Vertex AI', 'value': 'C7E2-9256-1C43', 'key': 'C7E2-9256-1C43'},
    {'title': 'Source Repository', 'value': 'CAE2-A537-4A95', 'key': 'CAE2-A537-4A95'},
    {'title': 'App Engine', 'value': 'F17B-412E-CB64', 'key': 'F17B-412E-CB64'},
    {'title': 'Cloud DNS', 'value': 'FA26-5236-B8B5', 'key': 'FA26-5236-B8B5'},
  ],
}])
```

简化代码

```javascript
import { omit } from '../../_utils/omit'
import { isUndefined } from '../../_utils/is'
export const generateKey = (() => {
  let i = 0
  return () => {
    i += 1
    return `__arco_tree${i}`
  }
})()
function getBoolean (val1, val2) {
  return !!(isUndefined(val1) ? val2 : val1)
}
function mapObject (obj, nameMap) {
  const _obj = {...obj}
  if (nameMap) {
    const names = Object.keys(nameMap)
    names.forEach((name) => {
      const sourceName = nameMap[name]
      if (sourceName !== name) {
        _obj[name] = obj[sourceName]
        delete _obj[sourceName]
      }
    })
  }
  return _obj
}
function generateNode (options) {
  const {treeNodeData, parentNode, isTail = true, treeProps} = options
  const {fieldNames} = treeProps || {}
  const mapTreeNodeData = mapObject(treeNodeData, fieldNames)
  const treeNodeProps = {
    ...omit(mapTreeNodeData, ['children']),
    key: mapTreeNodeData.key ?? generateKey(),
    selectable: getBoolean(mapTreeNodeData.selectable, treeProps?.selectable),
    disabled: !!mapTreeNodeData.disabled,
    disableCheckbox: !!mapTreeNodeData.disableCheckbox,
    checkable: getBoolean(mapTreeNodeData.checkable, treeProps?.checkable),
    isLeaf: treeProps.loadMore
      ? !!mapTreeNodeData.isLeaf
      : !mapTreeNodeData.children?.length,
    isTail,
    blockNode: !!treeProps?.blockNode,
    showLine: !!treeProps?.showLine,
    level: parentNode ? parentNode.level + 1 : 0,
    // showLine 模式下是否显示缩进线。
    // 如果父节点是其所在层级的最后一个节点，那么所有的子节点（包括孙子节点等）在父节点所在层级的缩进格都不显示缩进线。
    lineless: parentNode ? [...parentNode.lineless, parentNode.isTail] : [],
    draggable: getBoolean(mapTreeNodeData.draggable, treeProps?.draggable),
  }
  const node = {
    ...treeNodeProps,
    treeNodeProps,
    treeNodeData,
    parent: parentNode,
    parentKey: parentNode?.key,
    pathParentKeys: parentNode
      ? [...parentNode.pathParentKeys, parentNode.key]
      : [],
  }
  return node
}
export function generateTreeData (treeData, treeProps) {
  function preOrder (tree, parentNode) {
    if (!tree) return undefined
    const {fieldNames} = treeProps
    const nodes = []
    tree.forEach((treeNodeData, index) => {
      const node = generateNode({
        treeNodeData,
        treeProps,
        parentNode,
        isTail: index === tree.length - 1,
      })
      node.children = preOrder(treeNodeData[(fieldNames?.children || 'children')], node)
      nodes.push(node)
    })
    return nodes
  }
  return preOrder(treeData)
}
```

## _components/select-view/select-view.jsx

- 将 multiple 多选，但 modelValue 是 Object 的转为 Array 值
- 将 multiple 单选，但 modelValue 是 Array 的转为 Object 值

```javascript
const validValue = computed(() => {
  // transform to array
  if (props.multiple && !isArray(props.modelValue)) {
    return props.modelValue ? [props.modelValue] : []
  }
  // transform to object
  if (!props.multiple && isArray(props.modelValue)) {
    return props.modelValue[0]
  }
  return props.modelValue
})
```

## components/input-tag/input-tag.tsx

## [CompositionEvent(复合事件)](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

```javascript
export default defineComponent({
  setup (props, {emit}) {
    const handleComposition = (e) => {
      const { value } = e.target
      console.log(e.type, `'${e.data}'`)
    }
    return {handleComposition}
  },
  render () {
    return (
      <input
        onCompositionstart={this.handleComposition}
        onCompositionupdate={this.handleComposition}
        onCompositionend={this.handleComposition}
      />
    )
  },
})
```

打开 macOS 自带中文输入法，输入 dd，触发 composition 事件：

```text
compositionstart ''
compositionupdate 'd'
compositionupdate 'd d'
compositionupdate '得到'
compositionend '得到'
```

### 处理中文输入

中文输入会触发 CompositionEvent。所以

- 未完成输入时，不应该修改 input.value。
- 完成输入时，

注意：

- handleComposition 函数：通过修改 isComposition，来标记是否处于复合事件。
- handleInput 函数：通过判断 isComposition，来决定是否修改 input.value。

```javascript
export default defineComponent({
  setup(props, { emit, slots, attrs }) {
    const isComposition = ref(false)
    const handleComposition = (e) => {
      const { value } = e.target
      if (e.type === 'compositionend') {
        isComposition.value = false
        compositionValue.value = ''
        emit('inputValueChange', value, e)
        updateInputValue(value)
      } else {
        isComposition.value = true
        compositionValue.value = computedInputValue.value + (e.data ?? '')
      }
    }
    const handleInput = (e) => {
      const { value } = e.target
      if (!isComposition.value) {
        emit('inputValueChange', value, e)
        updateInputValue(value)
      }
    }
  },
  render () {
    return (
      <input
        onInput={this.handleInput}
        onCompositionstart={this.handleComposition}
        onCompositionupdate={this.handleComposition}
        onCompositionend={this.handleComposition}
      />
    )
  },
})
```

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
    )
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
