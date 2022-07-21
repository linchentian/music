<template>
    <div class="listView">
        <listview-top :playlist="state.playlist"></listview-top>
        <play-list :playlist="state.playlist"></play-list>
    </div>
</template>

<script>
import listviewTop from '@/components/listViewtop.vue'
import playList from '@/components/playList.vue'
import { getPlaylistDetai } from '@/api/index.js'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store'

export default{
    setup(){
        const route = useRoute()
        // console.log(route)
        let state = reactive({
            list:[],
            playlist:{
                creator:{},
                tracks:{}
            }
        })
        onMounted(async ()=>{
            let id = route.query.id;
            let res = await getPlaylistDetai(id);
            state.playlist = res.data.playlist
            store.commit('setPlaylist', state.playlist.tracks)
            console.log(state.playlist)
        })
        return {
            state
        }
    },
    components:{
        listviewTop,
        playList
    }
}

</script>