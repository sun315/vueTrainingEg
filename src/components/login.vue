<template>
    <div>
        <el-button type="primary" v-if="!isLogin" @click="login">登录</el-button>
        <el-button type="primary" v-else @click="logout">注销</el-button>
        <!-- <el-button type="primary" @click="showTable">console.table</el-button> -->
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                // 提交mutation变更状态
                // this.$store.commit('login');

                // 派发动作，触发actions
                this.$store.dispatch('login','admin').then(() => {
                    this.$router.push(this.$route.query.redirect);
                }).catch(() => {
                    alert('用户名或密码错误，请重试！');
                })

                
            },
            logout(){
                this.$store.commit('logout');
                this.$router.push('/');
            },
            // 可在控制台以table形式打印出数据
            showTable(){
                let add = [
                    {name:'tom',sex:'m',children:[{name:'son',age:7}]},
                    {name:'lily',sex:'f'},
                    {name:'abu',sex:'k'}
                ];

                console.table(add,['name']);
                
            }
        },
        computed:{
            isLogin(){
                return this.$store.state.isLogin;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>