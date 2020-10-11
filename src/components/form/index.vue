<template>
    <div>
        <KForm :model="userInfo" :rules="rules" ref="loginForm">
            <!-- 用户名 -->
            <KFormItem label="用户名" prop="username">
                <kInput v-model="userInfo.username" placeholder="请输入用户名"></kInput>
            </KFormItem>
            <!-- 密码 -->
            <KFormItem label="密码" prop="password">
                <kInput type="password" v-model="userInfo.password" placeholder="请输入密码"></kInput>
            </KFormItem>
            <!-- 登录按钮 -->
            <KFormItem>
                 <button @click="login">登录</button>
            </KFormItem>
            <!-- 注册按钮 -->
            <KFormItem>
                 <button @click="register">注册</button>
            </KFormItem>
        </KForm>
    </div>
</template>

<script>
    import kInput from '@/components/form/KInput.vue'
    import KFormItem from '@/components/form/KFormItem.vue'
    import KForm from '@/components/form/KForm.vue'
    import Notice from '@/components/Notice.vue'
    export default {
        components: {
            kInput,
            KFormItem,
            KForm
        },
        data() {
            return {
                userInfo: {
                    username: "tom",
                    password: ""
                },
                rules: {
                    username: [{ required: true, message: "请输入用户名称" }],
                    password: [{ required: true, message: "请输入密码" }]
                }
            }
        },
        methods: {
            login() {
                this.$refs["loginForm"].validate(valid => {
                    const notice = this.$create(Notice, {
                    title: "社会你杨哥喊你来搬砖",
                    message: valid ? "请求登录!" : "校验失败!",
                    duration: 2000
                    });
                    notice.show();
                
                    // if (valid) {
                    //   alert("submit");
                    // } else {
                    //   console.log("error submit!");
                    //   return false;
                    // }
                });
            },
            register(){
                this.$refs["loginForm"].validate(valid => {
                    if (valid) {
                      alert("register");
                    } else {
                      console.log("error register!");
                      return false;
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>