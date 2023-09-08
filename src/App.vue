<template>
  <NavComp />
  <RouterView />
</template>

<script>
import NavComp from "./components/Nav.vue"
export default {
  name: "App",
  components: {NavComp},
};
</script>
