/*
ajax请求模块
*/
import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let parms = ''
      Object.keys(data).forEach(function (key) {
        parms += key + '=' + data[key] + '&'
      })
      if (parms !== '') {
        parms = parms.substring(0, parms.lastIndexOf('&'))
        url = url + '?' + parms
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      // 成功回调resolve()
      resolve(response.data)
    })
      .catch(error => {
        // 失败回调reject()
        reject(error)
      })
  })
}
