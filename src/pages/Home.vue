<template>
  <h1>Home Page</h1>
  <p>Counter: {{ trackCounter }}</p>
  <button @click="incrementCounter">Increment</button>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: "HomePage",
    setup() {
    const store = useStore()

    function incrementCounter() {
      store.dispatch('increment', 2)//dispatch actions
    }

    const trackCounter = computed(() => {
      return store.getters.getCounter
    })

    return {
      trackCounter,
      incrementCounter
    }
  },
};
</script>
