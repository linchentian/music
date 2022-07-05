<template>
    <div class="listViewTop">
        <img class="bg" :src="playlist.coverImgUrl">
        <div class="listViewTopNav">
            <div class="back">
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zuojiantou"></use>
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
                        <use xlink:href="#icon-gengduo-shuxiang"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['playlist'],
}
</script>

<style lang="less" scoped>
.listViewTop{
    width: 7.5rem;
    padding: 0 0.4rem;
    height: 6rem;
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
            margin-left: 0.4rem;
        }
        
        .icon{
            width: 0.4rem;
            height: 0.4rem;
            fill: #fff;
            margin-left: 0.4rem;
        }
    }
    .back,.right{
        display: flex;
    }
}
</style>