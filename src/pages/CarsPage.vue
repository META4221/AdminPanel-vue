<template>
    <h1>Автомобили</h1>
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
        "ID", "Модель", "марка", "Тип КПП"
      ],
      tableContent: [
        [0, 'Lada', 'Vesta', 'Автомат'],
        [1, 'Lada', '2107', 'Механика'],
        [2, 'Honda', 'Fit', 'Автомат'],
        [3, 'Mazda', '6', 'Механика'],
        [4, 'Honda', 'Accord', 'Механика'],
        [5, 'Lada', 'Niva', 'Механика']
      ]
    }
  }
}
</script>

<style scoped>

</style>