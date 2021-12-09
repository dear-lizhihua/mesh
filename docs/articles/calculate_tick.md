# 通过 Math.log10() 函数，计算图表网格的 y 轴刻度线

## 什么是 Math.log10() 函数？

[Math.log10() 函数返回一个以 10 为底的对数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10)。

## 什么是计算图表网格的 y 轴刻度线？

例如：

- 一组数据的最大值是 94000，那我希望 y 轴显示从 0 到 100000。
- 一组数据的最大值是 47000，那我希望 y 轴显示从 0 到 50000。

## 刻度算法

- [Algorithm for "nice" grid line intervals on a graph](https://stackoverflow.com/questions/361681/algorithm-for-nice-grid-line-intervals-on-a-graph)
- [Algorithm for “Nice” Grid Line Intervals on a Graph](https://www.baeldung.com/cs/grid-line-intervals-on-graph)

```javascript
const calculateTick = (max, min) => {
  if (min < 0) throw new Error('min cannot less than zero!')
  const range = max - min
  const magnitude = 10 ** Math.floor(Math.log10(range)) // 计算量级
  const residual = range / magnitude // 计算余数
  // console.log(magnitude)
  // console.log(residual)

  let tick
  if (residual > 5) tick = 10 * magnitude // residual>5 && residual<10`
  else if (residual > 2) tick = 5 * magnitude // residual>2 && residual<=5
  else if (residual > 1) tick = 2 * magnitude // residual>1 && residual<=2
  else tick = magnitude // residual=1
  return tick
}
```

## 验证结果

### 大于 1 的情况

```javascript
console.log('calculateTick(90000, 0): ', calculateTick(90000, 0)) // 100000
console.log('calculateTick(70000, 0): ', calculateTick(70000, 0)) // 100000
console.log('calculateTick(50000, 0): ', calculateTick(50000, 0)) // 50000
console.log('calculateTick(20000, 0): ', calculateTick(20000, 0)) // 20000
console.log('calculateTick(10000, 0): ', calculateTick(10000, 0)) // 10000
```

### 小于 1 的情况

```javascript
console.log('calculateTick(0.9, 0): ', calculateTick(0.9, 0)) // 1
console.log('calculateTick(0.7, 0): ', calculateTick(0.7, 0)) // 1
console.log('calculateTick(0.5, 0): ', calculateTick(0.5, 0)) // 0.5
console.log('calculateTick(0.2, 0): ', calculateTick(0.2, 0)) // 0.2
console.log('calculateTick(0.1, 0): ', calculateTick(0.1, 0)) // 0.1
```

### 下界小于 0 的情况

不能拿小于零的数进行计算，因为暂时没有考虑范围值偏移的情况。

```javascript
console.log('calculateTick(50000, -50000): ', calculateTick(50000, -50000)) // 如果计算，得到的是 100000
// Error: min cannot less than zero!
```
