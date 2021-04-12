<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="formSubmit">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type validateFunc = () => boolean
export const emitter: any = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    const funcArr: validateFunc[] = [] // 保存所有input的验证函数
    const formSubmit = () => {
      const result = funcArr.map(func => func()).every(res => res)
      context.emit('form-submit', result)
    }
    // 监听form-item-created事件
    const callback = (func: validateFunc) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    return {
      formSubmit
    }
  }
})
</script>
