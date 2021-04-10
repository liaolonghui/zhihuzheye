<template>
  <div class="container">
    <global-header :user="user" />
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const testUser: UserProps = {
  id: 1,
  name: 'aaa',
  isLogin: true
}

const testData: ColumnProps[] = [
  {
    id: 1,
    avatar: 'https://picsum.photos/id/237/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 2,
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 1,
    avatar: 'https://picsum.photos/id/237/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 2,
    avatar: 'https://picsum.photos/id/300/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 1,
    avatar: 'https://picsum.photos/id/237/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 2,
    avatar: 'https://picsum.photos/id/300/300/300',
    title: 'aaa',
    description: 'bbb'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      user: testUser
    }
  }
})
</script>
