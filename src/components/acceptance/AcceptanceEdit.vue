<template>
  <div class="container mt-5">
    <h2>Edit acceptance</h2>
    <form @submit.prevent="saveAcceptance">
      <div class="form-group">
        <label for="contract_id">Contract Id</label>
        <input
          type="number"
          name="contract_id"
          id="contract_id"
          class="form-control"
          v-model="acceptance.contract_id"
          required
        />
      </div>
      <div class="form-group">
        <label for="acceptance_name">Acceptance Name</label>
        <input
          type="text"
          name="acceptance_name"
          id="acceptance_name"
          class="form-control"
          v-model="acceptance.acceptance_name"
          required
        />
      </div>
      <div class="form-group">
        <label for="acceptance_amount">Acceptance Amount</label>
        <input
          type="number"
          name="acceptance_amount"
          id="acceptance_amount"
          class="form-control"
          v-model="acceptance.acceptance_amount"
          required
        />
      </div>
      <div class="form-group">
        <label for="volume">Volume</label>
        <input
          type="number"
          name="volume"
          id="volume"
          class="form-control"
          v-model="acceptance.volume"
          required
        />
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <input
          type="number"
          name="status"
          id="status"
          class="form-control"
          v-model="acceptance.status"
          required
        />
      </div>
      <div class="form-group">
        <label for="acceptance_date">Acceptance Date: {{ formatTimeStamp(acceptance.acceptance_date) }}</label>
        <input
          type="date"
          name="acceptance_date"
          id="acceptance_date"
          class="form-control"
          v-model="acceptance.acceptance_date"
          required
        />
      </div>
      <div class="form-group">
        <div><label for="description">Description</label></div>
        <textarea
          name="description"
          id="description"
          cols="120"
          rows="5"
          v-model="acceptance.description"
        >
        </textarea>
      </div>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>
<script>
import { onMounted } from "vue";
import useAcceptances from "@/composables/acceptance";
import { formatTimestampToDate } from "@/utils/common";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { acceptance, getAcceptance, updateAcceptance } = useAcceptances();
    onMounted(() => getAcceptance(props.id));

    const saveAcceptance = async () => {
      await updateAcceptance();
    };
    const formatTimeStamp = (timestamp) => {
      return formatTimestampToDate(timestamp);
    };
    return { acceptance, saveAcceptance, formatTimeStamp };
  },
};
</script>
