<template>
    <div>
        <!-- label -->
        <label v-if="label">{{label}}</label>

        <slot></slot>

        <!-- 校验信息显示 -->
        <p class="errorMsg" v-if="error">{{error}}</p>

        <!-- 校验规则 -->
        <!-- <p>{{form.model}}</p> -->

    </div>
</template>

<script>
    // element-ui校验使用的第三方库
    import Schema from 'async-validator';
    export default {
        inject:['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop:{
                type:String
            }
        },
        data(){
            return {
                error:'', //error是空说明校验通过
            }
        },
        mounted(){
            this.$on('validate',() => {
                this.validate();
            })
        },
        methods:{
            validate(){
                // 规则
                const rules = this.form.rules[this.prop];
                // 当前值
                const value = this.form.model[this.prop];

                //创建校验描述对象
                const desc = {[this.prop] : rules};
                //创建Schema实例
                const schema = new Schema(desc);
                // 返回的是一个Promise
                return schema.validate({[this.prop] : value},errors => {
                    if(errors){
                        this.error = errors[0].message;
                    }else{
                        //校验通过
                        this.error = "";
                    }
                })
            }
        }
    }
</script>

<style>
    .errorMsg{
        color:red;
    }
</style>