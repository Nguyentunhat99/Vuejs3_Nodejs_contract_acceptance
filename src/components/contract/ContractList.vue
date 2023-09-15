<template>
  <div class="d-flex justify-content-between align-items-center mr-3 mt-5">
    <RouterLink :to="{ name: 'create.contract' }" class="btn btn-primary mt-2"
      >Create contract +</RouterLink
    >
    <div>
      <span>Search field: </span>
      <select v-model="searchField" class="mr-2 ml-1">
        <option value="contract_number">Contract Number</option>
        <option value="contract_name">Contract Name</option>
        <option value="customer_id">Customer</option>
        <option value="status">Status</option>
        <option value="description">Description</option>
      </select>
      <input type="text" v-model="input" placeholder="Search contract..." />
    </div>
  </div>
  <table class="table mt-2">
    <thead>
      <tr class="bg-dark text-white">
        <th>ID</th>
        <th>Contract Number</th>
        <th>Contract Name</th>
        <th>Sign Date</th>
        <th>Contract Value</th>
        <th>Customer</th>
        <th>status</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="contract in searchedContracts" :key="contract.id">
        <td>{{ contract.id }}</td>
        <td>{{ contract.contract_number }}</td>
        <td>{{ contract.contract_name }}</td>
        <td>{{ formatTimeStamp(contract.sign_date) }}</td>
        <td>{{ contract.contract_value }}</td>
        <td>{{ contract.customer_id }}</td>
        <td>{{ contract.status }}</td>
        <td>{{ contract.description }}</td>
        <td>
          <RouterLink
            :to="{ name: 'contract.edit', params: { id: contract.id } }"
            class="btn btn-primary mr-2"
            >Update</RouterLink
          > 
          <button
            @click="handleDeleteContract(contract.id)"
            class="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="9" v-if="input && !searchedContracts.length">
          <h4 class="text-danger text-center">No results found!</h4>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import useContracts from "../../composables/contract";
import { formatTimestampToDate } from "@/utils/common";
import { computed, onMounted, ref, watch } from "vue";

export default {
  setup() {
    const { deleteContract, getContracts, contracts } = useContracts();
    const input = ref("");
    const searchField = ref("contract_number");

    watch(input, (newVal, oldVal) => {
      console.log(newVal,oldVal);
    })

    const searchedContracts = computed(() => {
      return contracts.value.filter((contract) => {
        // console.log(contract[searchField.value]);
        // console.log(contract.contract_number);
        // console.log(contract[searchField.value] === contract.contract_number);

        return contract[searchField.value]
          .toLowerCase()
          .includes(input.value.toLowerCase());
      });
    });

    const handleDeleteContract = async (id) => {
      if (!window.confirm("You sure?")) {
        return;
      }
      await deleteContract(id);
    };

    onMounted(getContracts);

    const formatTimeStamp = (timestamp) => {
      return formatTimestampToDate(timestamp);
    };

    return {
      handleDeleteContract,
      formatTimeStamp,
      contracts,
      searchedContracts,
      input,
      searchField,
    };
  },
};
</script>
