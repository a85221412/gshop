import {get, post, deletes, put} from './axios.js' ;//导入axios实例文件中方法

// let bsae_api = process.env.BASE_API ? './'+process.env.BASE_API :'..' //获取项目api请求地址
let bsae_api = '/api'

//根据id获取用户信息
export const selectall = function () {
  return get(`${bsae_api}/client/selectAll`); //resfulapi风格
}
