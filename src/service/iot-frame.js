/**
 * 物联框架资源service层
 * @authors jp
 * @date    2018-04-23
 */

import axios from '@/config/api.js'

/*SDK*/
//查询
export const querySdkInfo = params => axios.get('/iot-frame/querySdkInfo', params)
//创建
export const addSdkInfo = params => axios.post('/iot-frame/addSdkInfo', params)
//删除
export const deleteSdkInfo = params => axios.post('/iot-frame/deleteSdkInfo', params)
//修改
export const updateSdkInfo = params => axios.post('/iot-frame/updateSdkInfo', params)
//多条件查询
export const querySdkInfoList = (page,params) => axios.post('/iot-frame/querySdkInfoList'+page, params)
//续签查询
export const queryVisaInfo = params => axios.get('/iot-frame/queryVisaInfo', params)
//续签修改
export const updateVisaInfo = params => axios.post('/iot-frame/updateVisaInfo', params)

/*服务器环境*/
//查询
export const queryServerInfoList = (page,params) => axios.post('/iot-frame/queryServerInfoList'+page, params)
//新增
export const addServerInfo = params => axios.post('/iot-frame/addServerInfo', params)
//修改
export const updateServerInfo = params => axios.post('/iot-frame/updateServerInfo', params)
//删除
export const deleteServerInfo = params => axios.post('/iot-frame/deleteServerInfo', params)

/*登录页面*/
export const submitLogin = params => axios.post('/iot-frame/login', params)

//获取验证码
export const createValicode = params => axios.get('/iot-frame/createValicode', params)

//验证码测试环境路径
export const ValiCodeUrl = 'http://172.16.35.95:5555/iot-frame/createValicode'

/*任务接口*/
//查询任务
export const queryTaskInfo = params => axios.get('/iot-frame/queryTaskInfo', params)
//创建任务
export const addTaskInfo = params => axios.post('/iot-frame/addTaskInfo', params)
//修改任务
export const updateTaskInfo = params => axios.post('/iot-frame/updateTaskInfo', params)
//删除任务
export const deleteTaskInfo = params => axios.post('/iot-frame/deleteTaskInfo', params)
//多条件查询任务
export const queryTaskInfoList = (page,params) => axios.post('/iot-frame/queryTaskInfoList'+page, params)

/*APK*/
//多条查询
export const queryApkInfoAll = (page,params) => axios.post('/iot-frame/queryFileList'+page, params)

/*单条查询*/
export const queryApkInfo = params => axios.get('/iot-frame/findFileById', params)

/*新增*/
export const addAPKInfo = params => axios.post('/iot-frame/addFileInfo', params)

/*修改*/
export const amendAPKInfo = params => axios.post('/iot-frame/updateFileInfo', params)

/*删除*/
export const deleteAPKInfo = params => axios.post('/iot-frame/deleteFileInfo', params)

/*分发列表*/
export const dispatcherAPKListInfo = (page,params) => axios.post('/iot-frame/queryDispatchTask'+page, params)

/*分发*/
export const dispatcherAPKInfo = params => axios.post('/iot-frame/dispatcherFile', params)
