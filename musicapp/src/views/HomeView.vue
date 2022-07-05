<template>
  <div class="home">
    <top-Nav></top-Nav>
    <swiperCom></swiperCom>
    <iconList></iconList>
    <musicList></musicList>
  </div>
</template>


<script>

// @ is an alias to /src
import TopNav from '../components/topNav.vue' 
import swiperCom from '../components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'


export default {
  name: 'home',
  components: {
    TopNav,
    swiperCom,
    iconList,
    musicList
  }
}
</script>

<style  lang='less' scoped>

</style>