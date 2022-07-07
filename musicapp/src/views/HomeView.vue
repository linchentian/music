<template>
  <div class="home">
    <div class="img_bg">
      <div class="content">
        <top-Nav></top-Nav>
        <swiperCom></swiperCom>
        <iconList></iconList>
      </div>
    </div>
    <musicList @sendParentMsg="getChildMsg"></musicList>
  </div>
</template>


<script>

// @ is an alias to /src
import TopNav from '../components/topNav.vue' 
import swiperCom from '../components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'


export default {
  data(){
    return {
      musicIndex: 0,
    }
  },
  name: 'home',
  components: {
    TopNav,
    swiperCom,
    iconList,
    musicList
  },
  methods:{
    getChildMsg(value){
      this.musicIndex=value
      console.log(this.musicIndex)
    }
  },
  watch:{
    musicIndex:function(newV, oldV){
      
    }
  }
}
</script>

<style  lang='less' scoped>
.img_bg{
  background:url("../assets/pic/1.jpg");
}
.img_bg:after{
  background: inherit;
  filter: blur(100px);
}
.content{

}
</style>