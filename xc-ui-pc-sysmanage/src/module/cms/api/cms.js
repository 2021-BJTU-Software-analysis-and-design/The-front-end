//public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public'  //ES6 导入
import querystring from "querystring"
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre




//获取所有站点信息
export const site_list = () =>{
  return http.requestGet(apiUrl + "/cms/site/list")
}


//获取所有模板信息
export const template_list = () =>{
  return http.requestGet(apiUrl + "/cms/template/list")
}


//分页查询
export const page_list = (page,size,params) => {
  //将json对象转成key/value对
  let queryString = querystring.stringify(params);
  //定义方法，请求服务端查询接口
  return http.requestQuickGet(apiUrl + '/cms/page/list/'+page+'/'+ size +'?' + queryString)
}

//新增接口
export const page_add = params =>{
  return http.requestPost(apiUrl + "/cms/page/add",params)
}


//查询单个页面信息
export const page_query = (id) =>{
  return http.requestGet(apiUrl + "/cms/page/get/" + id)
}

//更新接口
export const page_edit = (id,params) =>{
  return http.requestPut(apiUrl + "/cms/page/update/" + id,params)
}

//删除接口
export const page_delete = (id) =>{
  return http.requestDelete(apiUrl + "/cms/page/delete/" + id)
}

