<template>
  <div class="container">
    <h1>Просмотр таблиц</h1>
    <CarsPage Автомобили/>
    <button type="submit" class="btn"><router-link to="/cars" class="text-white">Показать больше...</router-link></button>
    <ContractsTable Договоры/>
    <button type="submit" class="btn"><router-link to="/contracts" class="text-white">Показать больше...</router-link></button>
    <TableStudents Студенты/>
    <button type="submit" class="btn"><router-link to="/students" class="text-white">Показать больше...</router-link></button>
    <TeachersTable Преподаватели/>
    <button type="submit" class="btn"><router-link to="/teachers" class="text-white">Показать больше...</router-link></button>
  </div>

</template>

<script>

import CarsPage from "@/pages/CarsPage";
import ContractsTable from "@/pages/ContractsTable";
import TableStudents from "@/pages/TableStudents";
import TeachersTable from "@/pages/TeachersTable";


export default {
  name: "MainPage",
  components: {TeachersTable, TableStudents, ContractsTable, CarsPage}
}
</script>

<style scoped>
.btn{
  margin-top: 15px;
  font-size: 24px;
}
</style>