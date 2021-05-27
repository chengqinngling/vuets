<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>视频入库</span>
    </div>
    <el-card class="box-card">
      <div class="height_seath">
        <div>
          <el-input
            v-model="searchInputVlu"
            placeholder="请输入内容"
            size="mini"
            clearable
            style="width:200px"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-search"></i>
            </template>
          </el-input>
          <el-button size="mini" type="primary" icon="el-icon-search" style="margin-left: 0px;">搜索</el-button>
        </div>
        <div>
          <el-button size="mini" type="primary" icon="el-icon-plus">添加</el-button>
          <el-button size="mini" type="primary" icon="el-icon-menu">类型管理</el-button>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column label="节目名称" prop="programName"></el-table-column>
        <el-table-column label="类型" prop="programType"></el-table-column>
        <el-table-column label="海报">
          <template #default="props">
            <el-image
              :src="props.row.programLogo"
              :preview-src-list="[props.row.programLogo]"
              class="list_img"
              file="scale-down"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column label="上映时间" prop="programReleaseTime"></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Video",
  setup() {
    const searchInputVlu = ref("");
    const tableData = reactive([
      {
        programName: "Films", //节目名称
        programType: "film", //播放地址
        programLogo:
          "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", //台标
        programReleaseTime: "2020-05-30", //台标
      },
      {
        programName: "Films", //节目名称
        programType: "film", //播放地址
        programLogo:
          "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", //台标
        programReleaseTime: "2020-05-30", //台标
      },
      {
        programName: "Films", //节目名称
        programType: "film", //播放地址
        programLogo:
          "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", //台标
        programReleaseTime: "2020-05-30", //台标
      },
    ]);
    return {
      searchInputVlu,
      tableData,
    };
  },
});
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 20%;
}
</style>