import { createStore } from 'vuex'
import api from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{
      name:"60km/h",
      id: 28748458,
      al:{
        id: 2866716,
        name: "60 km/h",
        pic: 3239161259160059,
        picUrl: "http://p3.music.126.net/li2A386svzMb64rquvjXfg==/3239161259160059.jpg"
      }
    }],
    playCurrentIndex: 0,
    lyric:"",
    currentTime:0,
    inervalId:0,
    user: {
      isLogin: false,
      phone: "",
      account:{},
      userDetail:{}
    }
  },
  getters: {
    lyricList:function(state){
        let arr = state.lyric.split('\n').map((item, i, arr) =>{
          let min = item.slice(1,3);
          let sec = item.slice(4,6);
          let mill = item.slice(7,10);
          
          // console.log(min,sec,mill)
          return {
            min,sec,mill,
            lyric:item.slice(12, item.length),
            content:item,
            time:parseInt(mill)+parseInt(sec)*1000+parseInt(min) * 1000*60
          }
        })
        arr.forEach((item,i)=>{
          if(i - 1 < 0){
            item.pre = 0;
          }else{
            item.pre = arr[i-1].time
          }
          
        })
        return arr
    }
  },
  mutations: {
    setPlaylist:function(state, value){
      state.playlist = value;
    },
    pushPlaylist:function(state, value){
      state.playlist.push(value);
    },
    setPlayIndex:function(state, value){
      state.playCurrentIndex = value;
    },
    setLyric(state, value){
      state.lyric = value;
    },
    setCurrentTime(state, value){
      state.currentTime = value;
    },
    setUser(state, value){
      state.user = value
    }
  },
  actions: {
    async reqLyric(content, payload){
      let result = await api.getLyric(payload.id)
      content.commit('setLyric', result.data.lrc.lyric)
    },
    async phoneLogin(content, payload){
      // console.log(payload)
      let result = await api.phoneLogin(payload.phone, payload.password)
      console.log(result)
      if(result.data.code==200){
        content.state.user.isLogin = true
        content.state.user.account = result.data.account
        let userDetail = await api.userDetail(result.data.account.id)
        content.state.user.userDetail = userDetail.data;
        localStorage.userData = JSON.stringify(content.state.user)
        console.log(userDetail)
        content.commit('setUser', content.state.user)
      }
      return result
    }
  },
  modules: {
  }
})
