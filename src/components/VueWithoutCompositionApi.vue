<template>
  <div>
      <h1>Vue without Composition API : {{ counter }}</h1>
      <button @click="increaseCounter">+</button>
      <button @click="decreaseCounter">-</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        increaseCounter: function() {
            this.counter++;
        },
        decreaseCounter: function() {
            this.counter--;
        }
    }
}
</script>