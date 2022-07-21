import axios from "axios";

let baseUrl = 'http://localhost:3000'
// 获取轮播图api
// 1：android 2：iphone 3： ipad
export function getBanner(type=1){
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

export function getMusicList(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

//获取歌单详情
export function getPlaylistDetai(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id){
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}

//搜索结果
export function searchMusic(keyword){
    return axios.get(`${baseUrl}/cloudsearch?keywords=${keyword}`)
}

//手机登录
export function phoneLogin(phone, passwd){
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${passwd}`)
}

//手机登录
export function userDetail(uid){
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}

export default {
    getBanner,getMusicList,getPlaylistDetai,getLyric,searchMusic,phoneLogin,userDetail
}

