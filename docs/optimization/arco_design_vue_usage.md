---
sidebar_position: 101
---

import Usage1Url from '@site/static/img/optimization/arco_design_vue/arco_design_vue_usage_1.png';
import Usage2Url from '@site/static/img/optimization/arco_design_vue/arco_design_vue_usage_2.png';

# 混用组件库带来的问题

## 为什么要混用组件库？

以实际的使用场景说明：虽然目前在使用 ant-design-vue 组件库，但是如果组件库不满足需求（例如交互扩展、调整样式），我们就需要额外寻找其他组件库单个组件（例如 arco-design-vue 组件库的 TreeSelect 组件）或第三方组件（例如 vue3-treeselect 组件），来代替 ant-design-vue 内部某个组件。

### 抛弃现有组件库的代价巨大

无法完全抛弃现有组件库，因为切换组件库的代价巨大，在实际业务支持中也不现实，主要面临两个问题：

- 研发人员重新更换组件接口的成本
- 测试人员重新测试组件交互的成本

因此，可能需要混用组件库，来减少组件库某些组件的依赖。

## 混用组件库可能产生的问题

1. 样式风格不统一

    <img width="240px" src={Usage1Url} />

    （上面的 Select 组件来自 ant-design-vue，下面的 TreeSelect 组件来自 arco-design-vue）

2. 无法引用单个组件的样式文件。参考 [@arco-design/web-vue@2.11.1/es/tree-select/style/](https://unpkg.com/browse/@arco-design/web-vue@2.11.1/es/tree-select/style/)
3. 如果引用全量组件的样式文件，存在两个问题。参考 [@arco-design/web-vue@2.11.1/dist/arco.min.css](https://unpkg.com/browse/@arco-design/web-vue@2.11.1/dist/arco.min.css)
    1. 样式文件体积较大(360k)
    2. 样式染污全局环境

        <img width="240px" src={Usage2Url} />

## 尝试混用组件库：在已经引用现有组件库的情况下，如何引用其他组件库的单个组件？

### 解决方案：划分组件层级为基础组件和定制基础组件

个人认为应该划分出

- 基础组件，例如 Tree, Tag 组件是通用的组件，样式跟随原先的组件库。
- 定制基础组件，例如 TreeSelect 组件，这些都是需要根据业务需求进行扩展的组件，交互和样式自己扩展。

因此，我们只需要理解 TreeSelect 逻辑，在基础组件的基础上进行二次封装，这样对于 TreeSelect 自身的交互和样式是可控的。

也就是说，TreeSelect 组件需要自己把控逻辑，Tree, Tag 组件不需要把控逻辑，只关注组件接口。

如果未来更换 Tree, Tag 组件，只需要调整组件接口，也不会影响到上层的 TreeSelect 组件。
