<template>
    <div class="listView">
        <listview-top :playlist="state.playlist"></listview-top>
    </div>
</template>

<script>
import listviewTop from '@/components/listViewtop.vue'
import { getPlaylistDetai } from '@/api/index.js'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

export default{
    setup(){
        const route = useRoute()
        console.log(route)
        let state = reactive({
            list:[],
            playlist:{}
        })
        onMounted(async ()=>{
            let id = route.query.id;
            let res = await getPlaylistDetai(id);
            state.playlist = res.data.playlist
            console.log(res)
        })
        return {
            state
        }
    },
    components:{
        listviewTop
    }
}

</script>