/* 封装axios */
import axios from "axios";
import base from './base.js'
const api={
    /* 获取信息数据 */
    getHot(){
        return axios.get(base.host+base.covInfo)
    },
    
}


export default api