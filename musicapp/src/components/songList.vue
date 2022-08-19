<template>
    <div class="slist">
        <div class="swiper-container" id="songSwiper">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide">
                    <img src="@/assets/pic/test/1.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/pic/test/1.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/pic/test/1.jpg">
                </div> -->

                <div class="swiper-slide" v-for="(item, i) in state.songlist" :key="i">
                    <img :src="item.pic"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.css"
import Swiper from 'swiper';
import {onMounted, onUpdated, reactive } from "vue";
import img1 from '@/assets/pic/test/1.jpg'
import img2 from '@/assets/pic/test/2.jpg'
import img3 from '@/assets/pic/test/3.jpg'

var mySwiper
export default{
    setup(){
        let state = reactive({
            songlist:[
                {pic: img1},
                {pic: img2},
                {pic: img3}
            ]
        })
        onMounted(()=>{
            mySwiper = new Swiper('#songSwiper',{
                slidesPerView: 1,
                spaceBetween: 30,
            });
        })
        return {
                state
            }
        }
}
</script>


<style lang="less" scoped>
.slist{
    .swiper-container{
        width: 90%;
        height: 100%;
        margin: 0.3rem;
        background-color: aquamarine;
        .swiper-slide{
            display: flex;
            flex-direction: column;
            img{
                width: 100%;
                height: auto;
                border-radius: 0.1rem;
            }
        }
    }
}
</style>