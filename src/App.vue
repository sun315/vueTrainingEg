<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <el-row>
        <el-col :span="3">
          <h5>菜单导航</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose">
            <el-menu-item index="/one" @click="goToOne">
              <i class="el-icon-reading"></i>
              <span slot="title">js经典</span>
            </el-menu-item>
            <el-menu-item index="/two" @click="goToTwo">
              <i class="el-icon-monitor"></i>
              <span slot="title">算法</span>
            </el-menu-item>
            <el-menu-item index="/three" @click="goToThree">
              <i class="el-icon-document"></i>
              <span slot="title">vue</span>
            </el-menu-item>
            <el-menu-item index="/four" @click="goToFour">
              <i class="el-icon-document"></i>
              <span slot="title">react</span>
            </el-menu-item>

            <el-submenu index="/five">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>其他</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/fiveOne" @click="gotoFiveOne">echarts demo</el-menu-item>
                <el-menu-item index="/fiveTwo" @click="gotoFiveTwo">
                  <i class="el-icon-question"></i>
                  <span slot="title"> 96道题</span>
               </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="21">
          <el-row>
            <router-view />
          </el-row>
        </el-col>
      </el-row>
  </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      },
      created(){

      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        goToOne(){
          this.$router.push('/one');
        },
        goToTwo(){
          this.$router.push('/two');
        },
        goToThree(){
          this.$router.push('/three');
        },
        goToFour(){
          this.$router.push('/four');
        },
        gotoFiveOne(){
          this.$router.push('/fiveOne');
        },
        gotoFiveTwo(){
          this.$router.push('/fiveTwo');
        },
      },
    }
</script>

<style lang="less">
  #app {
    height:100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .el-menu-vertical-demo{
      border:none;
      overflow-y:auto;
      height:calc(100% - 62px);
    }
    .el-row{
      height:100%;
    }
    .el-col:nth-child(1){
      border-right:1px solid #e6e6e6;
      height:100%;
    }
    .el-col:nth-child(2){
      height:100%;
      overflow-y:auto;
    }
  }
</style>
