<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- <el-row>
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
      </el-row> -->
  
      <!-- 表格合并列demo -->
      <el-table :data="skuListInfo" :span-method="objectSpanMethod" border>
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="storeIds" label="适应门店">
        </el-table-column>
        <el-table-column prop="feeTypeInfo" label="费用类型">
        </el-table-column>
        <el-table-column prop="productInfo" label="适用产品">
        </el-table-column>
        <el-table-column prop="billing" label="计费方法">
        </el-table-column>
      </el-table>
  
  </div>
</template>

<script>
    export default {
      data(){
        return {
          skuListInfo: [
            {
              id: 1,
              name: '普通门店',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '1',
              productInfo: '日托',
              mergeId: 1,
              feeType: '1',
              feeTypeInfo: '学费',
              billing: '月/季/年制度',
            },
            {
              id: 2,
              name: '普通门店',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '2',
              productInfo: '晚托',
              feeType: '1',
              mergeId: 1,
              feeTypeInfo: '学费',
              billing: '月/季/年制度',
            },
            {
              id: 3,
              name: '普通门店',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '3',
              productInfo: '临时托',
              feeType: '1',
              mergeId: 1,
              feeTypeInfo: '学费',
              billing: '月/季/年制度',
            },
            {
              id: 4,
              name: '普通门店',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '4',
              productInfo: '越拖',
              feeType: '1',
              mergeId: 1,
              feeTypeInfo: '学费',
              billing: '月/季/年制度',
            },
            {
              id: 9,
              name: '普通门店',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '4',
              productInfo: '全部',
              feeType: '2',
              mergeId: 1,
              feeTypeInfo: '定金',
              billing: '月/季/年制度',
            },
            {
              id: 10,
              name: '普通门店',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '4',
              productInfo: '全部',
              feeType: '3',
              mergeId: 1,
              feeTypeInfo: '学杂费',
              billing: '月/季/年制度',
            },
            {
              id: 5,
              name: '团购',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '5',
              productInfo: '寒假托',
              feeType: '2',
              mergeId: 1,
              feeTypeInfo: '定金',
              billing: '月/季/年制度',
            },
            {
              id: 6,
              name: '团购',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '5',
              productInfo: '日托',
              feeType: '1',
              mergeId: 1,
              feeTypeInfo: '学费',
              billing: '月/季/年制度',
            },
            {
              id: 7,
              name: '团购',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '5',
              productInfo: '晚托',
              feeType: '1',
              mergeId: 1,
              feeTypeInfo: '学费',
              billing: '月/季/年制度',
            },
            {
              id: 8,
              name: '大客户',
              storeIds: [1, 2, 3, 4],
              storeIdInfo: '[1, 2, 3, 4]',
              productType: '6',
              productInfo: '暑假托',
              feeType: '3',
              mergeId: 1,
              feeTypeInfo: '学杂费',
              billing: '月/季/年制度',
            },
          ],
          typeNameArr:[],
          typeNamePos:0,
          storeArr:[],
          storePos:0,
          feeArr:[],
          feePos:0,
          hoverOrderArr: [],
        }
      },
      created(){

      },
      mounted(){
        this.merage();
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
        //合并表格列demo相关方法
        merageInit() {
          this.typeNameArr = [];
          this.typeNamePos = 0;
          this.storeArr = [];
          this.storePos = 0;
          this.feeArr = [];
          this.feePos = 0;
        },
        merage() {
          this.merageInit();
          for (let i = 0; i < this.skuListInfo.length; i += 1) {
            if (i === 0) {
              // 第一行必须存在
              this.typeNameArr.push(1);
              this.typeNamePos = 0;
              this.storeArr.push(1);
              this.storePos = 0;
              this.feeArr.push(1);
              this.feePos = 0;
            } else {
              // 判断当前元素与上一个元素是否相同,eg：this.typeNamePos 是 this.typeNameArr序号
              // 第一列
              // eslint-disable-next-line no-lonely-if
              if (this.skuListInfo[i].name === this.skuListInfo[i - 1].name) {
                this.typeNameArr[this.typeNamePos] += 1;
                this.typeNameArr.push(0);
              } else {
                this.typeNameArr.push(1);
                this.typeNamePos = i;
              }
              // 第二列
              if (this.skuListInfo[i].storeIdInfo === this.skuListInfo[i - 1].storeIdInfo && this.skuListInfo[i].name ===
                this.skuListInfo[i - 1].name) {
                this.storeArr[this.storePos] += 1;
                this.storeArr.push(0);
              } else {
                this.storeArr.push(1);
                this.storePos = i;
              }
              // 第三列
              if (this.skuListInfo[i].feeType === this.skuListInfo[i - 1].feeType && this.skuListInfo[i].storeIdInfo
                === this.skuListInfo[i - 1].storeIdInfo && this.skuListInfo[i].name ===
                this.skuListInfo[i - 1].name) {
                this.feeArr[this.feePos] += 1;
                this.feeArr.push(0);
              } else {
                this.feeArr.push(1);
                this.feePos = i;
              }
            }
          }
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
          if (columnIndex === 0) {
            // 第一列的合并方法
            const row1 = this.typeNameArr[rowIndex];
            const col1 = row1 > 0 ? 1 : 0; // 如果被合并了row = 0; 则他这个列需要取消
            return {
              rowspan: row1,
              colspan: col1,
            };
          } else if (columnIndex === 1) {
            // 第二列的合并方法
            const row2 = this.storeArr[rowIndex];
            const col2 = row2 > 0 ? 1 : 0; // 如果被合并了row = 0; 则他这个列需要取消
            return {
              rowspan: row2,
              colspan: col2,
            };
          } else if (columnIndex === 2) {
            // 第三列的合并方法
            const row3 = this.feeArr[rowIndex];
            const col3 = row3 > 0 ? 1 : 0; // 如果被合并了row = 0; 则他这个列需要取消
            return {
              rowspan: row3,
              colspan: col3,
            };
          }
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
