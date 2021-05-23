<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <VueWithoutCompositionApi />
  <hr />
  <VueWithCompositionApi />
  <hr />
  <VueWithHookCompositionApi />
  <hr />
  <VueWithStateManagementCompositionApi />
</template>

<script>
import { provide } from 'vue'
import store from '@/store'
import VueWithoutCompositionApi from './components/VueWithoutCompositionApi.vue'
import VueWithCompositionApi from './components/VueWithCompositionApi.vue'
import VueWithHookCompositionApi from './components/VueWithHookCompositionApi.vue'
import VueWithStateManagementCompositionApi from './components/VueWithStateManagementCompositionApi.vue'

export default {
  name: 'App',
  setup() {
    provide('store', store)
  },
  components: {
    VueWithoutCompositionApi,
    VueWithCompositionApi,
    VueWithHookCompositionApi,
    VueWithStateManagementCompositionApi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  font-size: 16px;
  padding: 10px 28px;
  margin: 0 5px;
}
.textbox {
	border: 1px dotted #000000;
	outline:0;
	height:25px;
	width: 275px;
}
</style>
