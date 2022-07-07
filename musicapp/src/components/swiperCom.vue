<template>
<div class="swipercom">
    <div class="swiper-container" id="swiperIndex">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, i) in imgs" :key="i">
                <img :src="item.pic">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</div>
</template>

<script>
import "swiper/css/swiper.css"
import Swiper from 'swiper';  
import {getBanner} from '@/api/index.js'


export default{
    data:function(){
        return{
            imgs:[
                {pic: require('../assets/pic/1.jpg')},
                {pic: require('../assets/pic/1.jpg')},
                {pic: require('../assets/pic/1.jpg')}
            ]
        }
    },
    async mounted(){
        var mySwiper = new Swiper('#swiperIndex', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true, //自动切换
            spaceBetween: 20,//间距20px
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        });
        let res = await getBanner(1);
        this.imgs = res.data.banners
    }
}

</script>
<style lang="less">
#swipercom{
    width: 7.5rem;
}
#swiperIndex.swiper-container{
        width: 7rem;
        height: 2.6rem;
        border-radius: 0.1rem;
        overflow :hidden;
        transform :translateY(0);
    .swiper-slide img{
        width: 100%;
        border-radius: 0.1rem;
    }
    .swiper-pagination-bullet-active{
        background-color: red;
    }
}

</style>
