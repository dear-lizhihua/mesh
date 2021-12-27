---
sidebar_position: 105
---

# arco-design-vue 初步优化方案：样式优化

### 分析原因

样式文件体积较大的原因是，arco-design-vue 打包了全部组件的样式。

因此，我们只需要打包 TreeSelect 组件自身依赖的组件的所有样式。

### 实现方案：修改打包脚本，重新打包生成

在 [arco-design-vue/packages/arco-vue-scripts/src/scripts/lessgen/index.ts](https://github.com/arco-design/arco-design-vue/blob/main/packages/arco-vue-scripts/src/scripts/lessgen/index.ts) 这个文件中，包含了 arco-design-vue 打包样式的代码。

```javascript
const lessFiles = glob.sync('**/style/index.less', {
  cwd: paths.components,
  ignore: ['style/index.less', 'trigger/style/index.less'],
})
```

列表如下

```json
[
  "_components/dropdown/style/index.less",
  "_components/input-label/style/index.less",
  "_components/picker/style/index.less",
  "_components/select-view/style/index.less",
  "affix/style/index.less",
  "alert/style/index.less",
  "anchor/style/index.less",
  "auto-complete/style/index.less",
  "avatar/style/index.less",
  "back-top/style/index.less",
  "badge/style/index.less",
  "breadcrumb/style/index.less",
  "button/style/index.less",
  "card/style/index.less",
  "carousel/style/index.less",
  "cascader/style/index.less",
  "checkbox/style/index.less",
  "collapse/style/index.less",
  "comment/style/index.less",
  "date-picker/style/index.less",
  "descriptions/style/index.less",
  "divider/style/index.less",
  "drawer/style/index.less",
  "empty/style/index.less",
  "form/style/index.less",
  "grid/style/index.less",
  "image/style/index.less",
  "input-number/style/index.less",
  "input-tag/style/index.less",
  "input/style/index.less",
  "link/style/index.less",
  "list/style/index.less",
  "message/style/index.less",
  "modal/style/index.less",
  "notification/style/index.less",
  "page-header/style/index.less",
  "pagination/style/index.less",
  "popconfirm/style/index.less",
  "popover/style/index.less",
  "progress/style/index.less",
  "radio/style/index.less",
  "rate/style/index.less",
  "resize-box/style/index.less",
  "result/style/index.less",
  "select/style/index.less",
  "skeleton/style/index.less",
  "slider/style/index.less",
  "space/style/index.less",
  "spin/style/index.less",
  "split/style/index.less",
  "statistic/style/index.less",
  "steps/style/index.less",
  "switch/style/index.less",
  "table/style/index.less",
  "tabs/style/index.less",
  "tag/style/index.less",
  "textarea/style/index.less",
  "time-picker/style/index.less",
  "timeline/style/index.less",
  "tooltip/style/index.less",
  "transfer/style/index.less",
  "tree-select/style/index.less",
  "tree/style/index.less",
  "typography/style/index.less",
  "upload/style/index.less"
]
```

但实际上，TreeSelect 组件只用到如下样式

```json
[
  "_components/select-view/style/index.less",
  "checkbox/style/index.less",
  "tag/style/index.less",
  "tree-select/style/index.less",
  "tree/style/index.less"
]
```

```javascript
const lessgen = () => {
  let lessContent = `@import './style/index.less';\n@import './trigger/style/index.less';\n`;
  // const lessFiles = glob.sync('**/style/index.less', {
  //   cwd: paths.components,
  //   ignore: ['style/index.less', 'trigger/style/index.less'],
  // });
  const lessFiles = [
    '_components/select-view/style/index.less',
    'checkbox/style/index.less',
    'tag/style/index.less',
    'tree-select/style/index.less',
    'tree/style/index.less',
  ]
  lessFiles.forEach((value) => {
    lessContent += `@import './${value}';\n`;
  });
  fs.outputFileSync(path.resolve(paths.components, 'index.less'), lessContent);
  console.log('generate index.less success');
}
```
执行构建后，我们查看 `arco-design-vue/packages/web-vue/components/index.less` 文件，内容如下：

```less
@import './style/index.less';
@import './trigger/style/index.less';
@import './_components/select-view/style/index.less';
@import './checkbox/style/index.less';
@import './tag/style/index.less';
@import './tree-select/style/index.less';
@import './tree/style/index.less';
```

构建结束后，可以得到 60K 大小的样式文件。等于我们优化了 360-60=300K 左右的样式内容。
