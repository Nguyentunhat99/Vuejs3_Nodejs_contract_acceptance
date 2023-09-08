import { ref } from "vue";
import http from "../utils/http-common";
import { useRouter } from "vue-router";

export default function useAcceptances() {
  const router = useRouter();
  const errors = ref([]);
  const acceptances = ref([]);
  const acceptance = ref([]);

  const getAcceptances = async () => {
    try {
      let response = await http.get("/AllAcceptances");
      acceptances.value = response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteAcceptance = async (id) => {
    await http.delete(`/delete-acceptance/${id}`);
    location.reload();
  };

  const getAcceptance = async (id) => {
    let response = await http.get(`/acceptance/${id}`);
    acceptance.value = response.data;
  };

  const createAcceptance = async (data) => {
    errors.value = [];
    console.log(data);
    try {
      let response = await http.post("/create-acceptance", data);
      console.log(response.data);
      if (response.data.status === "error") {
        errors.value = response.data.message;
      }
      if (response.data.status === "success") {
        await router.push({ name: "acceptances-route" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateAcceptance = async () => {
    try {
      await http.put(`/update-acceptance`, acceptance.value);
      await router.push({ name: "acceptances-route" });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    errors,
    acceptances,
    acceptance,
    getAcceptances,
    deleteAcceptance,
    getAcceptance,
    createAcceptance,
    updateAcceptance,
  };
}
