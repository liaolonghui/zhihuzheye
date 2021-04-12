<template>
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import ValidateInput, { RulesType } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailRef = ref('')
    const emailRules: RulesType = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请填写正确的邮箱地址' }
    ]
    const passRef = ref('')
    const passRules: RulesType = [
      { type: 'required', message: '密码不能为空' }
    ]
    // 提交表单
    const router = useRouter()
    const onFormSubmit = (valid: boolean) => {
      if (valid) {
        router.push('/')
      }
    }
    return {
      emailRef,
      emailRules,
      passRef,
      passRules,
      onFormSubmit
    }
  }
})
</script>
