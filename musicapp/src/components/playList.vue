<template>
    <div class="playlist">
        <div class="playlist-top">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiangyousanjiaoxing"></use>
                </svg>
                <div class="'text'">
                    <div>播放全部(共{{playlist.tracks.length}}首)</div>
                </div>
            </div>
            <div class="btn">
                    <span>+ 收藏({{changeValue(playlist.subscribedCount)}})</span>
            </div>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i" @click="setPlayIndex(i)">
                    <div class="left">
                        <div class="index">{{i+1}}</div>
                        <div class="content">
                            <div class="title">{{item.name}}</div>
                            <div class="author">
                                <span class="tag" v-for="(tag, index) in playlist.tags" :key="index">{{tag}}</span>
                                <sapc>{{item.ar[0].name}}</sapc>
                            </div>
                        </div>    
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-huatong"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo-shuxiang"></use>
                        </svg>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default{
    props:['playlist'],
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
        },
        ...mapMutations(['setPlayIndex'])
    },
}
</script>

<style lang="less" scoped>
.playlist{
    width: 7.5rem;
    padding: 0 0.4rem;
    background-color: #ccc;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0.4rem;
    .playlist-top{
        display: flex;
        justify-content: space-between;
        height: 1.2rem;
        align-items: center;
        .left{
            display: flex;
            align-items: center;
            .icon{
                margin-right: 0.2rem;
                width: 0.4rem;
                height: 0.4rem;
            }
            .text{
                display: flex;
                align-items: center;
                margin-left: 0.2rem;
            }
        }
        .btn{
            font-size: 0.3rem;
            color: #fff;
            background-color: orangered;
            height: 0.4rem;
            line-height: 0.4rem;
            border-radius: 0.5rem;
            padding: 0.3rem;
            display: flex;
            align-items: center;
        }
    }
    .list{
        .playItem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1rem;
            .left{
                display: flex;
                align-items: center;
                color: #666;
                .index{
                    width: 0.3rem;
                }
                .content{
                    margin-left: 0.4rem;
                }
                .title{
                    font-size: 0.3rem;
                    font-weight: 900;
                    color: #000;
                    margin-bottom: 0.1rem;
                }
                .tag{
                    margin: 0 0.05rem;
                    font-size: 0.2rem;
                    color: orangered;
                    border: 1px solid orangered;
                    border-radius: 0.1rem;
                    color: #666;
                }
                .author{
                    color: #666;
                }
            }
            .right{
                .icon{
                    margin: 0 0.1rem;
                }
            }
        }
    }
}

</style>