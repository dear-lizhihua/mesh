---
sidebar_position: 112
---

# tooltip 自定义提示信息

## 链接

- [AntV G2 - Tooltip 提示信息](https://g2.antv.vision/zh/docs/manual/tutorial/tooltip)
- [CPU 占用率实时监控](https://g2.antv.vision/zh/examples/case/line#line8)

## 用法

### 第一种：customContent 展示单个

![](/img/articles/tooltip/img_1.png)

#### 示例代码

```javascript
import { Chart } from '@antv/g2'
const data = [
  {"date":"yesterday","time":"13.00","cpu":63.93689627294421},{"date":"yesterday","time":"13.05","cpu":65.06585239044342},{"date":"yesterday","time":"13.10","cpu":66.42719381417056},{"date":"yesterday","time":"13.15","cpu":63.060669399125935},{"date":"yesterday","time":"13.20","cpu":64.04639809297761},{"date":"yesterday","time":"13.25","cpu":64.45117682728456},{"date":"yesterday","time":"13.30","cpu":63.35488066344804},{"date":"yesterday","time":"13.35","cpu":65.2969449309885},{"date":"yesterday","time":"13.40","cpu":66.35014444552017},{"date":"yesterday","time":"13.45","cpu":66.198378961063},{"date":"yesterday","time":"13.50","cpu":66.85520134738813},{"date":"yesterday","time":"13.55","cpu":65.05419984325125},{"date":"yesterday","time":"14.00","cpu":66.62243229531435},{"date":"yesterday","time":"14.05","cpu":66.77808066603122},{"date":"yesterday","time":"14.10","cpu":66.9144977524293},{"date":"yesterday","time":"14.15","cpu":65.05499508303669},{"date":"yesterday","time":"14.20","cpu":66.36871158902638},{"date":"yesterday","time":"14.25","cpu":63.973903073723044},{"date":"yesterday","time":"14.30","cpu":64.92585536363889},{"date":"yesterday","time":"14.35","cpu":65.17145801764055},{"date":"yesterday","time":"14.40","cpu":64.42516834555609},{"date":"yesterday","time":"14.45","cpu":63.701363912573775},{"date":"yesterday","time":"14.50","cpu":66.11568649665543},{"date":"yesterday","time":"14.55","cpu":64.0474592964878},{"date":"yesterday","time":"15.00","cpu":64.25676632707459},{"date":"yesterday","time":"15.00","cpu":65},
  {"time":"13.00","cpu":150,"date":"today"},{"time":"13.05","cpu":100,"date":"today"},{"time":"13.10","cpu":100,"date":"today"},{"time":"13.15","cpu":100,"date":"today"},{"time":"13.20","cpu":120,"date":"today"},{"time":"13.25","cpu":100,"date":"today"},{"time":"13.30","cpu":100,"date":"today"},{"time":"13.35","cpu":100,"date":"today"},{"time":"13.40","cpu":100,"date":"today"},{"time":"13.45","cpu":100,"date":"today"},{"time":"13.50","cpu":100,"date":"today"},{"time":"13.55","cpu":100,"date":"today"},{"time":"14.00","cpu":65,"date":"today"},{"time":"14.05","cpu":72.16886580736812,"date":"today"},{"time":"14.10","cpu":68.57230489482068,"date":"today"},{"time":"14.15","cpu":71.43150028596347,"date":"today"},{"time":"14.20","cpu":78.14636866352923,"date":"today"},{"time":"14.25","cpu":68.36883432160218,"date":"today"},{"time":"14.30","cpu":75.39521675212667,"date":"today"},{"time":"14.35","cpu":75.27433214647408,"date":"today"},{"time":"14.40","cpu":82.10189835378893,"date":"today"},{"time":"14.45","cpu":84.7261454369566,"date":"today"},{"time":"14.50","cpu":78.96269733695286,"date":"today"},{"time":"14.55","cpu":86.43607929073264,"date":"today"},{"time":"15.00","cpu":85,"date":"today"}
]
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
})
chart.data(data)
chart.line().position('time*cpu').color('date', ['#1890ff', '#ced4d9'])
chart.tooltip({
  customContent: (name, items) => {
    const container = document.createElement('div')
    container.className = 'g2-tooltip'
    let listItem = ''
    items.forEach((item) => {
      console.log(item)
      listItem += `<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;display:flex;align-items: center;">
  <span style="background-color:${item.mappingData.color || item.color};" class="g2-tooltip-marker"></span>
  <span style="display:inline-flex;flex:1;justify-content:space-between">
  <span style="margin-right: 16px;">${item.data.date}:</span><span>${item.value}</span></span>
</li>`
    })
    const title = `<div class="g2-tooltip-title" style="margin-top: 12px;margin-bottom: 12px;">${name}</div>`
    container.innerHTML = title + listItem
    return container
  }
})
chart.render()
```

### 第二种：.tooltip('time*cpu', (prop, value) => {}) 展示单个

![](/img/articles/tooltip/img_2.png)

#### 示例代码

```javascript
import { Chart } from '@antv/g2'
const data = [
  {"date":"yesterday","time":"13.00","cpu":63.93689627294421},{"date":"yesterday","time":"13.05","cpu":65.06585239044342},{"date":"yesterday","time":"13.10","cpu":66.42719381417056},{"date":"yesterday","time":"13.15","cpu":63.060669399125935},{"date":"yesterday","time":"13.20","cpu":64.04639809297761},{"date":"yesterday","time":"13.25","cpu":64.45117682728456},{"date":"yesterday","time":"13.30","cpu":63.35488066344804},{"date":"yesterday","time":"13.35","cpu":65.2969449309885},{"date":"yesterday","time":"13.40","cpu":66.35014444552017},{"date":"yesterday","time":"13.45","cpu":66.198378961063},{"date":"yesterday","time":"13.50","cpu":66.85520134738813},{"date":"yesterday","time":"13.55","cpu":65.05419984325125},{"date":"yesterday","time":"14.00","cpu":66.62243229531435},{"date":"yesterday","time":"14.05","cpu":66.77808066603122},{"date":"yesterday","time":"14.10","cpu":66.9144977524293},{"date":"yesterday","time":"14.15","cpu":65.05499508303669},{"date":"yesterday","time":"14.20","cpu":66.36871158902638},{"date":"yesterday","time":"14.25","cpu":63.973903073723044},{"date":"yesterday","time":"14.30","cpu":64.92585536363889},{"date":"yesterday","time":"14.35","cpu":65.17145801764055},{"date":"yesterday","time":"14.40","cpu":64.42516834555609},{"date":"yesterday","time":"14.45","cpu":63.701363912573775},{"date":"yesterday","time":"14.50","cpu":66.11568649665543},{"date":"yesterday","time":"14.55","cpu":64.0474592964878},{"date":"yesterday","time":"15.00","cpu":64.25676632707459},{"date":"yesterday","time":"15.00","cpu":65},
  {"time":"13.00","cpu":150,"date":"today"},{"time":"13.05","cpu":100,"date":"today"},{"time":"13.10","cpu":100,"date":"today"},{"time":"13.15","cpu":100,"date":"today"},{"time":"13.20","cpu":120,"date":"today"},{"time":"13.25","cpu":100,"date":"today"},{"time":"13.30","cpu":100,"date":"today"},{"time":"13.35","cpu":100,"date":"today"},{"time":"13.40","cpu":100,"date":"today"},{"time":"13.45","cpu":100,"date":"today"},{"time":"13.50","cpu":100,"date":"today"},{"time":"13.55","cpu":100,"date":"today"},{"time":"14.00","cpu":65,"date":"today"},{"time":"14.05","cpu":72.16886580736812,"date":"today"},{"time":"14.10","cpu":68.57230489482068,"date":"today"},{"time":"14.15","cpu":71.43150028596347,"date":"today"},{"time":"14.20","cpu":78.14636866352923,"date":"today"},{"time":"14.25","cpu":68.36883432160218,"date":"today"},{"time":"14.30","cpu":75.39521675212667,"date":"today"},{"time":"14.35","cpu":75.27433214647408,"date":"today"},{"time":"14.40","cpu":82.10189835378893,"date":"today"},{"time":"14.45","cpu":84.7261454369566,"date":"today"},{"time":"14.50","cpu":78.96269733695286,"date":"today"},{"time":"14.55","cpu":86.43607929073264,"date":"today"},{"time":"15.00","cpu":85,"date":"today"}
]
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
})
chart.data(data)
chart.line().position('time*cpu').color('date', ['#1890ff', '#ced4d9']).tooltip('time*cpu', (prop, value) => {
  return {
    title: Number(prop),
    name: 'CPU',
    value: value.toLocaleString(),
  }
})
chart.render()
```

#### 缺陷

只能取到 prop 和 value。

#### 注意事项

只能这么用

```javascript
chart
  .line().position('time*cpu').color('date', ['#1890ff', '#ced4d9'])
  .tooltip('time*cpu', (prop, value) => {})
```

不能这么用
```javascript
chart.line().position('time*cpu').color('date', ['#1890ff', '#ced4d9'])
chart.tooltip('time*cpu', (prop, value) => {})
```

### 第三种：containerTpl, itemTpl 展示多个

![](/img/articles/tooltip/img_3.png)

#### 示例代码

```javascript
import { Chart } from '@antv/g2'
const data = [
  {"date":"yesterday","time":"13.00","cpu":63.93689627294421},{"date":"yesterday","time":"13.05","cpu":65.06585239044342},{"date":"yesterday","time":"13.10","cpu":66.42719381417056},{"date":"yesterday","time":"13.15","cpu":63.060669399125935},{"date":"yesterday","time":"13.20","cpu":64.04639809297761},{"date":"yesterday","time":"13.25","cpu":64.45117682728456},{"date":"yesterday","time":"13.30","cpu":63.35488066344804},{"date":"yesterday","time":"13.35","cpu":65.2969449309885},{"date":"yesterday","time":"13.40","cpu":66.35014444552017},{"date":"yesterday","time":"13.45","cpu":66.198378961063},{"date":"yesterday","time":"13.50","cpu":66.85520134738813},{"date":"yesterday","time":"13.55","cpu":65.05419984325125},{"date":"yesterday","time":"14.00","cpu":66.62243229531435},{"date":"yesterday","time":"14.05","cpu":66.77808066603122},{"date":"yesterday","time":"14.10","cpu":66.9144977524293},{"date":"yesterday","time":"14.15","cpu":65.05499508303669},{"date":"yesterday","time":"14.20","cpu":66.36871158902638},{"date":"yesterday","time":"14.25","cpu":63.973903073723044},{"date":"yesterday","time":"14.30","cpu":64.92585536363889},{"date":"yesterday","time":"14.35","cpu":65.17145801764055},{"date":"yesterday","time":"14.40","cpu":64.42516834555609},{"date":"yesterday","time":"14.45","cpu":63.701363912573775},{"date":"yesterday","time":"14.50","cpu":66.11568649665543},{"date":"yesterday","time":"14.55","cpu":64.0474592964878},{"date":"yesterday","time":"15.00","cpu":64.25676632707459},{"date":"yesterday","time":"15.00","cpu":65},
  {"time":"13.00","cpu":150,"date":"today"},{"time":"13.05","cpu":100,"date":"today"},{"time":"13.10","cpu":100,"date":"today"},{"time":"13.15","cpu":100,"date":"today"},{"time":"13.20","cpu":120,"date":"today"},{"time":"13.25","cpu":100,"date":"today"},{"time":"13.30","cpu":100,"date":"today"},{"time":"13.35","cpu":100,"date":"today"},{"time":"13.40","cpu":100,"date":"today"},{"time":"13.45","cpu":100,"date":"today"},{"time":"13.50","cpu":100,"date":"today"},{"time":"13.55","cpu":100,"date":"today"},{"time":"14.00","cpu":65,"date":"today"},{"time":"14.05","cpu":72.16886580736812,"date":"today"},{"time":"14.10","cpu":68.57230489482068,"date":"today"},{"time":"14.15","cpu":71.43150028596347,"date":"today"},{"time":"14.20","cpu":78.14636866352923,"date":"today"},{"time":"14.25","cpu":68.36883432160218,"date":"today"},{"time":"14.30","cpu":75.39521675212667,"date":"today"},{"time":"14.35","cpu":75.27433214647408,"date":"today"},{"time":"14.40","cpu":82.10189835378893,"date":"today"},{"time":"14.45","cpu":84.7261454369566,"date":"today"},{"time":"14.50","cpu":78.96269733695286,"date":"today"},{"time":"14.55","cpu":86.43607929073264,"date":"today"},{"time":"15.00","cpu":85,"date":"today"}
]
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
})
chart.data(data)
chart.line().position('time*cpu').color('date', ['#1890ff', '#ced4d9'])
chart.tooltip({
  // tooltip 容器模板
  containerTpl: `<div class="g2-tooltip">
    <div class="g2-tooltip-title" style="margin:10px 0;"></div>
    <ul class="g2-tooltip-list"></ul>
</div>`,
  // tooltip 每项记录的默认模板
  itemTpl: `<li data-index={index}>
  <span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}
</li>`,
})
chart.render()
```
