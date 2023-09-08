<template>
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
      <tr v-for="acceptance in acceptances" :key="acceptance.id">
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
    </tbody>
  </table>
</template>

<script>
import useAcceptances from "../../composables/acceptance";

import { formatTimestampToDate } from "@/utils/common";

export default {
  props: {
    acceptances: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  setup() {
    const { deleteAcceptance } = useAcceptances();
    const handleDeleteAcceptance = async (id) => {
      if (!window.confirm("You sure?")) {
        return;
      }
      await deleteAcceptance(id);
    };

    const formatTimeStamp = (timestamp) => {
      return formatTimestampToDate(timestamp);
    };
    return {
      handleDeleteAcceptance,
      formatTimeStamp,
    };
  },
};
</script>
