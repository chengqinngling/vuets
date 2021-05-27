<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>终端授权</span>
      <div class="Authorization_div">
        <i class="Authorization_i Authorization_r"></i>
        <span>已注册，不在线（437）</span>
        <i class="Authorization_i Authorization_g"></i>
        <span>已注册，在线（0)</span>
        <i class="Authorization_i Authorization_b"></i>
        <span>未注册，不在线（5）</span>
        <i class="Authorization_i Authorization_y"></i>
        <span>未注册，在线（1）</span>
      </div>
    </div>
    <el-card class="box-card">
      <div class="height_seath">
        <div>
          <el-button size="mini" type="primary" icon="el-icon-delete">批量删除</el-button>
          <el-button size="mini" type="primary" icon="el-icon-paperclip">导出Csv</el-button>
          <el-button size="mini" type="primary" icon="el-icon-plus">添加</el-button>
        </div>
        <div class="PackageOrder_r_div">
          <el-dropdown style="border: 1px #5d90d47d solid;padding: 6px; margin-right: 2em;">
            <span class="el-dropdown-link">
              连接状态
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>全部</el-dropdown-item>
                <el-dropdown-item>在线</el-dropdown-item>
                <el-dropdown-item>离线</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown style="border: 1px #5d90d47d solid;padding: 6px; margin-right: 2em;">
            <span class="el-dropdown-link">
              终端状态
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>全部</el-dropdown-item>
                <el-dropdown-item>已注册,不在线</el-dropdown-item>
                <el-dropdown-item>已注册,在线</el-dropdown-item>
                <el-dropdown-item>未注册,不在线</el-dropdown-item>
                <el-dropdown-item>未注册,在线</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown style="border: 1px #5d90d47d solid;padding: 6px; margin-right: 2em;">
            <span class="el-dropdown-link">
              区域筛选
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>全部</el-dropdown-item>
                <el-dropdown-item>区域1</el-dropdown-item>
                <el-dropdown-item>区域2</el-dropdown-item>
                <el-dropdown-item>区域3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div>
            <el-input
              v-model="searchInput"
              placeholder="请输入内容"
              size="mini"
              clearable
              style="width:150px"
            >
              <template #prefix>
                <i class="el-input__icon el-icon-search"></i>
              </template>
            </el-input>
            <el-button size="mini" type="primary" icon="el-icon-search" style="margin-left: 0px;">搜索</el-button>
          </div>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="terminalMac" label="终端地址" width="180"></el-table-column>
        <el-table-column prop="terminalName" label="终端名称" width="180"></el-table-column>
        <el-table-column prop="terminalBalance" label="终端余额"></el-table-column>
        <el-table-column prop="terminalArea" label="终端区域"></el-table-column>
        <el-table-column prop="terminalStatus" label="只显示在线"></el-table-column>
        <el-table-column prop="terminalLastOnline" label="最近登录"></el-table-column>
        <el-table-column prop="linkStatus" label="链接状态"></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    </el-card>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Package order", //套餐订购
  setup() {
    const PackageData = reactive({
      searchInput: "",
      tableData: [
        {
          terminalMac: "终端地址",
          terminalName: "终端名称",
          terminalBalance: "终端余额",
          terminalArea: "终端区域",
          terminalStatus: "终端状态",
          terminalLastOnline: "终端上次在线",
          linkStatus: "连接状态",
        },
      ],
      tablePagination: {
        tableCount: 1,
        tableSize: 10,
        tableTotal: 1000,
      },
    });
    const onHandleCurrentChange = (val) => {
      console.log(`当前页 ${val} 条`);
    };
    return {
      onHandleCurrentChange,
      ...toRefs(PackageData),
    };
  },
});
</script>

<style scoped>
.Authorization_r {
  background: red;
}
.Authorization_g {
  background: green;
}
.Authorization_b {
  background: black;
}
.Authorization_y {
  background: yellow;
}

.Authorization_div {
  display: flex;
  align-items: center;
  margin-top: 2em;
  color: gray;
}
.Authorization_div > span {
  padding-right: 1em;
}
.Authorization_i {
  content: "";
  margin: 3px;
  display: table;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.PackageOrder_r_div {
  display: flex;
  align-items: center;
}

</style>