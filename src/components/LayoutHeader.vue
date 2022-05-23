<template>
  <nav class="navbar">
    <div class="container">
      <h1>Автошкола</h1>
      <div class="navbar-wrap">
        <ul class="navbar-menu">
          <li><router-link to="/" class="text-white">Таблица новостей</router-link></li>
          <li><router-link to="/tableShow" class="text-white">Просмотр таблиц</router-link></li>
          <li><router-link to="/auth" class="text-white">Выход</router-link></li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "LayoutHeader"
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  background-color: #FFFFF6;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
}

.navbar .container {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-menu {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  padding-right: 50px;
}

.navbar-menu li {
  display: inline-block;
  isplay: inline-block;
  margin-left: 20px;
  color: #000;
  text-decoration: none;
  padding: 10px;
}

.navbar-wrap {
  display: flex;
  flex-flow: row nowrap;
}

.navbar-logo {
  font-weight: 700;
  font-size: 26px;
  text-decoration: none;
  color: black;
  padding: 25px;
}
</style>