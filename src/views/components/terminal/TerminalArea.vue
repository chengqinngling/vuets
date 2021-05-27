<template>
  <div class="heights_top">
    <div class="heights_top_span">
      <span>区域管理</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="15" :offset="0">
        <EchartsMap :citySeriesData="citySeriesData" />
      </el-col>
      <el-col :span="9" :offset="0" class="ma_top">
        <el-table :data="citySeriesData" height="450">
          <el-table-column type="index" label="索引" width="50"></el-table-column>
          <el-table-column prop="name" label="地域名称" width="180"></el-table-column>
          <el-table-column label="代理商" width="180">
            <template #default="scope">
              <span>{{scope.row.Agents}}(家)</span>
            </template>
          </el-table-column>
          <el-table-column label="占比(全国)" width="120">
            <template #default="scope">
              <el-progress :text-inside="true" :stroke-width="13" :percentage="scope.row.agentsNum"></el-progress>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import EchartsMap from "@/components/chart/map";
import HttpCity from "@/api/city";
export default defineComponent({
  components: { EchartsMap },
  name: "TerminalArea", //区域管理
  setup() {
    //页面DATA
    const TerminalAreaData = reactive({
      //搜索ipt
      searchInput: "",
      //地图表格
      citySeriesData: [],
    });
    onMounted(() => {
      HttpCity.city().then((res) => {
        TerminalAreaData.citySeriesData = res;
      });
    });
    return {
      ...toRefs(TerminalAreaData),
    };
  },
});
</script>

<style scoped>
.cascader {
  width: 13rem;
}
.column {
  flex-direction: column-reverse;
}
.chart-box {
  width: 100%;
  height: 600px;
}
.align {
  align-items: center;
}
</style>