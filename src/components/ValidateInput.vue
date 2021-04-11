<template>
  <div class="validate-input-container pb-3">
    <input type="email" class="form-control" :class="{ 'is-invalid': inputRef.error }" v-model="inputRef.val" @blur="validateInput">
    <small class="form-text invalid-feedback" v-if="inputRef.error">{{ inputRef.message }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

interface RuleType {
  type: 'required' | 'email',
  message: string
}
export type RulesType = RuleType[]

// 邮箱的正则
const emailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesType>
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      // 循环遍历所有验证规则
      if (props.rules) {
        // every只有全部true时才会返回true
        const allPassed = props.rules.every(rule => {
          let passed = true // 默认通过
          inputRef.message = rule.message //  别忘了错误提示信息
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          // 规则没通过passed就会变成false
          return passed
        })
        // 设置错误信息
        inputRef.error = !allPassed // 别忘了取个反
      }
    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>
