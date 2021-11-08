---
sidebar_position: 100
---

# 在 Vue 项目中使用观察者模式

## 场景

## 伪代码

### template

```html
<div class="report">
  <div class="report__filter">
    <Filter @initial="initialFilter" @change="changeFilter" />
  </div>
  <div class="report__content">
    <Table :columns="columns" :data="data" />
  </div>
</div>
```

### script

```javascript
import {inject} from 'vue'
import Filter from '/@/components/report/filter/index.vue'
import Table from '/@/components/report/table/index.vue'

import observerLogic from '/@/components/report/models/observer'
import tableLogic from '/@/components/report/models/table'

export default {
  name: 'LineItem',
  components: {Filter, Table},
  setup() {
    const apiServices = inject('apiServices')
    const $message = inject('$message')
    const {columns, data, searchByInitialFilter, searchByChangeFilter} = tableLogic({apiServices, $message})

    const {initialFilter, changeFilter} = observerLogic({searchByInitialFilter, searchByChangeFilter})

    return {
      columns,
      data,
      initialFilter,
      changeFilter,
    }
  }
}
```

### observerLogic

```javascript
import {Observer, Subject} from 'lizhihua__shared-utils'

export default function ({searchByInitialFilter, searchByChangeFilter} = {}) {
  const subject = new Subject()

  // 观察者
  class ObserverTable extends Observer {
    update (message, values) {
      if (message === 'initial-filter') {
        searchByInitialFilter(values)
      } else if (message === 'change-filter') {
        searchByChangeFilter(values)
      }
    }
  }
  const observerTable = new ObserverTable()
  subject.subscribe(observerTable)

  // 主题事件
  const initialFilter = (values) => subject.notify('initial-filter', values)
  const changeFilter = (values) => subject.notify('change-filter', values)

  return {
    initialFilter,
    changeFilter,
  }
}
```
