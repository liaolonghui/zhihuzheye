<template>
  <div class="column-detail-page w-75  mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 aligin-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle w-100 border">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <!-- list -->
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PostList from '../components/PostList.vue'

export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const currentId = +route.params.id // 使用+快速转换为number类型
    const column = computed(() => store.state.columns.find((column: { id: number }) => column.id === currentId))
    const list = computed(() => store.state.posts.filter((post: { columnId: number }) => post.columnId === currentId))
    return {
      route,
      column,
      list
    }
  }
})
</script>
