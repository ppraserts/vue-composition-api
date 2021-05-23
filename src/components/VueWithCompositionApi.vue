<template>
  <div>
      <h1>Vue with Composition API : {{ counter }}</h1>
      <button @click="increaseCounter">+</button>
      <button @click="decreaseCounter">-</button>
      <br/><br/>
      <div class="select">
        <select>
            <option v-for="todoItem in result.data" :key="todoItem.id" :value="todoItem.id">
                {{ todoItem.title }}
            </option>
        </select>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted, onUpdated, onUnmounted, reactive } from 'vue'
export default {
    setup() {
        // ========== Counter Logic ======
        const counter = ref(0)
        const increaseCounter = () =>  {
            counter.value++;
        }
        const decreaseCounter= () =>  {
            counter.value--;
        }

        // ========== Load jsonplaceholder API Logic ======
        const result = reactive({ data: [] })
        onMounted(async () => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            result.data = res.data
            console.log('mounted!')
        })
        onUpdated(() => {
            console.log('updated!')
        })
        onUnmounted(() => {
            console.log('unmounted!')
        })

        return {
            counter,
            increaseCounter,
            decreaseCounter,
            result
        }
    }
}
</script>