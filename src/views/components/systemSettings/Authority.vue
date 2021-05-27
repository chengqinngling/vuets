<template>
  <div class="heights">
    <div>
      <span class="heights_span">用户管理</span>
    </div>
    <div>
      <el-input
        v-model="userInputVlu"
        placeholder="请输入内容"
        size="mini"
        clearable
        style="width:250px"
      ></el-input>
      <el-button size="mini" type="primary" icon="el-icon-search" style="margin-left: 0px;">搜索</el-button>
      <el-button size="mini" type="primary" icon="el-icon-edit">添加</el-button>
    </div>
  </div>

  <elcard>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="用户身份">
              <span>{{ props.row.roles }}</span>
            </el-form-item>
            <el-form-item label="用户状态">
              <span>{{ props.row.status==true?'启用':'未激活' }}</span>
            </el-form-item>
            <el-form-item label="用户权限">
              <span
                v-for="(authorityItem,authorityIndex) in props.row.authority"
                :key="authorityIndex"
              >{{authorityItem}} -</span>
            </el-form-item>
            <el-form-item label="用户创建时间">
              <span>{{ props.row.addTiem }}</span>
            </el-form-item>
            <el-form-item label="用户修改时间">
              <span>{{ props.row.modifyTiem }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="角色" prop="roles" align="center"></el-table-column>
      <el-table-column label="状态" prop="status" align="center"></el-table-column>
      <el-table-column label="权限" prop="authority" align="center"></el-table-column>
      <el-table-column label="创建时间" prop="addTiem" align="center"></el-table-column>
      <el-table-column label="修改时间" prop="modifyTiem" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </elcard>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const activeName = ref("user");
    const onHandle = (tab: any) => {
      console.log(tab);
    };
    const tableData = reactive([
      {
        id: "12987122",
        name: "王东东",
        roles: "admin",
        status: "true",
        authority: ["终端管理", "节目分包", "终端授权", "套餐订购", "区域管理"],
        addTiem: "2021/2/5",
        modifyTiem: "2021/3/5",
      },
    ]);
    return {
      activeName,
      tableData,
      userInputVlu: ref(""),
      onHandle,
    };
  },
});
</script>
 
<style scoped>

</style> 