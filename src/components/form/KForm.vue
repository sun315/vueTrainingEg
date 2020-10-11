<template>
    <div class="k-form">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"KForm",
        componentName:"KForm",
        provide(){
            return {
                form:this
            }
        },
        props:{
            model:{
                type:Object,
                required:true
            },
            rules:{
                type:Object
            }
        },
        created(){
            this.field = [];
            this.$on('sunlau.form.addField',item => {
                this.field.push(item);
            })
        },
        methods:{
            validate(cb){
                // 获取所有的孩子KFormItem
                // 结果返回一个数组 [resultPromise]
                // const tasks = this.$children
                //   .filter(item => item.prop) // 过滤掉没有prop属性的Item
                //   .map(item => item.validate());

                // 使用dispatch派发事件的方式，与$children解耦(不需要再过滤prop了，KFormItem已经加了判断)
                const tasks = this.field.map(item => item.validate());

                // 统一处理所有Promise结果
                Promise.all(tasks)
                 .then(() => cb(true))
                 .catch(() => cb(false));
            }
        }
    }
</script>

<style lang="less" scoped>

</style>