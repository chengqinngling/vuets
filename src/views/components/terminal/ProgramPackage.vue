<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>套餐订购</span>
    </div>
    <el-row class="flex between">
      <el-col :span="10">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4" class="flex">
        <el-input v-model="seactIput" placeholder="查询用户名称" clearable>
          <template #prefix>
            <i class="el-input__icon el-icon-search"></i>
          </template>
        </el-input>
        <el-button type="primary">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="索引" width="150"></el-table-column>
      <el-table-column label="用户名称" prop="date"></el-table-column>
      <el-table-column label="用户余额" prop="name"></el-table-column>
      <el-table-column label="终端信息" prop="name"></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="mini" @click="drawer = true">查看</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">充值</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <span class="demonstration">
        <label>总条数</label>
        <span>{{tablePagination.tableTotal}}</span>
      </span>
      <el-pagination
        background
        @current-change="onHandleCurrentChange"
        v-model:currentPage="tablePagination.tableCount"
        :page-size="tablePagination.tableSize"
        layout="prev, pager, next, jumper"
        :total="tablePagination.tableTotal"
      ></el-pagination>
    </div>
  </div>
  <el-drawer
    title="用户套餐"
    v-model="drawer"
    :direction="direction"
    :before-close="onIFdrawer"
    destroy-on-close
    size="40%"
  >
    <div v-for="index in 2" :key="index">
      <h5 class="drawerTitle">1.直播包订购</h5>
      <el-table :data="drawerData.liveTableData" height="40%">
        <el-table-column label="索引" type="index" width="50"></el-table-column>
        <el-table-column label="名称" prop="name" width="80" align="center"></el-table-column>
        <el-table-column label="生效日期" prop="date" width="120" align="center"></el-table-column>
        <el-table-column label="到期日期(天)" prop="date2" width="120" align="center">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top">
              <template #default>
                <p>到期日期: {{ scope.row.date2 }}</p>
              </template>
              <template #reference>
                <div class="name-wrapper drawerLiveTable_span">22(天)</div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="自动续订" prop="date" width="80" align="center">
          <template #default>
            <el-switch
              style="display: block"
              v-model="drawerData.liveTableSwite"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="订购套餐" align="center" width="120">
          <template #default>
            <i class="el-icon-remove-outline"></i>
            0
            <i class="el-icon-circle-plus-outline"></i>
            (月)
          </template>
        </el-table-column>
        <el-table-column label="应收总额" prop="date" align="center">
          <template #default>
            <span>总额2300(￥/元)</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="drawerBut">
      <el-button>取 消</el-button>
      <el-button
        type="primary"
        :loading="drawerData.drawerLoading"
        @click="oncloseDrawer()"
      >{{ loading ? '提交中 ...' : '提交' }}</el-button>
    </div>
  </el-drawer>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  //节目套餐管理
  name: "ProgramPackage",
  setup() {

    //套餐订购的Data
    const programData = reactive({
      // 搜索内容
      seactIput: "",
      //表格数据
      tableData: [
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
        {
          date: "华北-河南-洛阳",
          name: "3000200(元/￥)",
        },
      ],
      // 侧边栏表格数据
      drawerData: {
        //直播包数据
        liveTableData: [
          {
            date: "2016-05-02",
            date2: "2019-05-02",
            name: "中央央视节目包",
          },
          {
            date: "2016-05-02",
            date2: "2019-05-02",
            name: "地方影视节目包",
          },
          {
            date: "2016-05-02",
            date2: "2019-05-02",
            name: "私人视频节目包",
          },
          {
            date: "2016-05-02",
            date2: "2019-05-02",
            name: "卫星视频大全节目包",
          },
        ],
        //点播包数据
        dibblingTableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
        ],
        //提交延时
        drawerLoading: false,
        //自动续订
        liveTableSwite: true,
      },
      //分页数据
      tablePagination: {
        tableCount: 1,
        tableSize: 10,
        tableTotal: 1000,
      },
      //表格侧边栏
      drawer: false,
      direction: "rtl",
    });
    //控制侧边栏
    const onIFdrawer = (done: () => void) => {
      done();
    };
    const oncloseDrawer = () => {
      console.log("22");
    };
    //分页控制
    const onHandleCurrentChange = () => {
      console.log("分页");
    };
    return {
      onIFdrawer,
      oncloseDrawer,
      onHandleCurrentChange,
      ...toRefs(programData),
    };
  },
});
</script>

<style scoped>
.between {
  justify-content: flex-end;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.drawerTitle {
  text-align: left;
  padding-left: 1em;
  font-size: 15px;
  color: #738bab;
}
.drawerLiveTable_span {
  color: #325873d9;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
}
.drawerBut {
  padding: 1em;
  display: flex;
}
.drawerBut > button {
  width: 50%;
}
</style>
<style>
.el-drawer.rtl {
  right: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  line-height: 30px;
  text-align: center;
}
</style>