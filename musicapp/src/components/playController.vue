<template>
    <div class="playController">
        <div class="left" @click="show=!show">
            <img :src="playlist[playCurrentIndex].al.picUrl">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].name}}</div>
                <div class="tips">横划切换上下一首歌</div>
            </div>
        </div>
        <div class="right">
            <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
                <use  xlink:href="#icon-bofang"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="play">
                <use  xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gengduo2"></use>
            </svg>
        </div>
        <play-music @back="show=!show" v-show="show" :play="play" @changePaused="changePaused" :paused="paused" :playDetail="playlist[playCurrentIndex]"></play-music>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import playMusic from '@/components/playMusic.vue'
export default{
    data(){
        return {
            paused: true,
            show: false,
        }
    },
    components:{
        playMusic
    },
    computed:{
        ...mapState(['playlist', 'playCurrentIndex'])
    },
    mounted(){
        // console.log([this.$refs.audio])
        this.$store.dispatch('reqLyric', {id: this.playlist[this.playCurrentIndex].id})
    },
    updated(){
        // console.log(this.show)
        this.$store.dispatch('reqLyric', {id: this.playlist[this.playCurrentIndex].id})
        
    },
    methods:{
        play:function(){
            if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.paused = false
                this.updateTime()
            }else{
                this.$refs.audio.pause()
                this.paused = true
                this.updateTime(this.$store.state.id)
            }
        },
        updateTime(){
            this.$store.state.id = setInterval(() => {
                this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
            }, 1000)
        },
        changePaused(){
            console.log(this.paused)
            this.paused = true;
        }
    }
}
</script>

<style lang="less" scoped>
.playController{
    background-color: #eee;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    z-index: 999;
    .left{
        display: flex;
        padding: 0 0.2rem;
        img{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }
        .content{
            padding:0 0.2rem;
            .tips{
                font-size: 0.2rem;
                color: #999;
            }
        }
    }
    .right{
        .icon{
            margin: 0 0.2rem;
            width: 0.6rem;
            height: 0.6rem;
        }
    }
}
</style>