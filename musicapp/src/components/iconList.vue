<template>
    <div>
        <div class="Ilist">
            <div class="swiper-container" id="iconSwiper">
                <div class="swiper-wrapper">
                    <!-- <div class="swiper-silde" v-for="(item, i) in state.icon_list" :key="i">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item"></use>
                        </svg>
                        <span>每日推荐</span>
                    </div> -->
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rili"></use>
                        </svg>
                        <span>每日推荐</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-diantai"></use>
                        </svg>
                        <span>私人FM</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gedan"></use>
                        </svg>
                        <span>每日歌单</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-paihangbang"></use>
                        </svg>
                        <span>排行榜</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shu"></use>
                        </svg>
                        <span>有声书</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music"></use>
                        </svg>
                        <span>数字专辑</span>
                    </div>
                    <div class="swiper-slide">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wodeguanzhu"></use>
                        </svg>
                        <span>关注新歌</span>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <hr color="grey" size="0.01px">
    </div>
    
    <!-- <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rili"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-diantai"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>每日歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shu"></use>
            </svg>
            <span>有声书</span>
        </div>
    </div> -->
</template>

<script>
import "swiper/css/swiper.css"
import Swiper from 'swiper';
import { reactive, onMounted, onUpdated } from "vue";

export default{
    setup(){
        let state = reactive({
            icon_list:[]
        })
        onMounted(()=>{
            var swiper = new Swiper('#iconSwiper',{
                slidesPerView: 5,
                spaceBetween: 10,
            });
        })
        return {
            state
        }
    }
    
}
</script>

<style lang="less" scoped>
.Ilist{
    width: 7.5rem;
    height: 1.5rem;
    display: flex;
    padding: 0.4rem;
    .swiper-slide{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 0.5rem;
            height: 0.5rem;
        }
        span{
            font-size: 0.26rem;
        }
    }
}
</style>