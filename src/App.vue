<script setup>
import Table from './components/Table.vue'

let rows1 = $ref([
  {
    name: "Vũ Quang Minh",
    class: "12A",
    dob: "11/01/1921",
    phone: "0123456789",
    address: "Vietnam",
  },
])
let rows2 = $ref([
  {
    class: "12A",
    teach: "Joker Dark Knight",
    room: "404",
  },
])
</script>

<template>
  <Table :table-rows="rows1" :table-name="'Table 4 cột'" />
  <Table :table-rows="rows2" :table-name="'Table 3 cột'"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
