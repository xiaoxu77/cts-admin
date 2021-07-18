/*
    基于    axios   封装的请求模块
*/
import axios from 'axios'

const service = axios.create({
  baseURL: ''
})

export default service
