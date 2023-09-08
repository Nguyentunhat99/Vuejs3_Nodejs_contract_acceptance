<template>
  <div class="search-wrapper">
    <input type="text" v-model="input" placeholder="Search ..." />
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
      <tr v-for="contract in contracts" :key="contract.id">
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
    </tbody>
  </table>
</template>

<script>
import useContracts from "../../composables/contract";
import { formatTimestampToDate } from "@/utils/common";
import { onMounted } from "vue";

export default {
  setup() {
    const { deleteContract, getContracts, contracts } = useContracts();
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
    };
  },
};
</script>
