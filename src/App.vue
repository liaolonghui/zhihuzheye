<template>
  <div class="container">
    <!-- header -->
    <global-header :user="user" />
    <!-- form -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailRef" placeholder="请输入邮箱地址" />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input :rules="passRules" v-model="passRef" />
      </div>
      <template #submit>
        <button class="btn btn-danger">Submit</button>
      </template>
    </validate-form>
    <!-- columnList -->
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesType } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'

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
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailRef = ref('')
    // rules
    const emailRules: RulesType = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请填写正确的邮箱地址' }
    ]
    const passRef = ref('')
    const passRules: RulesType = [
      { type: 'required', message: '密码不能为空' }
    ]
    // 提交表单
    const onFormSubmit = (valid: boolean) => {
      console.log(valid)
    }
    return {
      list: testData,
      user: testUser,
      emailRef,
      emailRules,
      passRef,
      passRules,
      onFormSubmit
    }
  }
})
</script>
