<template>
  <div class="container mt-5">
    <h2>Edit contract</h2>
    <form @submit.prevent="saveContract">
      <div class="form-group">
        <label for="contract_number">Contract number</label>
        <input
          type="text"
          name="contract_number"
          id="contract_number"
          class="form-control"
          v-model="contract.contract_number"
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
          v-model="contract.contract_name"
          required
        />
      </div>
      <div class="form-group">
        <label for="sign_date">Sign date: {{ formatTimeStamp(contract.sign_date) }}</label>
        <input
          type="date"
          name="sign_date"
          id="sign_date"
          class="form-control"
          v-model="contract.sign_date"
          required
        />
      </div>
      <div class="form-group">
        <label for="contract_value">Contract value</label>
        <input
          type="number"
          name="contract_value"
          id="contract_value"
          class="form-control"
          v-model="contract.contract_value"
          required
        />
      </div>
      <div class="form-group">
        <label for="customer_id">Customer Id</label>
        <input
          type="text"
          name="customer_id"
          id="customer_id"
          class="form-control"
          v-model="contract.customer_id"
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
          v-model="contract.status"
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
          v-model="contract.description"
        >
        </textarea>        
      </div>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>
<script>
import { onMounted } from "vue";
import useContracts from "../../composables/contract";
import { formatTimestampToDate } from "@/utils/common";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { contract, getContract, updateContract } = useContracts();
    onMounted(() => getContract(props.id));

    const saveContract = async () => {
      await updateContract();
    };
      const formatTimeStamp = (timestamp) => {
      return formatTimestampToDate(timestamp);
    };
    return { contract, saveContract,
      formatTimeStamp,
     };
  },
};
</script>
