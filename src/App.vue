<template>
  <div class="container">
    <global-header :user="user" />
    <!-- form -->
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="rules" />
      </div>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="rules" />
      </div>
    </form>
    <!-- columnList -->
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesType } from './components/ValidateInput.vue'

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

// rules
const emailRules: RulesType = [{
  type: 'required',
  message: '邮箱不能为空'
}, {
  type: 'email',
  message: '请填写正确的邮箱地址'
}]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    return {
      list: testData,
      user: testUser,
      rules: emailRules
    }
  }
})
</script>
