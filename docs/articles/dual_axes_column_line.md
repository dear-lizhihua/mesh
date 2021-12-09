---
sidebar_position: 115
---

# 使用 @antv/g2 实现一个带有预测线的柱线混合图

## 现存问题

1. 由于 [@antv/g2 图表示例](https://g2.antv.vision/zh/examples/gallery) 中，没有类似 [@antv/g2plot 图表示例](https://g2plot.antv.vision/zh/examples/dual-axes/column-line#column-line) 中的柱线混合图。
2. 之前通过 [annotation 自定义标注](https://dear-lizhihua.github.io/mesh/docs/articles/annotation) 实现的均衡线，无法满足这个需求，因为自定义标注只能实现 `直线`，无法实现 `折线`。因此不满足 `柱线混合图中展示的是折线` 这一需求。

所以我在 @antv/g2 自己实现了一个类似的图表。

## 实现方案

### 创建图表

```javascript
import { Chart } from '@antv/g2'
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
})
```

### 加载数据

```javascript
const data = [
  {time: '16 Q1', type: '移动游戏', value: 0, predict_value: 10},
  {time: '16 Q1', type: '移动购物', value: 27.8, predict_value: 10},
  {time: '16 Q1', type: '移动营销', value: 69.4, predict_value: 10},
  {time: '16 Q1', type: '共享单车', value: 12.8, predict_value: 10},
  {time: '16 Q2', type: '移动游戏', value: 0, predict_value: 20},
  {time: '16 Q2', type: '移动购物', value: 18.1, predict_value: 20},
  {time: '16 Q2', type: '移动营销', value: 72.7, predict_value: 20},
  {time: '16 Q2', type: '共享单车', value: 11.2, predict_value: 20},
  {time: '16 Q3', type: '移动游戏', value: 0, predict_value: 35},
  {time: '16 Q3', type: '移动购物', value: 40.8, predict_value: 35},
  {time: '16 Q3', type: '移动营销', value: 67.4, predict_value: 35},
  {time: '16 Q3', type: '共享单车', value: 11.8, predict_value: 35},
  {time: '16 Q4', type: '移动游戏', value: 0.1, predict_value: 55},
  {time: '16 Q4', type: '移动购物', value: 11.3, predict_value: 55},
  {time: '16 Q4', type: '移动营销', value: 69.2, predict_value: 55},
  {time: '16 Q4', type: '共享单车', value: 10.4, predict_value: 55},
  {time: '17 Q1', type: '移动游戏', value: 0.4, predict_value: 66},
  {time: '17 Q1', type: '移动购物', value: 17.3, predict_value: 66},
  {time: '17 Q1', type: '移动营销', value: 86.3, predict_value: 66},
  {time: '17 Q1', type: '共享单车', value: 14, predict_value: 66},
  {time: '17 Q2', type: '移动游戏', value: 1.2, predict_value: 82},
  {time: '17 Q2', type: '移动购物', value: 24.3, predict_value: 82},
  {time: '17 Q2', type: '移动营销', value: 68.6, predict_value: 82},
  {time: '17 Q2', type: '共享单车', value: 11.9, predict_value: 82},
  {time: '17 Q3', predict_value: 50},
  {time: '17 Q4', predict_value: 80},
  {time: '18 Q1', predict_value: 70},
  {time: '18 Q2', predict_value: 60},
  {time: '18 Q3', predict_value: 40},
  {time: '18 Q4', predict_value: 20},
]
chart.data(data)
```

### 计算堆叠值和预测值的最大值

```javascript
// 因为是堆叠数据，要先做一次聚合。然后把聚合值和预测值进行比较，找出最大值
const calculateMax = items => {
  const groupByData = items.reduce((acc, item) => {
    acc[item.time] = acc[item.time] || []
    acc[item.time].push({...item, value: item.value || 0})
    // acc[item.time].push(item.predict_value || 0)
    return acc
  }, Object.create(null))
  const stackValues = Object.keys(groupByData).map(key => {
    return groupByData[key].reduce((acc, item) => acc + item.value, 0)
  })
  const predictValues = Object.keys(groupByData).map(key => {
    return groupByData[key][0].predict_value
  })

  const calculateMax = items => {
    let max = 0
    items.forEach(item => {
      if (item > max) max = item
    })
    return max
  }
  const res = calculateMax([...stackValues, ...predictValues])
  return res
}

const max = calculateMax(data)
```

### 计算图表网格的 y 轴刻度线

注意，我们使用前一篇文章 [通过 Math.log10() 函数，计算图表网格的 y 轴刻度线](https://dear-lizhihua.github.io/mesh/docs/articles/calculate_tick/) 中提到的刻度算法，来为双 y 轴计算一个合理的值。

- 双 y 轴 `scale` 的最小值是 `0`。
- 双 y 轴 `scale` 的最大值是 `calculateTick(max, 0)`。

```javascript
const calculateTick = (max, min) => {
  if (min < 0) throw new Error('min cannot less than zero!')
  const range = max - min
  const magnitude = 10 ** Math.floor(Math.log10(range)) // 计算量级
  const residual = range / magnitude // 计算余数

  let tick
  if (residual > 5) tick = 10 * magnitude // residual>5 && residual<10`
  else if (residual > 2) tick = 5 * magnitude // residual>2 && residual<=5
  else if (residual > 1) tick = 2 * magnitude // residual>1 && residual<=2
  else tick = magnitude // residual=1
  return tick
}
chart.scale({
  value: {
    min: 0,
    max: calculateTick(max, 0),
  },
  predict_value: {
    min: 0,
    max: calculateTick(max, 0),
  },
})
```

### 隐藏双 y 轴中的一个轴

```javascript
chart.axis('time', {tickLine: null})
chart.axis('value', {position: 'right'})
chart.axis('predict_value', false)
chart.legend(false)
chart.interval().adjust({ type: 'stack' }).position('time*value').color('type', ['#40a9ff', '#1890ff', '#096dd9', '#0050b3'])
chart.line().position('time*predict_value').style({
  stroke: '#999',
  lineDash: [4, 4],
  lineWidth: 2,
  //stroke: '#1890ff',
})
```

### 绘制图表

```javascript
chart.render()
```

## 完整示例代码

复制以下代码，粘贴到 [antv 图表示例](https://g2.antv.vision/zh/examples/other/other#double-axes) 中，查看最终结果。

```javascript
import { Chart } from '@antv/g2'

const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
})

const data = [
  {time: '16 Q1', type: '移动游戏', value: 0, predict_value: 10},
  {time: '16 Q1', type: '移动购物', value: 27.8, predict_value: 10},
  {time: '16 Q1', type: '移动营销', value: 69.4, predict_value: 10},
  {time: '16 Q1', type: '共享单车', value: 12.8, predict_value: 10},
  {time: '16 Q2', type: '移动游戏', value: 0, predict_value: 20},
  {time: '16 Q2', type: '移动购物', value: 18.1, predict_value: 20},
  {time: '16 Q2', type: '移动营销', value: 72.7, predict_value: 20},
  {time: '16 Q2', type: '共享单车', value: 11.2, predict_value: 20},
  {time: '16 Q3', type: '移动游戏', value: 0, predict_value: 35},
  {time: '16 Q3', type: '移动购物', value: 40.8, predict_value: 35},
  {time: '16 Q3', type: '移动营销', value: 67.4, predict_value: 35},
  {time: '16 Q3', type: '共享单车', value: 11.8, predict_value: 35},
  {time: '16 Q4', type: '移动游戏', value: 0.1, predict_value: 55},
  {time: '16 Q4', type: '移动购物', value: 11.3, predict_value: 55},
  {time: '16 Q4', type: '移动营销', value: 69.2, predict_value: 55},
  {time: '16 Q4', type: '共享单车', value: 10.4, predict_value: 55},
  {time: '17 Q1', type: '移动游戏', value: 0.4, predict_value: 66},
  {time: '17 Q1', type: '移动购物', value: 17.3, predict_value: 66},
  {time: '17 Q1', type: '移动营销', value: 86.3, predict_value: 66},
  {time: '17 Q1', type: '共享单车', value: 14, predict_value: 66},
  {time: '17 Q2', type: '移动游戏', value: 1.2, predict_value: 82},
  {time: '17 Q2', type: '移动购物', value: 24.3, predict_value: 82},
  {time: '17 Q2', type: '移动营销', value: 68.6, predict_value: 82},
  {time: '17 Q2', type: '共享单车', value: 11.9, predict_value: 82},
  {time: '17 Q3', predict_value: 50},
  {time: '17 Q4', predict_value: 80},
  {time: '18 Q1', predict_value: 70},
  {time: '18 Q2', predict_value: 60},
  {time: '18 Q3', predict_value: 40},
  {time: '18 Q4', predict_value: 20},
]
chart.data(data)

// 因为是堆叠数据，要先做一次聚合。然后把聚合值和预测值进行比较，找出最大值
const calculateMax = items => {
  const groupByData = items.reduce((acc, item) => {
    acc[item.time] = acc[item.time] || []
    acc[item.time].push({...item, value: item.value || 0})
    // acc[item.time].push(item.predict_value || 0)
    return acc
  }, Object.create(null))
  const stackValues = Object.keys(groupByData).map(key => {
    return groupByData[key].reduce((acc, item) => acc + item.value, 0)
  })
  const predictValues = Object.keys(groupByData).map(key => {
    return groupByData[key][0].predict_value
  })

  const calculateMax = items => {
    let max = 0
    items.forEach(item => {
      if (item > max) max = item
    })
    return max
  }
  const res = calculateMax([...stackValues, ...predictValues])
  return res
}
const max = calculateMax(data)

const calculateTick = (max, min) => {
  if (min < 0) throw new Error('min cannot less than zero!')
  const range = max - min
  const magnitude = 10 ** Math.floor(Math.log10(range)) // 计算量级
  const residual = range / magnitude // 计算余数

  let tick
  if (residual > 5) tick = 10 * magnitude // residual>5 && residual<10`
  else if (residual > 2) tick = 5 * magnitude // residual>2 && residual<=5
  else if (residual > 1) tick = 2 * magnitude // residual>1 && residual<=2
  else tick = magnitude // residual=1
  return tick
}
chart.scale({
  value: {
    min: 0,
    max: calculateTick(max, 0),
  },
  predict_value: {
    min: 0,
    max: calculateTick(max, 0),
  },
})

chart.axis('time', {tickLine: null})
chart.axis('value', {position: 'right'})
chart.axis('predict_value', false)
chart.legend(false)
chart.interval().adjust({ type: 'stack' }).position('time*value').color('type', ['#40a9ff', '#1890ff', '#096dd9', '#0050b3'])
chart.line().position('time*predict_value').style({
  stroke: '#999',
  lineDash: [4, 4],
  lineWidth: 2,
  //stroke: '#1890ff',
})

chart.render()
```

## 完整实现效果

![](/img/articles/dual_axes_column_line/dual_axes.png)
