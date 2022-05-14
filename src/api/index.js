/* 封装axios */
import axios from "axios";
import base from './base.js'
import md5 from "md5";
const api={
    /* 获取信息数据 */
    getHot(){
        return axios.get(base.host+base.covInfo)
    },
    getCov(){
        return axios.get(base.baseurl+base.chinaData)
    },
    getCity(cityname){
        let rules=md5('appid16604city_name'+cityname+'formatjson835fb8dddf532a84bb0cafd678c254e8')
        let canshu='format=json&appid=16604&city_name='+cityname+'&sign='+rules
        return axios.get(base.baseurl+base.city+'?'+canshu);
    }
    
}


export default api