---
sidebar_position: 102
---

import Usage1 from '@site/static/img/optimization/arco_design_vue/arco_design_vue_usage_1.png';
import Usage2 from '@site/static/img/optimization/arco_design_vue/arco_design_vue_usage_2.png';

# arco-design-vue 用例调研：引用 TreeSelect 组件带来的问题

arco-design-vue 不支持单个组件样式引用

1. 组件样式风格不统一

    <img width="240px" src={Usage1} />

2. 无法引用单个组件的样式文件。参考 [@arco-design/web-vue@2.11.1/es/tree-select/style/](https://unpkg.com/browse/@arco-design/web-vue@2.11.1/es/tree-select/style/)
3. 引用全量组件的样式文件，存在两个问题。参考 [@arco-design/web-vue@2.11.1/dist/arco.min.css](https://unpkg.com/browse/@arco-design/web-vue@2.11.1/dist/arco.min.css)
    1. 样式文件体积较大(360k)
    2. 样式染污全局环境

        <img width="240px" src={Usage2} />
