<template>
  <div class="container">
    <global-header :user="user" />
    <!-- form -->
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="rules" v-model="emailRef" placeholder="请输入邮箱地址" />
      </div>
      <div class="mb-3">
        <label class="form-label">日期</label>
        <validate-input type="date" style="width: 300px;" />
      </div>
    </form>
    <!-- columnList -->
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
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

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailRef = ref('')
    // rules
    const emailRules: RulesType = [{
      type: 'required',
      message: '邮箱不能为空'
    }, {
      type: 'email',
      message: '请填写正确的邮箱地址'
    }]
    // 测试一下v-model起效了没
    watch(emailRef, (newState) => {
      console.log(newState)
    })
    return {
      list: testData,
      user: testUser,
      emailRef,
      rules: emailRules
    }
  }
})
</script>
