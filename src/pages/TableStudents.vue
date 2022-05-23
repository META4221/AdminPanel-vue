<template>
<h1>Ученики</h1>
  <TableI :headers="tableHeaders" :content="tableContent" />
</template>

<script>

import TableI from "@/components/TableI";

export default {
  components: {
    TableI
  },
  data(){
    return{
      tableHeaders: [
        "ID", "Фамилия", "Имя", "Номер договора"
      ],
      tableContent: [
        [0, 'Константин', 'Матизов', 1],
        [1, 'Михаил', 'Кабальнов', 3],
        [2, 'Савва', 'Кочергов', 6],
        [3, 'Ефим', 'Углицкий', 2],
        [4, 'Евгений', 'Полевщиков', 4],
        [5, 'Афанасий', 'Пересторонин', 5]
      ]
    }
  }

}
</script>
<style scoped>

</style>