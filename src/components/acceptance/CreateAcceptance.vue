<template>
  <div class="container">
    <div class="text-danger" v-if="errors.length !== 0">
      <ul>
        <li>
          {{ errors }}
        </li>
      </ul>
    </div>
    <h2>Create acceptance</h2>
    <form @submit.prevent="saveAcceptance">
      <div class="form-group">
        <label for="contract_id">Contract Id</label>
        <input
          type="number"
          name="contract_id"
          id="contract_id"
          class="form-control"
          v-model="form.contract_id"
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
          v-model="form.acceptance_name"
          required
        />
      </div>
      <div class="form-group">
        <div><label for="acceptance_amount">Acceptance Amount</label></div>
        <VueNumberFormat
          class="col-12 form-control"
          id="acceptance_amount"
          name="acceptance_amount"
          required
          v-model:value="form.acceptance_amount"
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
          v-model="form.volume"
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
          v-model="form.status"
          required
        />
      </div>
      <div class="form-group">
        <label for="acceptance_date">Acceptance Date</label>
        <input
          type="date"
          name="acceptance_date"
          id="acceptance_date"
          class="form-control"
          v-model="form.acceptance_date"
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
          v-model="form.description"
        >
        </textarea>
      </div>
      <button type="submit" class="btn btn-success">Create</button>
    </form>
  </div>
</template>
<script>
import useAcceptances from "@/composables/acceptance";
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({
      contract_id: 0,
      acceptance_name: "",
      acceptance_amount: 0,
      volume: 0,
      status: 0,
      acceptance_date: Date(),
      description: "",
    });

    const { createAcceptance, errors } = useAcceptances();
    const saveAcceptance = async () => {
      await createAcceptance({ ...form });
    };
    return {
      form,
      saveAcceptance,
      errors,
    };
  },
};
</script>
