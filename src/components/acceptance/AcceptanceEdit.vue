<template>
  <div class="container mt-5">
    <h2>Edit acceptance</h2>
    <form @submit.prevent="saveAcceptance">
      <div class="form-group">
        <label for="contract_id">Contract Id</label>
        <select
          id="contract_id"
          name="contract_id"
          class="form-control"
          v-model="acceptance.contract_id"
          required
        >
          <option
            v-for="contract in contracts"
            :key="contract.id"
            :value="contract.id"
          >
            {{ contract.id }}
          </option>
        </select>
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
        <VueNumberFormat
          class="col-12 form-control"
          id="acceptance_amount"
          name="acceptance_amount"
          required
          v-model:value="acceptance.acceptance_amount"
          :options="{ precision: 0, decimal: '.', thousand: ',' }"
        ></VueNumberFormat>
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
        <select
          name="status"
          id="status"
          class="form-control"
          v-model="acceptance.status"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="form-group">
        <label for="acceptance_date"
          >Acceptance Date:
          {{ formatTimeStamp(acceptance.acceptance_date) }}</label
        >
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
import useContracts from "@/composables/contract";
import { formatTimestampToDate } from "@/utils/common";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { contracts, getContracts } = useContracts();
    onMounted(getContracts);
    const { acceptance, getAcceptance, updateAcceptance } = useAcceptances();
    onMounted(() => getAcceptance(props.id));

    const saveAcceptance = async () => {
      await updateAcceptance();
    };
    const formatTimeStamp = (timestamp) => {
      return formatTimestampToDate(timestamp);
    };
    return { acceptance, saveAcceptance, formatTimeStamp, contracts };
  },
};
</script>
