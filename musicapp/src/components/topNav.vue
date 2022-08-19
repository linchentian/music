<template>
    <div class="topNav">
    <div class="topleft">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
        </svg>
    </div>
    <div class="topCenter" @click="$router.push('/searchview')">
        <input class="search" placeholder="马頔">
    </div>
    <div class="topRight" >
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huatong"></use>
        </svg>
    </div>
    </div>
</template>

<script src="../assets/icon/iconfont.css">
</script>

<style lang="less" scoped>
.topNav{
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    .icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .sousuo{
        width: 0.45rem;
        height: 0.45rem;
    }
    .topCenter{
        width: 6rem;
        display: flex;
        justify-content: space-around;
        input{
            width: 5rem;
            height: 0.5rem;
            border-radius: 1rem;
            border: 1px;
            text-align: center;
        }
    }
}
</style>