<template>
  <div class="id1">
    <form>
      <div class="id2">
        <div class="mb-3">
          <div for="InputLogin" class="form-label">Логин</div>
          <input type="text" class="form-control" id="InputLogin">
        </div>
        <div class="mb-3">
          <div for="InputPassword" class="form-label">Пароль</div>
          <input type="password" class="form-control" id="InputPassword">
        </div>
        <button type="submit" class="btn" @click="handleButtonClick()"><router-link to="/" class="text-white">Войти</router-link></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  props: {
    msg: String
  },
  methods: {handleButtonClick(){
      var textInput = document.getElementById("InputLogin");
      var catName = textInput.value;
      var passInput = document.getElementById("InputPassword");
      var catName1 = passInput.value;
      if(catName == "admin", catName1=="admin" ){
        alert("SUCCES");
      }else{
        alert("ERROR");
      }
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.id1{
  height: 430px;
  width: 592px;
  background-color: white;
  margin-top: 15vw;
  margin-left: 30vw;
}

.id2{
  padding-top: 120px;
}

.mb-3{
  padding-top: 10px;
}
.form-label{
  font-size: 24px;
}

.form-control{
  width: 250px;
  font-size: 24px;
}

.btn{
  margin-top: 15px;
  font-size: 24px;
}
</style>
