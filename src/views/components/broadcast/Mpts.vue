<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>频道配置</span>
    </div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" width="80" type="index" :index="onIndexMethod"></el-table-column>
        <el-table-column label="输入地址" width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.inpAddress }}</span>
          </template>
        </el-table-column>
        <el-table-column label="输入网卡地址" width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.outAddress }}</span>
          </template>
        </el-table-column>
        <el-table-column label="协议" width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.pact }}</span>
          </template>
        </el-table-column>
        <el-table-column label="源状态" width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.sourceState }}</span>
          </template>
        </el-table-column>
        <el-table-column label="码率(kbps)" width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.bit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">节目</el-button>
            <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">搜索</el-button>
            <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Mpts",
  setup() {
    const tableData = reactive([
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
      {
        inpAddress: "输入地址",
        outAddress: "输入网卡地址",
        pact: "unknown",
        sourceState: "源状态",
        bit: "码率",
      },
    ]);

    const onIndexMethod = (index: any) => {
      return index + 1;
    };

    return {
      tableData,
      onIndexMethod,
    };
  },
});
</script>