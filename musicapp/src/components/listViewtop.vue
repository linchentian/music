<template>
    <div class="listViewTop">
        <img class="bg" :src="playlist.coverImgUrl">
        <div class="listViewTopNav">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fanhui"></use>
                </svg>
                <div class="title">
                    <span>歌单</span>
                </div>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="contentTop">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl">
                <div class="count">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang"></use>
                    </svg>
                    <span>{{changeValue(playlist.playCount)}}</span>
                </div>
            </div>
            <div class="contentRight">
                <h3>{{playlist.name}}</h3>
                <div class="author">
                    <img :src="playlist.creator.avatarUrl"  class="header">
                    <span>{{playlist.creator.nickname}}</span>
                </div>
                <div class="description">
                    {{playlist.description}}
                </div>
            </div>
        </div>
        <div class="iconList">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-dianzan"></use>
                </svg>
                <span>{{playlist.commentCount }}</span> 
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span>{{playlist.shareCount }}</span> 
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <span>下载</span> 
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduo"></use>
                </svg>
                <span>多选</span> 
            </div>
        </div>
    </div>
</template>

<script>
import { getPlaylistDetai } from '@/api'



export default{
    props:['playlist'],
    mounted(){
        // console.log(this.playlist.creator.avatarUrl)
        
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
}
</script>

<style lang="less" scoped>
.listViewTop{
    width: 7.5rem;
    padding: 0.2rem 0.4rem;
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        width: 7.4rem;
        height: auto;
        z-index: -1;
        filter: blur(30px);
    }
    .listViewTopNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.8rem;
        font-size: 0.3rem;
        .title{
            color: #fff;
            margin-left: 0.3rem;
        }
        .icon{
            width: 0.4rem;
            height: 0.4rem;
            fill: #fff;
        }
        .back{
            display: flex;
        }
        .right{
            display: flex;
            .icon{
                margin-left: 0.3rem;
            }
        }
    }
    
    .contentTop{
        display: flex;
        justify-content: space-vetween;
        padding: 0.4rem 0;
        .contentLeft{
            position: relative;
            img{
                width: 2.8rem;
                height: 2.8rem;
                border-radius: 0.1rem;
            }
            .count{
                    color: #fff;
                    position: absolute;
                    right: 0.1rem;
                    top: 0.1rem;
                    font-size: 0.25rem;
                    display: flex;
                    align-items: center;
                    font-weight: 900;
                    .icon{
                        fill: #fff;
                    }
                }
        }
        .contentRight{
            width: 3.5rem;
            height: 3rem;
            margin-left: 0.2rem;
            h3{
                color: #fff;
            }
            .author{
                display: flex;
                align-items: center;
                color: #aaa;
                margin: 0.2rem 0;
                img{
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 0.3rem;
                    margin-right: 0.2rem;
                }
            }
            .description{
                font-size: 0.26rem;
                // height: 0.9rem;
                color: #ccc;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
    .iconList{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 0.5rem;
                height: 0.5rem;
                // fill: #fff;
                // color: #fff;
            }
            span{
                font-size: 0.3rem;
                padding-top: 0.3rem;
                color: #fff;
            }
        }
    }
}

</style>