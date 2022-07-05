import axios from "axios";

let baseUrl = 'http://localhost:3000'
// 获取轮播图api
// 1：android 2：iphone 3： ipad
export function getBanner(type=1){
    return axios.get(`/banner?type=${type}`);
}

export function getMusicList(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

//获取歌单详情
export function getPlaylistDetai(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}