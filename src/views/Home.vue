<template>
  <!-- columnList -->
  <column-list :list="list" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore()
    const list = computed(() => store.state.columns)
    return {
      list
    }
  }
})
</script>
