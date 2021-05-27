<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>文件夹管理</span>
    </div>
    <div v-if="activeName=='LiveBroadcast'" class="Authorization_button">
      <el-button size="mini" type="primary" icon="el-icon-plus">新增直播套餐</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="直播套餐管理" name="LiveBroadcast">
        <el-table :data="LiveTableData" style="width: 100%">
          <el-table-column type="expand">
            <template #default="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="节目名称">
                  <span
                    class="LiveTableClass_span"
                    v-for="(item,index) in props.row.packageContent"
                    :key="index"
                  >{{index+1}}.{{ item }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="索引" type="index" width="100"></el-table-column>
          <el-table-column label="套餐名称" prop="packageName"></el-table-column>
          <el-table-column class="overflow11" label="可看节目" align="left" width="200">
            <template #default="scope">
              <el-popover effect="light" trigger="hover" placement="top">
                <template #default>
                  <p>节目名称:</p>
                  <span
                    v-for="(item,index) in scope.row.packageContent"
                    :key="index"
                    class="LiveTableClass_span"
                  >{{index+1}}.{{item}}</span>
                </template>
                <template #reference>
                  <div class="name-wrapper">
                    <el-tag size="medium" class="overflow" style="width: 150px;">
                      <span v-for="(item,index) in scope.row.packageContent" :key="index">{{item}}</span>
                    </el-tag>
                  </div>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="价格/年" prop="annual"></el-table-column>
          <el-table-column label="价格/月" prop="monthly"></el-table-column>
          <el-table-column label="价格/日" prop="daily"></el-table-column>
          <el-table-column label="创建者" prop="creator"></el-table-column>
          <el-table-column label="操作" align="center">
            <template #default="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="点播套餐管理" name="OnDemand">
        <el-table :data="dibblingTableDate" style="width: 100%">
          <el-table-column label="索引" type="index" width="100"></el-table-column>
          <el-table-column label="节目名称" prop="packageName"></el-table-column>
          <el-table-column label="价格/月" prop="monthly"></el-table-column>
          <el-table-column label="操作" align="center">
            <template #default="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Authorization", //终端授权
  setup() {
    const Authorization = reactive({
      activeName: "LiveBroadcast",
      LiveTableData: [
        {
          id: "0",
          packageName: "节目名称",
          packageContent: [
            "CCTV1",
            "CCTV2",
            "CCTV3",
            "CCTV4",
            "CCTV5",
            "CCTV6",
            "CCTV7",
            "CCTV8",
          ],
          annual: 8888,
          monthly: 888,
          daily: 30,
          creator: "王小虎",
        },
        {
          id: "0",
          packageName: "节目名称",
          packageContent: [
            "CCTV1",
            "CCTV2",
            "CCTV3",
            "CCTV4",
            "CCTV5",
            "CCTV6",
            "CCTV7",
            "CCTV8",
          ],
          annual: 8888,
          monthly: 888,
          daily: 30,
          creator: "王小虎",
        },
        {
          id: "0",
          packageName: "节目名称",
          packageContent: [
            "CCTV1",
            "CCTV2",
            "CCTV3",
            "CCTV4",
            "CCTV5",
            "CCTV6",
            "CCTV7",
            "CCTV8",
          ],
          annual: 8888,
          monthly: 888,
          daily: 30,
          creator: "王小虎",
        },
        {
          id: "0",
          packageName: "节目名称",
          packageContent: [
            "CCTV1",
            "CCTV2",
            "CCTV3",
            "CCTV4",
            "CCTV5",
            "CCTV6",
            "CCTV7",
            "CCTV8",
          ],
          annual: 8888,
          monthly: 888,
          daily: 30,
          creator: "王小虎",
        },
        {
          id: "0",
          packageName: "节目名称",
          packageContent: [
            "CCTV1",
            "CCTV2",
            "CCTV3",
            "CCTV4",
            "CCTV5",
            "CCTV6",
            "CCTV7",
            "CCTV8",
          ],
          annual: 8888,
          monthly: 888,
          daily: 30,
          creator: "王小虎",
        },
      ],
      dibblingTableDate: [
        {
          packageName: "节目名称",
          monthly: 33,
        },
      ],
    });
    return {
      ...toRefs(Authorization),
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
  width: 50%;
}
</style>