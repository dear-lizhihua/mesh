---
sidebar_position: 103
---

# arco-design-vue 分析 TreeSelect 组件

## 组件树结构

![](/img/optimization/arco_design_vue/arco_design_vue_analysis_1.png)

组件树结构

```text
TreeSelect
  Trigger --- arco-design-vue 封装的触发器组件（ant-design 没有）
    ResizeObserver --- arco-design-vue 内置组件，用于观测元素变化
      SelectView --- arco-design-vue 内置组件，图片上边的红色框，封装基础逻辑：单选多选、点击触发浮层、移除标签、清理标签
        InputTag --- arco-design-vue 封装的标签输入框组件（ant-design 没有）
          TransitionGroup --- Vue 内置组件，触发添加和移除标签的过渡效果
            Tag --- arco-design-vue 封装的标签组件
            Tag
            Tag
          IconExpand - 不展开时，展示 IconExpand 图标
          IconHover --- arco-design-vue 内置组件，展开时，TreeSelect 组件 hover 时，展示内部的 IconClose 图标
            IconClose
          IconHover --- arco-design-vue 内置组件，展开时，TreeSelect 组件不 hover 时，展示内部的 IconSearch 图标
            IconSearch
    Transition --- Vue 内置组件，触发过渡效果
      BaseTransition --- Vue 内置组件，触发过渡效果
        ResizeObserver --- arco-design-vue 内置组件，用于观测元素变化
          TreeSelectPanel --- arco-design-vue 内置组件，展示浮层
            Tree --- arco-design-vue 封装的树组件
```

- [arco-design-vue - 触发器 Trigger](https://arco.design/vue/component/trigger)
- [arco-design-vue - 标签输入框 InputTag](https://arco.design/react/components/input-tag)
- [arco-design-vue - 标签 Tag](https://arco.design/react/components/tag)
- [arco-design-vue - 树 Tree](https://arco.design/react/components/tree)

## DOM 结构和交互行为：输入状态和获取焦点

![](/img/optimization/arco_design_vue/arco_design_vue_analysis_2.png)

### input DOM

在 InputTag 的 Tag 组件后面，包含一个 `宽度为 12px、边框为不可见` 的 input DOM。

当最外层 `select-view DOM 被点击` 时，触发 `input DOM 获取焦点`。此时就可以展示输入光标，并且展示浮层。

### mirror DOM

在 `input DOM 输入` 时，会同步把文字渲染到 arco-select-view-mirror 这个 DOM 中。这个 DOM 的样式包含 `visibility: hidden;`，因此在渲染时不可见。

然后此时会获取 mirror DOM 的宽度，然后同步设置 input DOM 的宽度。

## DOM 结构和交互行为：展开图标、搜索图标、清空图标的显隐

基本逻辑：当最外层 `select-view DOM 被 hover` 时，此时用户可能要清空全部标签，因此展示清空图标。

### 不展开状态时，在展开图标和清空图标之间切换

- 不 hover 时，展示展开图标
- hover 时，展示清空图标

![](/img/optimization/arco_design_vue/arco_design_vue_analysis_3.png)

### 展开状态时，在搜索图标和清空图标之间切换

- 不 hover 时，展示搜索图标
- hover 时，展示清空图标

![](/img/optimization/arco_design_vue/arco_design_vue_analysis_4.png)
