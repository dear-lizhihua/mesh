---
sidebar_position: 113
---

# annotation 自定义标注

## 使用场景

在图表需要添加平均值辅助线时，我们需要通过 G2 图表的辅助元素：annotation(标注) 来实现。

annotation(标注) 主要用于在图表上标识额外的标记注解。

## API 参考

> antv v4 之前的调用方法为 chart.guide()，接口已经废弃。具体参考 [G2 4.0 升级指南 - 不兼容改动](https://g2.antv.vision/en/docs/manual/upgrade#不兼容改动)。

- [chart.annotation().line(option)](https://g2.antv.vision/zh/docs/api/general/annotation#chartannotationlineoption)
- [chart.annotation().text(option)](https://g2.antv.vision/zh/docs/api/general/annotation#chartannotationtextoption)

## 示例图片

![](/img/articles/annotation/img_1.png)

## 示例代码

复制以下代码，粘贴到 [antv 图表示例](https://g2.antv.vision/zh/examples/case/column#column2) 中，查看最终结果。

```javascript
import { Chart } from '@antv/g2'

const data = [
  { type: '未知', value: 654 },
  { type: '17 岁以下', value: 654 },
  { type: '18-24 岁', value: 4400 },
  { type: '25-29 岁', value: 5300 },
  { type: '30-39 岁', value: 6200 },
  { type: '40-49 岁', value: 3300 },
  { type: '50 岁以上', value: 1500 },
]

const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
  padding: [50],
})
chart.data(data)
chart.scale('value', {
  alias: '销售额(万)',
})

chart.axis('type', {
  tickLine: {
    alignTick: false,
  },
})
// chart.axis('value', false)

chart.tooltip({
  showMarkers: false,
})
chart.interval().position('type*value')
chart.interaction('element-active')

// 根据Y轴的值算出平均值
const getYValueMean = () => {
  let yValueTitle = 0
  data.forEach(item => {
    yValueTitle += item.value
  })
  return yValueTitle / data.length
}
// 绘制图表平均值辅助线
chart.annotation().line({
  start: ['min', getYValueMean()],
  end: ['max', getYValueMean()],
  style: {
    stroke: '#000',
    lineWidth: 2,
    lineDash: [3, 3],
    zIndex: 999,
  },
}).text({
  position: ['min', getYValueMean() * 1.05], // 可以调整标注文本和标注线之间的高度比例。
  content: '平均值：' + `${getYValueMean()}万`
})
chart.render()
```
