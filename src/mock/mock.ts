import Mock from "mockjs";

const Random = Mock.Random;
let url =
  process.env.VUE_APP_CURRENTMODE === "dev-remote"
    ? "/api"
    : "http://localhost:8080/";
Mock.mock(url+'api/province', "get", () => {
  let province: any = [];
  province = [
    {
      name: "中国",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "西藏",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "青海",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "宁夏",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "海南",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "甘肃",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "贵州",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "新疆",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "云南",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "重庆",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "吉林",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "山西",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "天津",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "江西",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "广西",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "陕西",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "黑龙江",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "内蒙古",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "安徽",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "北京",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "福建",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "上海",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "湖北",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "湖南",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "四川",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "辽宁",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "河北",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "河南",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "浙江",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "山东",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "江苏",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "广东",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
    {
      name: "台湾",
      Agents: Random.integer(0, 600),
      agentsNum: Random.integer(0, 100),
      selected: Random.boolean(),
    },
  ];
  return province;
});

Mock.mock(url + "test/cityInfo", "post", (data: { name: string }) => {
  const info: any = JSON.parse(data.name);
  return {
    img: Random.image("200x100", "#4A7BF7", info),
  };
});
