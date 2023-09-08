
import { ref } from "vue";
import http from "../utils/http-common";
import { useRouter } from "vue-router";

export default function useContracts() {
  const router = useRouter();
  const errors = ref([]);
  const contracts = ref([]);
  const contract = ref([]);

  const getContracts = async () => {
    try {
      let response = await http.get("/AllContracts");
      contracts.value = response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteContract = async (id) => {
    await http.delete(`/delete-contract/${id}`);
    location.reload();
  };

  const getContract = async (id) => {
    let response = await http.get(`/contract/${id}`);
    contract.value = response.data;
  };

  const createContract = async (data) => {
    errors.value = [];
    console.log(data);
    try {
      let response = await http.post("/create-contract", data);
      console.log(response.data);
      if (response.data.status === "error") {
        errors.value = response.data.message;
      }
      if (response.data.status === "success") {
        await router.push({ name: "contracts-route" });
        errors.value = response.data.message;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateContract = async () => {
    try {
      await http.put(`/update-contract`, contract.value);
      await router.push({ name: "contracts-route" });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    errors,
    contracts,
    contract,
    getContracts,
    deleteContract,
    getContract,
    createContract,
    updateContract
  };
}
