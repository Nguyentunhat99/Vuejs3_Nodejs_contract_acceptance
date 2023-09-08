<template>
  <RouterLink
    :to="{ name: 'create.contract' }"
    class="btn btn-primary mt-2"
    >Create contract +</RouterLink
  >
  <ContractList  />
</template>
<script>
import ContractList from "../../components/contract/ContractList.vue";

export default {
  name: "ContractsPage",
  components: {
    ContractList,
  },
};
</script>
