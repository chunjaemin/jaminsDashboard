
<template>
    <div class="empty-bottom-box"><p class="primary-text scroll-text">scroll down<i class="bi bi-arrow-down"></i></p></div>
    <div class="content1">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"
            xmlns:krita="http://krita.org/namespaces/svg/krita"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" 
            viewBox="0 0 595.2 841.92">
            <defs />
            <path class="path" id="shape0" transform="translate(2.78545825370508, 84.3905660377359)" fill="none" stroke="#000000"
                stroke-width="1.2" stroke-linecap="square" stroke-linejoin="bevel"
                d="M76.641 0C76.641 25.2 57.2691 78.2439 81.6051 92.3332C125.607 117.808 236.411 98.215 211.666 73.4694C196.79 58.5934 83.4053 123.296 67.7055 138.996C47.7551 158.947 60.7104 260.505 69.6911 282.957C81.7507 313.105 103.36 348.396 123.304 368.34C125.615 370.651 140.359 366.354 143.161 366.354C150.682 366.354 178.236 370.992 182.874 366.354C197.369 351.859 295.685 181.317 278.185 163.817C201.819 87.4503 216.846 275.402 165.996 300.828C139.928 313.861 128.973 210.608 122.311 190.623C115.758 170.964 104.12 160.518 92.5262 148.925C67.2521 123.65 -10.4872 207.472 1.18586 254.165C26.5572 355.65 103.027 402.039 211.666 391.175C245.059 387.836 278.883 383.544 308.963 367.347C345.748 347.54 389.563 285.845 403.282 278.985C425.819 267.717 462.726 171.634 440.017 148.925C420.884 129.792 383.165 206.72 391.368 231.329C411.894 292.908 464.851 287.934 497.601 320.684C502.846 325.929 495.615 349.538 495.615 356.426C495.615 371.177 483.748 391.144 471.787 399.118C461.278 406.124 444.249 405.075 432.074 405.075C393.851 405.075 394.84 365.836 390.375 334.584C387.628 315.353 388.099 295.692 383.425 277C382.535 273.438 375.247 249.436 372.504 252.179C324.535 300.148 369.159 396.384 309.956 435.852C298.155 443.72 283.082 444.788 269.25 444.788C254.701 444.788 237.446 443.762 226.558 432.874C210.838 417.153 207.094 322.278 221.594 307.777C262.083 267.289 233.945 402.95 262.3 410.039C303.822 420.419 295.449 313.349 309.956 298.842C310.447 298.351 321.367 304.296 322.863 305.792C337.576 320.504 333.065 341.089 342.719 360.397C350.29 375.539 349.762 392.913 352.648 415.996C364.295 509.175 376.077 524.81 453.916 547.049C471.954 552.203 508.967 562.38 524.407 550.028C557.042 523.92 556.354 466.105 515.472 449.752C430.438 415.739 353.102 461.464 339.741 554.992C336.886 574.977 330.099 612.156 338.748 629.454C348.571 649.1 433.068 678.103 456.895 672.146C473.327 668.038 477.988 657.01 487.673 647.325C506.843 628.155 437.652 622.221 430.089 616.548C406.871 599.134 412.148 569.746 399.311 544.071C397.333 540.116 399.311 529.815 399.311 525.207C399.311 475.457 481.183 479.997 504.551 503.365C512.832 511.646 499.832 520.121 495.615 522.229C485.971 527.051 463.773 517.193 459.873 513.293C459.67 513.09 399.37 518.739 393.354 520.243C370.984 525.836 302.031 541.097 282.157 536.128C250.439 528.199 204.132 519.475 170.96 524.214C143.109 528.193 117.638 538.162 99.4761 559.956C89.3408 572.119 89.5296 580.896 86.5693 595.698C84.6573 605.258 80.5621 628.411 88.5549 636.404C115.185 663.034 186.924 682.428 223.58 679.096C245.182 677.132 304.588 637.581 290.099 608.605C282.319 593.044 235.283 581.904 217.623 590.734C160.261 619.415 235.049 695.974 59.7628 695.974"
                sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" />
        </svg>
    </div>
    <div class="empty-bottom-box"></div>
</template>
  
<script>
export default {
    
    mounted() {
        this.callDarkMode()

        var content1 = document.querySelector('.content1')

        var path=document.querySelector('.path');
        var pathLength=path.getTotalLength();
 
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.5, content1, pathLength)

        function calcDashoffset(scrollY, element, length) {
            const ratio = (scrollY - element.offsetTop) / element.offsetHeight
            const value = length - (length * ratio)
            return value < 0 ? 0 : value > length ? length : value
        }

        function scrollHandler() {
            const scrollY = window.scrollY + (window.innerHeight * 0.5)
            path.style.strokeDashoffset = calcDashoffset(scrollY, content1, pathLength)
        }

        window.addEventListener('scroll', scrollHandler)
    },

    data() {
        return {

        }
    },

    methods: {
        callDarkMode(){
            this.$emit('darkMode');
        },
    },

    components: {

    }
}
</script>
  
<style>
.content1{
    width:100%;
    aspect-ratio: 1/1;
}

.path{
    width: 100%;
    height:100%;
    stroke: rgb(16, 226, 20);
}

.empty-bottom-box{
    width: 100%;
    aspect-ratio: 2/1;
}

.scroll-text{
    font-size: 18vw;
}

</style>
  