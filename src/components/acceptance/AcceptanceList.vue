<template>
  <div class="d-flex justify-content-between align-items-center mr-3 mt-5">
    <RouterLink :to="{ name: 'create.acceptance' }" class="btn btn-primary mt-2"
      >Create acceptance +</RouterLink
    >
    <input type="text" v-model="input" placeholder="Search contract..." />
  </div>
  <table class="table mt-2">
    <thead>
      <tr class="bg-dark text-white">
        <th>ID</th>
        <th>Contract Id</th>
        <th>Acceptance Name</th>
        <th>Acceptance Amount</th>
        <th>Volume</th>
        <th>Status</th>
        <th>Acceptance Date</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="acceptance in searchedAcceptances" :key="acceptance.id">
        <td>{{ acceptance.id }}</td>
        <td>{{ acceptance.contract_id }}</td>
        <td>{{ acceptance.acceptance_name }}</td>
        <td>{{ acceptance.acceptance_amount }}</td>
        <td>{{ acceptance.volume }}</td>
        <td>{{ acceptance.status }}</td>
        <td>{{ formatTimeStamp(acceptance.acceptance_date) }}</td>
        <td>{{ acceptance.description }}</td>
        <td>
          <RouterLink
            :to="{ name: 'acceptance.edit', params: { id: acceptance.id } }"
            class="btn btn-primary mr-2"
            >Update</RouterLink
          >
          <button
            @click="handleDeleteAcceptance(acceptance.id)"
            class="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
      <tr>
        <div
          class="d-flex justify-content-center"
          v-if="input && !searchedAcceptances.length"
        >
          <h4 class="text-danger">No results found!</h4>
        </div>
      </tr>
    </tbody>
  </table>
</template>

<script>
import useAcceptances from "../../composables/acceptance";
import { computed, ref, onMounted } from "vue";

import { formatTimestampToDate } from "@/utils/common";

export default {
  setup() {
    const { deleteAcceptance, acceptances, getAcceptances } = useAcceptances();
    const input = ref("");

    const handleDeleteAcceptance = async (id) => {
      if (!window.confirm("You sure?")) {
        return;
      }
      await deleteAcceptance(id);
    };

    onMounted(getAcceptances);


    const formatTimeStamp = (timestamp) => {
      return formatTimestampToDate(timestamp);
    };

    const searchedAcceptances = computed(() => {
      return acceptances.value.filter((acceptance) => {
        return acceptance.acceptance_name
          .toLowerCase()
          .includes(input.value.toLowerCase());
      });
    });

    return {
      handleDeleteAcceptance,
      formatTimeStamp,
      input,
      searchedAcceptances,
      acceptances
    };
  },
};
</script>
