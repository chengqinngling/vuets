<template>
  <div>
    <el-card class="box-card">
      <div class="card-header card-bold">
        <span>系统运行状态统计（更新于：2021-03-30 14:55:53）</span>
        <el-button type="primary" size="small ">重启所有频道</el-button>
      </div>
      <div>
        <el-card class="box-card" :span="12">
          <template #header>
            <div>
              <el-row type="flex" class="row-bg">
                <el-col :span="12" class="card_header_span_title">
                  <span>终端在线人数：0/439上线率0%</span>
                  <span>时间更新与2021/3/31-14:12</span>
                </el-col>
                <el-col :span="12" class="card_header_span_title" style="padding-left: 4em;">
                  <span>CPU监控图：5%</span>
                  <span>时间更新与2021/3/31-14:12</span>
                </el-col>
              </el-row>
            </div>
          </template>
          <div class="text item">
            <el-row>
              <el-col :span="12">
                <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
              </el-col>
              <el-col :span="12">
                <div id="myEcharts2" :style="{ width: '900px', height: '300px' }"></div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>
      <div>
        <el-card class="box-card" :span="12">
          <template #header>
            <div>
              <el-row type="flex" class="row-bg">
                <el-col :span="12" class="card_header_span_title">
                  <span>直播节目点击榜</span>
                  <span>时间更新与2021/3/31-14:12</span>
                </el-col>
                <el-col :span="12" class="card_header_span_title" style="padding-left: 4em;">
                  <span>点播节目点击榜</span>
                  <span>时间更新与2021/3/31-14:12</span>
                </el-col>
              </el-row>
            </div>
          </template>
          <el-row>
            <el-row style="width:55%">
              <el-col
                :span="12"
                :gutter="20"
                class="text item flex"
                v-for="(item,index) in TVShow"
                :key="index"
              >
                <span class="align text_l">
                  <span style="color: red">{{index+1}}.</span>
                  {{ item.showName}}
                </span>
                <span class="align text_r">{{item.showCum}}</span>
              </el-col>
            </el-row>
            <el-row style="width:45%">
              <el-col
                :span="12"
                :gutter="20"
                class="text item flex"
                v-for="(item,index) in TVShow"
                :key="index"
              >
                <span class="align text_l">
                  <span style="color: red">{{index+1}}.</span>
                  {{ item.showName}}
                </span>
                <span class="align text_r">{{item.showCum}}</span>
              </el-col>
            </el-row>
          </el-row>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  setup() {
    /// 声明定义一下echart
    let echart = echarts;
    const seriesData = reactive([10, 52, 200, 334, 390, 330, 220, 5, 5, 9]);
    const xAxisData = reactive([
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
      "23:59",
    ]);

    //电视节目
    const TVShow = reactive([
      {
        showName: "CCTV1",
        showCum: 1110,
      },
      {
        showName: "CCTV3",
        showCum: 1000,
      },
      {
        showName: "CCTV10",
        showCum: 990,
      },
      {
        showName: "CCTV15",
        showCum: 800,
      },
      {
        showName: "中央一台",
        showCum: 700,
      },
      {
        showName: "电影频道",
        showCum: 600,
      },
      {
        showName: "卡通动漫",
        showCum: 500,
      },
      {
        showName: "国际新闻",
        showCum: 400,
      },
      {
        showName: "中国天气",
        showCum: 300,
      },
      {
        showName: "国际天气",
        showCum: 200,
      },
    ]);
    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"));
      let chart2 = echart.init(document.getElementById("myEcharts2"));
      // 把配置和数据放这里
      chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "终端在线人数",
            type: "bar",
            barWidth: "60%",
            data: seriesData,
            label: {
              show: true,
              position: "top",
            },
          },
        ],
      });
      chart2.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "终端在线人数",
            type: "bar",
            barWidth: "60%",
            data: seriesData,
            label: {
              show: true,
              position: "top",
            },
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        chart.resize();
      };
    }

    return {
      seriesData,
      xAxisData,
      TVShow,
      initChart,
    };
  },
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
}
.card_header_span_title {
  display: flex;
  justify-content: space-between;
  color: gray;
}

.align {
  flex-grow: 1;
}
</style>