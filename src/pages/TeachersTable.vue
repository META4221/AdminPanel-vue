<template>
  <v-div>
    <h1>Преподаватели</h1>
    <TableI :headers="tableHeaders" :content="tableContent" />
  </v-div>
</template>

<script>
import TableI from "@/components/TableI";

export default {
  components: {
    TableI
  },
  data() {
    return {
      tableHeaders: [
        "ID", "Фамилия", "Имя", "Отчество"
      ],
      tableContent: [
        [0, 'Соболев', 'Михаил', 'Михайлович'],
        [1, 'Карабатов', 'Артем', 'Севастьянович'],
        [2, 'Эйлер', 'Егор', 'Юлианович'],
        [3, 'Полтанов', 'Николай', 'Дмитриевич',],
        [4, 'Кулагинский', 'Игнатий', 'Афанасьевич'],
        [5, 'Викаш', 'Максим', 'Елизарович']
      ]
    }
  }
}</script>

<style scoped>

</style>