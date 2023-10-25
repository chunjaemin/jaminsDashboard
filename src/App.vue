<template>
  <div class="main-flex-container primary-theme">
    <div class="right-container">
      <div class="top-nav-container primary-color">
        <p class="top-text primary-text">DashBoard</p>
        <div class="icon-container">
          <i @click='darkMode' :class=modeIcon class="primary-text"></i>
        </div>
        <div @click='animationButton' class="menu-button d-lg-none">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <router-view @darkMode="keepDarkMode"></router-view>
      <div class="footer-container primary-color">
        <p class="bottom-text">footer</p>
      </div>
    </div>
    <transition name="fade">
      <div class="left-empty-area" v-if="lg_hidden_empty==true"></div>
    </transition>
  </div>


    <transition name="left">
      <div class="left-fixed-container primary-color" v-if="lg_hidden==true">
        <perfect-scrollbar>
          <side-menu @darkMode="keepDarkMode"></side-menu>
        </perfect-scrollbar>
      </div>
    </transition>
</template>

<script>
import SideMenu from './components/SideMenu/SideMenu.vue'

export default {
  data(){
    return{
      lg_hidden : true,
      lg_hidden_empty : true,
      modeIcon : 'bi bi-brightness-high',
    }
  },

  components: {
    SideMenu,
  },

  mounted(){
    window.addEventListener('resize',this.CheckWindowSize);
    this.CheckWindowSize();
  },

  methods:{
    CheckWindowSize(){
      if (window.innerWidth<=991){
        this.lg_hidden = false;
        this.lg_hidden_empty = false;
      } else {
        this.lg_hidden = true;
        this.lg_hidden_empty = true;
      }
    },
    animationButton(){
      document.querySelector('.menu-button').classList.toggle('active');
      this.lg_hidden = !this.lg_hidden;
    },
    darkMode(){
      if (this.modeIcon=='bi bi-brightness-high'){
        this.modeIcon='bi bi-moon';
        document.querySelector('.primary-theme').style.backgroundColor='#DADDE2'
        document.querySelectorAll('.primary-color').forEach(element => {
          element.style.backgroundColor='white'
          element.classList.add('box-shadow');
        });
        document.querySelectorAll('.primary-text').forEach(element=>{
          element.style.color='rgb(46, 44, 44)'
        });
        document.querySelectorAll('.menu-button > span').forEach(element=>{
          element.style.backgroundColor='rgb(46, 44, 44)'
        })
      } else if (this.modeIcon=='bi bi-moon'){
        this.modeIcon='bi bi-brightness-high';
        document.querySelector('.primary-theme').style.backgroundColor='rgb(23, 21, 21)'
        document.querySelectorAll('.primary-color').forEach(element => {
          element.style.backgroundColor='rgb(46, 44, 44)'
          element.classList.remove('box-shadow');
        });
        document.querySelectorAll('.primary-text').forEach(element=>{
          element.style.color='white'
        });
        document.querySelectorAll('.menu-button > span').forEach(element=>{
          element.style.backgroundColor='white'
        })
      }
    },
    keepDarkMode(){
      if (this.modeIcon=='bi bi-moon'){
        document.querySelector('.primary-theme').style.backgroundColor='#DADDE2'
        document.querySelectorAll('.primary-color').forEach(element => {
          element.style.backgroundColor='white'
          element.classList.add('box-shadow');
        });
        document.querySelectorAll('.primary-text').forEach(element=>{
          element.style.color='rgb(46, 44, 44)'
        });
        document.querySelectorAll('.menu-button > span').forEach(element=>{
          element.style.backgroundColor='rgb(46, 44, 44)'
        })
      } else if (this.modeIcon=='bi bi-brightness-high'){
        document.querySelector('.primary-theme').style.backgroundColor='rgb(23, 21, 21)'
        document.querySelectorAll('.primary-color').forEach(element => {
          element.style.backgroundColor='rgb(46, 44, 44)'
          element.classList.remove('box-shadow');
        });
        document.querySelectorAll('.primary-text').forEach(element=>{
          element.style.color='white'
        });
        document.querySelectorAll('.menu-button > span').forEach(element=>{
          element.style.backgroundColor='white'
        })
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize',this.CheckWindowSize);
  },
}
</script>

<style>
  @import './css/Appvue.css';
  @import './css/Color.css';
  .ps{
    height:100vh;
  }
</style>