const base={
    host: 'http://api.tianapi.com/ncov/', //天行数据 疫情接口
    covInfo: 'index?key=76d547708d5a7783a4487336cba5f361', //疫情病毒信息
    baseurl: 'https://cspe.api.storeapi.net/', //挖数据--国内疫情
    chinaData: '/api/94/219?format=json&appid=16604&sign=e8e937aaa20f26976ba33799072cc2b2', //挖数据--国内疫情接口参数
    // https://cspe.api.storeapi.net/api/94/221  sign:9df3e7e3e96f396bb08260c48961f0a9
    // format=json&appid=16604&city_name=%E5%8C%97%E4%BA%AC&sign=9df3e7e3e96f396bb08260c48961f0a9
    city: 'api/94/221',
    swiperBunner: 'http://iwenwiki.com/wapicovid19/ncovimg.php', //疫情轮播数据
    // getCeshi: '/api/list?username=张三&password=123'//测试跨域
    trivel:'/api/springTravel/citys?key=5805ca9fcb6f0bad9ae048957a23ec7e'
}

export default base