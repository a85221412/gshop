/*
暴露接口
*/
import ajax from './ajax'

/*
查询所有客户的账户密码
*/

const base = '/api'
export const reqallclient = function () {
  ajax(base+'/client/selectAll')
}

export const reqoneclient = (id) => {
  ajax(base + '/client/select', {userid:id},'GET')
}
