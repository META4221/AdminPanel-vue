<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <AuthPage msg="Welcome to Your Vue.js App"/>-->
<!--  <MainPage msg="1"/>-->
  <layout-header/>
  <router-view/>
</template>

<script>
// import AuthPage from "@/components/AuthPage";
// import MainPage from "@/pages/MainPage";
import LayoutHeader from "@/components/LayoutHeader";

export default {
  name: 'App',
  components: {
    LayoutHeader

    // MainPage,
    // AuthPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #D4D4D4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
