<template>
  <h1>Transactions Page</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link :to="`transaction/${transaction.id}`">
      {{ transaction.name }}
    </router-link>
    <router-link
      :to="{
        name: 'transactions-details',
        params: {
          id: transaction.id,
        },
      }"
    >
      {{ transaction.name }}
    </router-link>
    <p>{{ transaction.price }}</p>
  </div>
</template>
<script>
export default {
  name: "TransactionsPage",
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Nguyen  hat",
          price: 100000000,
        },
        {
          id: 2,
          name: "Nguyen  sahat",
          price: 200000000,
        },
        {
          id: 3,
          name: "Nguaayen  hat",
          price: 300000000,
        },
      ],
    };
  },
};
</script>
