<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag === 'input'"
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @input="updateInput"
      @blur="validateInput"
    >
    <textarea
      v-else
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateInput"
    >
    </textarea>
    <small class="form-text invalid-feedback" v-if="inputRef.error">{{ inputRef.message }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'

interface RuleType {
  type: 'required' | 'email',
  message: string
}
export type RulesType = RuleType[]
type TagType = 'input' | 'textarea'

// 邮箱的正则
const emailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/

export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesType>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  setup (props, context) {
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    // 验证input
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
        return allPassed
      }
    }
    // 更新input
    const updateInput = (e: MouseEvent) => {
      const value = (e.target as HTMLInputElement).value
      inputRef.val = value
      context.emit('update:modelValue', value)
    }
    return {
      inputRef,
      validateInput,
      updateInput
    }
  }
})
</script>
