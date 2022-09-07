<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li class="current" v-for="item in menuTab" :key="item.id">{{item}}</li>

      </ul>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue';

  export default{
    name:'AppLogin',
    data(){
      return{
        menuTab:[
          {txt:'登录'},
          {txt:'注册'}
        ]
      }
    },
    created(){},
    onMounted(){},
    method:{}
  }
</script>
<style lang="scss" scoped>
#login{
  height: 100vh;
  background-color: rgb(52,74,95);
}
.login-wrap{
  width: 330px;
  margin: auto;
}
.menu-tab{
  text-align: center;
  li{
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }
}
.current{
  background-color: rgba($color: #000000, $alpha: .1);
}
</style>
