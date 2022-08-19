<template>
  <div class="home">
    <div class="bg">
      <img :src="backgroundImg">
      <top-Nav></top-Nav> 
      <swiperCom  @sendMsg="changeBg"></swiperCom>
      <iconList></iconList>
      <musicList></musicList>
      <songList></songList>
    </div>
  </div>
</template>


<script>

// @ is an alias to /src
import TopNav from '../components/topNav.vue' 
import swiperCom from '../components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'
import SongList from '@/components/songList.vue'


export default {
  data(){
    return {
      backgroundImg: "",
      musicIndex: 0,
    }
  },
  name: 'home',
  components: {
    TopNav,
    swiperCom,
    iconList,
    musicList,
    SongList
},
  methods:{
    changeBg(value){
      this.backgroundImg=value.pic
      // console.log(this.backgroundImg)
    }
  },
  watch:{
    musicIndex:function(newV, oldV){
      
    }
  }
}
</script>

<style  lang='less' scoped>
.bg{
  img{
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    filter: blur(800px);
  }
}
.img_bg:after{
  background: inherit;
  filter: blur(100px);
}
</style>