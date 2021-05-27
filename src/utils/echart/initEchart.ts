
export const initEchart = ((
    ctx: any,
    echartid: string,
    echartData: any[],
    echartLink = "china",
    echartLingName = "china"
) => {
    if (echartLink != "china") {
        echartLink = "province/" + echartLink
    }
    //按需引入地图文件
    require(`echarts/map/js/${echartLink}`)
    require(`echarts/map/json/${echartLink}`)
    const newechartData = chartsDataSort(echartData)
    console.log(newechartData)
    const myChart = ctx.echarts.init(document.getElementById(echartid));
    const Optionpten = {
        title: {
            text: '广东省代理商用户量分布图',
            subtext: '广东省代理商用户量分布图',
            x: 'center',
            y: 'bottom',
            textStyle: {
                fontSize: 13,
                fontStyle: 'normal',
            }
        },
        tooltip: {
            trigger: 'item'
        },
        series: [{
            name: '代理商', // series名称
            type: 'map', // series图表类型
            map: echartLingName,
            // coordinateSystem: 'geo', // series坐标系类型
            data: newechartData, // series数据内容
            roam: true, //是否开启鼠标缩放和平移漫游
            label: {
                normal: {
                    show: true  //省份名称  
                },
                emphasis: {
                    show: false
                }
            },
        }],
        //左侧小导航图标
        visualMap: {
            show: true,
            x: 'left',
            y: 'center',
            splitList: [
                { start: 500, end: 600 }, { start: 400, end: 500 },
                { start: 300, end: 400 }, { start: 200, end: 300 },
                { start: 100, end: 200 }, { start: 0, end: 100 },
            ],
            color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea']
        },
    }
    myChart.setOption(Optionpten);
    myChart.on('click', function (params: any) {
        console.log(params.name)
    })
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})


function chartsDataSort(res: any[]) {
    const newArrRes = res.map(item => ({
        name: item.label,
        value: item.value,
    }))
    return newArrRes
}