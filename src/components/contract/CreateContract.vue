<template>
    <div class="text-danger" v-if="errors.length !== 0">
    <ul>
      <li>
        {{errors}}
      </li>
    </ul>
  </div>
  <div class="container">
    <h2>Create contract</h2>
    <form @submit.prevent="saveContract">
      <div class="form-group">
        <label for="contract_number">Contract number</label>
        <input
          type="text"
          name="contract_number"
          id="contract_number"
          class="form-control"
          v-model="form.contract_number"
          required
        />
      </div>
      <div class="form-group">
        <label for="contract_name">Contract name</label>
        <input
          type="text"
          name="contract_name"
          id="contract_name"
          class="form-control"
          v-model="form.contract_name"
          required
        />
      </div>
      <div class="form-group">
        <label for="sign_date">Sign date</label>
        <input
          type="date"
          name="sign_date"
          id="sign_date"
          class="form-control"
          v-model="form.sign_date"
          required
        />
      </div>
      <div class="form-group">
        <div><label for="contract_value">Contract value</label></div>
        <VueNumberFormat
          class="col-12 form-control"
          id="contract_value"
          name="contract_value"
          required
          v-model:value="form.contract_value"
          :options="{ precision: 0, decimal: '.', thousand: ',' }"
        ></VueNumberFormat>
      </div>
      <div class="form-group">
        <label for="customer_id">Customer Id</label>
        <input
          type="text"
          name="customer_id"
          id="customer_id"
          class="form-control"
          v-model="form.customer_id"
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
import useContracts from "../../composables/contract";
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({
      contract_number: "",
      contract_name: "",
      sign_date: Date(),
      contract_value: 0,
      customer_id: "",
      status: 0,
      description: "",
    });

    console.log(form.contract_name);

    const { createContract, errors } = useContracts();
    const saveContract = async () => {
      await createContract({ ...form });
    };
    return {
      form,
      saveContract,
      errors,
    };
  },
};
</script>
