<template>
    <div class="playMusic">
        <div class="bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})` }"></div>
        <div class="playTop">
            <div class="back" @click="$emit('back')">
                <svg class="icon" aria-hidden="true">
                    <use  xlink:href="#icon-fanhui"></use>
                </svg>
            </div>
            <div class="center">
                <div class="title">
                    <marquee behavior="scroll" direction="left">{{playDetail.name}}</marquee>
                </div>
            </div>
            <div class="sharr">
                <svg class="icon" aria-hidden="true">
                    <use  xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="playContent" v-show="!isLyric" @click="isLyric = !isLyric">
            <img class="needle" :class="{active: !paused}" src="@/assets/pic/stick.png">
            <img class="circle" :class="{active: !paused}" src="@/assets/pic/circle.png">
            <img class="playImg" :class="{active: !paused}" :src="playDetail.al.picUrl">
        </div>
        <div class="playLyric" v-show="isLyric" @click="isLyric = !isLyric" ref="playLyric">
            <p :class="{active:(currentTime*1000 >= parseInt(item.pre))&&(currentTime*1000 <= parseInt(item.time))}" v-for="(item, i) in $store.getters.lyricList" :key="i">
                {{item.lyric}}
            </p>
        </div>
        <div class="progress">

        </div>
        <div class="playFoot">    
            <svg class="icon" aria-hidden="true">
                <use  xlink:href="#icon-24gl-repeat2"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                <use  xlink:href="#icon-shangyishou"></use>
            </svg>
            <svg v-if="paused" class="play" aria-hidden="true" @click="play">
                <use  xlink:href="#icon-bofang1"></use>
            </svg>
            <svg v-else class="play" aria-hidden="true" @click="play">
                <use  xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                <use  xlink:href="#icon-xiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use  xlink:href="#icon-gengduo2"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
    data(){
        return{
            isLyric: false
        }
    },
    computed:{
        ...mapState(['lyric','currentTime','playCurrentIndex','playlist']),
    },
    watch:{
        currentTime:function(newValue, OldValue){
            console.log(newValue)
            console.log([this.$refs.playLyric])
            let p = document.querySelector('p.active');
            let offsetTop = p.offsetTop;
            
            this.$refs.playLyric.scrollTop = p.offsetTop;

        }
    },
    methods:{
        goPlay(num){
            let index = this.playCurrentIndex + num;
            if(index < 0){
                index = this.playlist.length - 1;
            }else if(index == this.playlist.length){
                index = 0;
            }
            this.$store.commit('setPlayIndex', index)
            this.$emit('changePaused')
        }
    },
    props:['playDetail','paused','play'],
}
</script>

<style lang="less" scoped>
.playMusic{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: auto 100%;
        background-position: center;
        filter: blur(80px);
        z-index: -1;
    }
    .playTop{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 7.5rem;
        height: 2rem;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        padding: 0 0.4rem;
        marquee{
            width: 5rem;
            flex: 1;
        }
        .icon{
            fill:#fff;
            width: 0.4rem;
            height: 0.4rem;
        }
    }
    .playContent{
        position: absolute;
        width: 7.5rem;
        height: 7.5rem;
        left: 0;
        top: 1.5rem;
        .needle{
            width: 2.5rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            transform-origin: 0.3rem 0;
            transform: rotate(-15deg);
            z-index: 10;
            transition: all 1s;
        }
        .needle.active{
            width: 2.5rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            transform-origin: 0.3rem 0;
            transform: rotate(10deg);
            z-index: 10;
            transition: all 1s;
        }
        .circle{
            width: 6rem;
            height: auto;
            position: absolute;
            left: calc(50% - 3rem);
            top: 3rem;
            z-index: 1;
        }
         @-webkit-keyframes rotation {
            from {
                -webkit-transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
            }
        }
        .circle.active{
            width: 6rem;
            height: auto;
            position: absolute;
            left: calc(50% - 3rem);
            top: 3rem;
            z-index: 1;
            animation: rotation 15s infinite linear;
        }
        .playImg{
            width: 3.8rem;
            height: auto;
            border-radius: 1.5rem;
            position: absolute;
            left: calc(50% - 1.9rem);
            top: 4.1rem;
        }
        .playImg.active{
            width: 3.8rem;
            height: auto;
            border-radius: 1.5rem;
            position: absolute;
            left: calc(50% - 1.9rem);
            top: 4.1rem;
            animation: rotation 15s infinite linear;
        }
    }
    .playFoot{
        width: 7rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4rem;
        margin: 0.2rem;
        .icon{
            width: 0.4rem;
            height: 0.4rem;
            fill: #fff;
            color: #fff;
        }
        .play{
            width: 1rem;
            height: 1rem;
            fill: #fff;
            color: #fff;
        }
    }
    .playLyric{
        position: absolute;
        width: 7.5rem;
        height: 9rem;
        left: 0;
        top: 3rem;
        overflow: scroll;
        text-align: center;
        padding: 0.4rem;
        color: #fff;
        .active{
            color: red;
        }
    }
}
</style>