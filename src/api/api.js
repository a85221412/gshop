import {get, post, deletes, put} from './axios.js' ;//导入axios实例文件中方法

// let bsae_api = process.env.BASE_API ? './'+process.env.BASE_API :'..' //获取项目api请求地址
let base_api = '/api'

//根据id获取用户信息
export const select_shopslist = function () {
  return get(`${base_api}/shops/selectAll`); //resfulapi风格
}

//根据用户名和密码登录
export const req_login = function (data) {
  return post(`${base_api}/client/login`, data); //resfulapi风格
}



