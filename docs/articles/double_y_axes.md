---
sidebar_position: 101
---

# 使用双 Y 轴折线图

## 链接

- [双 Y 轴折线图](https://g2.antv.vision/zh/examples/line/basic#double-y-axes)

## 简化代码

### data 数据

```javascript
const data = [
  {date: 1489593600000, pv: 17, time: 12351000},
  {date: 1489680000000, pv: 10, time: 18000},
  {date: 1489766400000, pv: 3, time: 0},
  {date: 1489852800000, pv: 3, time: 0},
  {date: 1489939200000, pv: 18, time: 21157000},
  {date: 1490025600000, pv: 32, time: 3543000},
  {date: 1490112000000, pv: 25, time: 10000},
  {date: 1490198400000, pv: 23, time: 24000},
  {date: 1490284800000, pv: 7, time: 0},
]
```

### 实例化 chart，加载 data

```javascript
import { Chart } from '@antv/g2'
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500
})
chart.data(data)
```

### 数据字段

- 声明 `数据字段` 的别名。
- X 轴 date 字段设置为时间轴。

```javascript
chart.scale({
  date: {alias: '日期', type: 'time'},
  pv: {alias: '进入次数'},
  time: {alias: '平均时长'},
  count: {alias: '次数'},
})
```

### 隐藏右侧 Y 轴

现在有两个 Y 轴，我们隐藏掉其中的一个 Y 轴。

```javascript
chart.axis('time', {grid: null})
```

### 定义图表类型

- 声明两个折线图。
- 其中一个折线图的横坐标和纵坐标，分别是 date 和 pv。
- 另一个折线图的横坐标和纵坐标，分别是 date 和 time。
- 两条折线，分别使用不同的颜色。

```
chart.line().position('date*pv').color('#4FAAEB')
chart.line().position('date*time').color('#9AD681')
```
