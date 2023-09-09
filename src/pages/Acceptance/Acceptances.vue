<template>
  <AcceptanceList />
</template>
<script>
import AcceptanceList from "@/components/acceptance/AcceptanceList.vue";

export default {
  name: "AcceptancesPage",
  components: {
    AcceptanceList,
  },
  // setup() {
  //   const { acceptances, getAcceptances } = useAcceptances();
  //   onMounted(getAcceptances);

    // return {
    //   // acceptances,
    // };
  // },
};
</script>
