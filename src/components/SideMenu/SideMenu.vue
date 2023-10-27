<template>
    <div class="sidemenu-container">
        <div v-for="(a,i) in name.length" :key="a" class="menu">
            <router-link :to=to[i] class="no-hypertext">
                <p class="text-design primary-text"> <i :class=icons[i] class="icon-design primary-text"></i>{{name[i]}} </p>
            </router-link>
        </div>
    </div>
</template>

<script>
//컴포넌트 import하는곳

//컴포넌트 import끝

export default {
    name: 'SideMenu',
    mounted(){
        this.callDarkMode()
    },
    methods:{
        callDarkMode(){
            this.$emit('darkMode');
        },
    },
    data(){
        return {
            name : ['LolApi','3DModel','Chart','Drag and Grid','Drawing','SideMenu4'],
            to : ['/LolApi','/ThreeJs','/chart','/GridDrag','/DrawingAnimation','/chart'],
            icons : ["bi bi-controller",'bi bi-badge-3d',"bi bi-graph-up-arrow",'bi bi-mouse','bi bi-pencil','bi bi-book'],
        }
    },
    components: {},

}
</script>

<style>/**css import하는곳 */
    @import '../../css/SideMenu.css';
</style>