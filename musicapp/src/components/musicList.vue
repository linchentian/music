<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="mlist">
            <div class="swiper-container" id="musicSwiper">
                <div class="swiper-wrapper">
                    <router-link :to="{path: '/listview',query:{id: item.id}}" class="swiper-slide" v-for="(item, i) in state.musicList" :key="i">
                        <img :src="item.picUrl" :alt="item.name">
                        <span class="name">{{item.name}}</span>
                        <div class="count">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang"></use>
                            </svg>
                            <span>{{changeValue(item.playCount)}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.css"
import Swiper from 'swiper';
import {getMusicList} from '@/api/index.js'
import { reactive, onMounted, onUpdated } from "vue";


var mySwiper;
export default{
    setup(){
        let state = reactive({musicList:[]})
        function changeValue(num){
            let res = 0
            if(num >= 100000000){
                res = num / 100000000
                res = res.toFixed(2) + '亿'
            }
            else if(num >= 10000){
                res = num / 10000
                res = res.toFixed(2) + '万'
            }
            return res;
        }
        onMounted(async ()=>{
            let res = await getMusicList()
            state.musicList = res.data.result
        })
        onUpdated(()=>{
            mySwiper = new Swiper('#musicSwiper',{
                slidesPerView: 3,
                spaceBetween: 10,
            });
        })
        return {
            state, changeValue
        }
    },
    methods:{
        addEvent:function(){
            alert(mySwiper.activeIndex)
        }
    }
}
/*
export default{
    data(){
        return {
            musicList:[{}]
        }
    },
    methods:{
        changeValue:function(num){
            let res = 0
            if(num >= 100000000){
                res = num / 100000000
                res = res.toFixed(2) + '亿'
            }
            else if(num >= 10000){
                res = num / 10000
                res = res.toFixed(2) + '万'
            }
            return res;
        }
    },
    async mounted(){
        let res = await getMusicList()
        this.musicList = res.data.result
        console.log(this.musicList)
        
        
    },
    updated(){
        var swiper = new Swiper('#musicSwiper',{
            slidesPerView: 3,
            spaceBetween: 10,
        });
    },
    filter(){

    }
}
*/
</script>



<style lang="less" scoped>
.musicList{
    width: 7.5rem;
    padding: 0 0.4rem;
    .musicList-top{
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            font-size: 0.24rem;
            border: 1px solid #ccc;
            height: 0.5rem;
            width: 1.2rem;
            border-radius: 0.2rem;
            text-align: center;
            line-height: 0.45rem;
        }
    }
    .mlist{
        .swiper-container{
            width: 100%;
            height: 2.9rem;
            .swiper-slide{
                display: flex;
                flex-direction: column;
                img{
                    width: 100%;
                    height: auto;
                    border-radius: 0.1rem;
                }
                .name{
                    height: 0.6rem;
                    width: 100%;
                    font-size: 0.25rem;
                    line-height: 0.4rem;
                }
                .count{
                    color: #fff;
                    position: absolute;
                    right: 0.1rem;
                    top: 0.1rem;
                    font-size: 0.25rem;
                    display: flex;
                    align-items: center;
                    .icon{
                        fill: #fff;
                    }
                }
            }
        }
    }
    
}
</style>