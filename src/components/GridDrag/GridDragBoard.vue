
<template>
    <div class="grid-main-container">
        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">1</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">2</p></div>
        <div class="grid-child3 grid-box primary-color" draggable="true"><p class="primary-text">3</p></div>
        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">4</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">5</p></div>
        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">6</p></div>

        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">7</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">8</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">9</p></div>
        <div class="grid-child3 grid-box primary-color" draggable="true"><p class="primary-text">10</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">11</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">12</p></div>

        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">13</p></div>
        <div class="grid-child3 grid-box primary-color" draggable="true"><p class="primary-text">14</p></div>
        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">15</p></div>
        <div class="grid-child3 grid-box primary-color" draggable="true"><p class="primary-text">16</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">17</p></div>
        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">18</p></div>

        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">19</p></div>
        <div class="grid-child1 grid-box primary-color" draggable="true"><p class="primary-text">20</p></div>
        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">21</p></div>
        <div class="grid-child2 grid-box primary-color" draggable="true"><p class="primary-text">22</p></div>
    </div>
</template>
  
<script>
import GridDrag from '../../js/GridDrag'
export default {
    mounted() {
        GridDrag()
        this.callDarkMode()
    },
    data() {
        return {

        }
    },
    methods: {
        callDarkMode(){
            this.$emit('darkMode');
        },
    }
}
</script>
  
<style>
@import '../../css/GridDrag.css';
@import '../../css/Color.css';
</style>
  