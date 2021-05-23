<template>
  <div>
      <h1>Vue with hook Composition API : {{ counter }}</h1>
      <button @click="increaseCounter">+</button>
      <button @click="decreaseCounter">-</button>
  </div>
</template>

<script>
import useCounter from '@/hooks/useCounter'
export default {
    setup() {
        return {
            ...useCounter.useCounterHook(0)
        }
    }
}
</script>