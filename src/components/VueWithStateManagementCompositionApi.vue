<template>
  <div>
      <h1>Vue with state management Composition API : {{ store.state.counter }}</h1>
      <h2 :style="{ color: store.state.colorCode }">{{ store.state.counter }} <sup>2</sup> = {{ store.getters.counterSquared() }}</h2>
      <input v-model="colorCode" type="text" placeholder="Enter Color Code" class="textbox" /><br/><br/>
      <button @click="store.methods.increaseCounter">+</button>
      <button @click="store.methods.decreaseCounter">-</button>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
export default {
    setup() {
        const store = inject('store')

        const colorCode = computed({
            get() {
                return store.state.colorCode
            },
            set(val) {
                store.methods.setColorCode(val)
            }
        })

        return {
            store,
            colorCode
        }
    }
}
</script>