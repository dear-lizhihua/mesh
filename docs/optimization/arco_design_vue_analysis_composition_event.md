---
sidebar_position: 105
---

# arco-design-vue 分析 CompositionEvent

## 什么是 CompositionEvent？

参考 [MDN - CompositionEvent(复合事件)](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

## 分析 arco-design-vue 中的 CompositionEvent

### 源码实现

代码位于 [arco-design-vue/packages/web-vue/components/input-tag/input-tag.tsx](https://github.com/arco-design/arco-design-vue/blob/main/packages/web-vue/components/input-tag/input-tag.tsx)

### 简化代码

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

## 如何处理中文输入？

中文输入会触发 CompositionEvent。所以

- 未完成输入时，不应该修改 input.value。
- 完成输入时，一次性修改 input.value。

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
