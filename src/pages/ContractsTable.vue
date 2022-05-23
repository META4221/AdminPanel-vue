<template>
    <h1>Договоры</h1>
    <TableI :headers="tableHeaders" :content="tableContent" />
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
        "ID", "Оплата", "Количество вождений", "Стоимость"
      ],
      tableContent: [
        [0, 'Да', '15', '7500'],
        [1, 'Да', '10', '5000'],
        [2, 'Нет', '5', '2500'],
        [3, 'Нет', '21', '10500'],
        [4, 'Да', '4', '2000'],
        [5, 'Нет', '1', '500']
      ]
    }
  }
}</script>

<style scoped>

</style>