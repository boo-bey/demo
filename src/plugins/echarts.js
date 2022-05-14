// 把echarts封装成插件
import echarts from 'echarts'
import '../utils/map'

const install = function (Vue, options) {
    Object.defineProperties(Vue.prototype, {
        $myCharts: {
            get() {
                return {
                    line(id) {
                        let mycharts = echarts.init(document.getElementById(id))
                        const options = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'rgba(220, 220, 220, 0.8)'
                                }
                            }]
                        }
                        mycharts.setOption(options)
                    },
                    chinaMap(id, data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: 'mousemove', //悬浮弹框
                                enterable: true, //鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {
                                    return '<a href="/city/' + item.name + '" style="color:#fff;">省份' + item.name + '--详情</a>'

                                }
                                // formatter:'{b}-{c}'

                            },
                            visualMap: [{ //映射高亮颜色
                                orient: 'horizontal', //水平
                                type: 'piecewise', //离散
                                bottom: 0,
                                itemWidth: 1,
                                align: 'auto',
                                pieces: [ //配置颜色区间

                                    {
                                        min: 0,
                                        max: 0,
                                        color: '#FFFFFF'
                                    },
                                    {
                                        min: 1,
                                        max: 9,
                                        color: '#F7ECD5',
                                    },
                                    {
                                        min: 10,
                                        max: 99,
                                        color: '#DFA48C'
                                    },
                                    {
                                        min: 100,
                                        max: 499,
                                        color: '#C86A5A'
                                    },
                                    {
                                        min: 500,
                                        max: 999,
                                        color: '#BC3A37'
                                    },
                                    {
                                        min: 1000,
                                        max: 10000,
                                        color: '#6F2B29'
                                    },
                                    {
                                        min: '10000',
                                        color: '#421412'
                                    }
                                ]
                            }],
                            series: [{
                                name: '省',
                                type: 'map',
                                map: 'china', //需要引中国地图
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    mormal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data,
                            }],
                            backgroundColor: 'rgba(0,0,0,.05)'
                        }
                        myChart.setOption(option);
                    },
                    cityMap(id,cityname,data){
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: 'mousemove', //悬浮弹框
                                enterable: true, //鼠标是否可进入提示框浮层中，默认为false
                                formatter(item){ 
                                    return `<a>${item.name}详情 > </a>`
                                }
                                // formatter:'{b}-{c}'

                            },
                            visualMap: [{ //映射高亮颜色
                                orient: 'horizontal', //水平
                                type: 'piecewise', //离散
                                bottom: 0,
                                itemWidth:1,
                                align:'auto',
                                pieces: [ //配置颜色区间
                                
                                    {
                                        min: 0,
                                        max: 0,
                                        color: '#FFFFFF'
                                    },
                                    {
                                        min: 1,
                                        max: 9,
                                        color: '#F7ECD5',
                                    },
                                    {
                                        min: 10,
                                        max: 99,
                                        color: '#DFA48C'
                                    },
                                    {
                                        min: 100,
                                        max: 499,
                                        color: '#C86A5A'
                                    },
                                    {
                                        min: 500,
                                        max:999,
                                        color: '#BC3A37'
                                    },
                                    {
                                        min: 1000,
                                        max:10000,
                                        color: '#6F2B29'
                                    },
                                    {
                                        min: '10000',
                                        color: '#421412'
                                    }
                                ]
                            }],
                            series: [{
                                name: '市',
                                type: 'map',
                                map: cityname,
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    mormal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data,
                            }]
                        }
                        myChart.setOption(option);
                    }
                }
            }
        }
    })
}



export default install