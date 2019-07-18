/*
暴露接口
*/
import ajax from './ajax'

/*
查询所有客户的账户密码
*/
export const reqallclient = function () {
  ajax('/client/selectAll')
}
