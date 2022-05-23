<template>
  <div class="container">
    <h1>Это главная страница</h1>
    <TableI :headers="tableHeaders" :content="tableContent" />
  </div>
</template>

<script>
import TableI from "@/components/TableI";


export default {components: {
    TableI
  },
data() {
  return {
    tableHeaders: [
      "ID", "CarNumbers", "Model", "Brand", "Color", "CountSeats"
    ],
    tableContent: [
      [0, 'У621РК', 'Vesta', 'Lada', 'gray', 4],
      [1, 'М711РР', '2107', 'Lada', 'red', 4],
      [2, 'О876АС', 'Fit', 'Honda', 'gray', 4],
      [3, 'Е017Рс', '6', 'Mazda', 'white', 4],
      [4, 'В393КС', 'Accord', 'Honda', 'black', 4],
      [5, 'У361НК', 'Niva', 'Lada', 'gray', 4]
    ]
  }
}
}

</script>

<style scoped>

</style>