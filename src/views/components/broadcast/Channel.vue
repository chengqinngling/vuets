<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>频道配置</span>
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
          <el-button size="mini" type="primary" icon="el-icon-connection">分片配置</el-button>
        </div>
        <div>
          <el-button size="mini" type="primary" icon="el-icon-plus">添加</el-button>
          <el-button size="mini" type="primary" icon="el-icon-menu">类型管理</el-button>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template #default="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="频道名 ">
                <span>{{ props.row.channelName }}</span>
              </el-form-item>
              <el-form-item label="播放地址">
                <span>{{ props.row.programAddress }}</span>
              </el-form-item>
              <el-form-item label="台标">
                <span>{{ props.row.programLogo }}</span>
              </el-form-item>
              <el-form-item label="码率（kbps）">
                <span>{{ props.row.bitrate }}</span>
              </el-form-item>
              <el-form-item label="节目类型">
                <span>{{ props.row.programType }}</span>
              </el-form-item>
              <el-form-item label="节目输出">
                <span>{{ props.row.programOutput }}</span>
              </el-form-item>
              <el-form-item label="源状态">
                <span>{{ props.row.programState }}</span>
              </el-form-item>
              <el-form-item label="使能">
                <span>{{ props.row.programEnable }}</span>
              </el-form-item>
              <el-form-item label="回看">
                <span>{{ props.row.programReminisce }}</span>
              </el-form-item>
              <el-form-item label="时移">
                <span>{{ props.row.timeShift }}</span>
              </el-form-item>
              <el-form-item label="文件类型">
                <span>{{ props.row.fileType }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column label="频道名" prop="channelName"></el-table-column>
        <el-table-column label="播放地址" prop="programAddress"></el-table-column>
        <el-table-column label="台标" prop="programLogo"></el-table-column>
        <el-table-column label="EPG">EPG</el-table-column>
        <el-table-column label="码率（kbps）" prop="bitrate"></el-table-column>
        <el-table-column label="操作">
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
  name: "Channel",
  setup() {
    return {
      searchInputVlu: ref(""),
      tableData: reactive([
        {
          channelName: "cctv", //节目名称
          programAddress: "udp://239.1.1.67:1234", //播放地址
          programLogo: "台标", //台标
          bitrate: "5042", //码率
          programType: "央视", //节目类型
          programOutput: "true", //节目输出
          programState: "true", //源状态
          programEnable: "true", //使能
          programReminisce: "true", //回看
          timeShift: "true", //时移
          fileType: "TV", //回看
        },
        {
          channelName: "cctv",
          programAddress: "udp://239.1.1.67:1234",
          programLogo: "台标",
          bitrate: "5042",
          programType: "央视",
          programOutput: "true",
          programState: "true",
          programEnable: "true",
          programReminisce: "true",
          timeShift: "true",
          fileType: "TV",
        },
        {
          channelName: "cctv",
          programAddress: "udp://239.1.1.67:1234",
          programLogo: "台标",
          bitrate: "5042",
          programType: "央视",
          programOutput: "true",
          programState: "true",
          programEnable: "true",
          programReminisce: "true",
          timeShift: "true",
          fileType: "TV",
        },
        {
          channelName: "cctv",
          programAddress: "udp://239.1.1.67:1234",
          programLogo: "台标",
          bitrate: "5042",
          programType: "央视",
          programOutput: "true",
          programState: "true",
          programEnable: "true",
          programReminisce: "true",
          timeShift: "true",
          fileType: "TV",
        },
        {
          channelName: "cctv",
          programAddress: "udp://239.1.1.67:1234",
          programLogo: "台标",
          bitrate: "5042",
          programType: "央视",
          programOutput: "true",
          programState: "true",
          programEnable: "true",
          programReminisce: "true",
          timeShift: "true",
          fileType: "TV",
        },
        {
          channelName: "cctv",
          programAddress: "udp://239.1.1.67:1234",
          programLogo: "台标",
          bitrate: "5042",
          programType: "央视",
          programOutput: "true",
          programState: "true",
          programEnable: "true",
          programReminisce: "true",
          timeShift: "true",
          fileType: "TV",
        },
        {
          channelName: "cctv",
          programAddress: "udp://239.1.1.67:1234",
          programLogo: "台标",
          bitrate: "5042",
          programType: "央视",
          programOutput: "true",
          programState: "true",
          programEnable: "true",
          programReminisce: "true",
          timeShift: "true",
          fileType: "TV",
        },
      ]),
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