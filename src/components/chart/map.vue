<template>
  <div
    class="hello"
    v-loading="maploading"
    element-loading-text="地图绘制中"
    style="height: 100vh;width: 100%"
  >
    <div id="map"></div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="(items,index) in citySeriesData"
        :key="index"
        :label="items.name"
        :value="items.name"
      ></el-option>
    </el-select>
  </div>
</template>
<script >
import newUtils from "@/utils/utils";
export default {
  name: "HelloWorld",
  props: {
    citySeriesData: Array,
  },
  data() {
    return {
      value: "中国",
      myChart: null,
      //   注册地图json
      jsonMap: {},
      maploading: false,
    };
  },
  created() {
    this.initJsonMap();
  },
  //   更新数据
  watch: {
    value(newVal) {
      this.updatedMap(newVal);
    },
    citySeriesData(val) {
      this.chinaConfigure(this.value);
    },
  },
  methods: {
    //初始化动态引入地图
    initJsonMap(city = "china") {
      if (city == "china") {
        this.jsonMap[this.value] = require(`@/public/json/${city}.json`);
        import(`@/public/js/${city}.js`);
      } else {
        import(`@/public/js/province/${city}.js`);
        this.jsonMap[
          this.value
        ] = require(`@/public/json/province/${city}.json`);
      }
    },
    //echarts生成地图
    chinaConfigure(area) {
      //   循环注册地图
      for (let index in this.jsonMap) {
        this.echarts.registerMap(index, this.jsonMap[index]);
      }
      this.myChart = this.echarts.init(document.getElementById("map")); //这里是为了获得容器所在位置
      window.onresize = this.myChart.resize;
      let seriesData = newUtils.MapArrAnalyze(this.citySeriesData);
      let mapmouseoverCityName = area;
      let option = {
        // 进行相关配置
        backgroundColor: "#02AFDB",
        //移入地图时展示信息
        tooltip: {
          // 提示框组件
          show: true, // 显示提示框组件
          trigger: "item", // 触发类型
          triggerOn: "mousemove", // 出发条件
          backgroundColor: "opacity",

          formatter: () => {
            let str = `
                  <ul style='width:200px; padding: 8px 20px;background: #0b2668;border: 1px solid #123c8e'>
                      <li style='height: 20px; list-style: none; color: #198aea;font-size: 12px;display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #123c8e;padding-bottom: 5px'>
                          <p>有线电视</p>
                          <p>代理商数据</p>
                      </li>
                    <li style='height: 20px; list-style: none; color: #198aea;font-size: 12px;display: flex;justify-content: space-between;align-items: center;margin: 5px 0'>
                        <p>${mapmouseoverCityName}</p>
                        <p>22(家)</p>
                    </li>
                  </ul>
              `;
            return str;
          },
        },
        visualMap: {
          // max: 110,
          calculable: true,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
        },
        series: [
          {
            label: {
              normal: {
                show: true, //省份名称
              },
            },
            roam: true, //是否开启鼠标缩放和平移漫游
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1,
              max: 2,
            },
            type: "map",
            mapType: area,
            data: seriesData,
          },
        ],
      };
      this.myChart.setOption(option, true);
      // 移入函数
      this.myChart.on("mouseover", (params) => {
        mapmouseoverCityName = params.name;
      });
      // 点击函数
      this.myChart.on("click", (params) => {
        this.updatedMap(params.name);
      });
    },
    //地图更新
    updatedMap(mapName) {
      this.maploading = true;
      let newCity = newUtils.Analyze(mapName);
      this.value = mapName;
      this.jsonMap = {};
      this.initJsonMap(newCity);
      this.myChart.dispose();
      this.chinaConfigure(mapName);
      setTimeout(() => {
        this.maploading = false;
      }, 2000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
  width: 100%;
  height: 100%;
}
.el-select {
  position: absolute;
  left: 20px;
  top: 20px;
}
#map {
  position: absolute;
  width: 100%;
  height: 60vh;
}
</style>
