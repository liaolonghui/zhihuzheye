<template>
  <!-- columnList -->
  <column-list :list="list" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'

import { testData } from '../testData' // 测试数据

export default defineComponent({
  name: 'ColumnDeatil',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>
