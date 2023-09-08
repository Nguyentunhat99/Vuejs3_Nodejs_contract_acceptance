<template>
  <RouterLink
    :to="{ name: 'create.acceptance' }"
    class="btn btn-primary mt-2"
    >Create acceptance +</RouterLink
  >
  <AcceptanceList :acceptances="acceptances" />
</template>
<script>
import AcceptanceList from "@/components/acceptance/AcceptanceList.vue";
import useAcceptances from "../../composables/acceptance";
import { onMounted } from "vue";

export default {
  name: "AcceptancesPage",
  components: {
    AcceptanceList,
  },
  setup() {
    const { acceptances, getAcceptances } = useAcceptances();
    onMounted(getAcceptances);

    return {
      acceptances,
    };
  },
};
</script>
