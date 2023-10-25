import { createWebHashHistory, createRouter } from "vue-router";

//import할 라우팅페이지들
import Chart from './components/chart/MainChart.vue'
import LolApi from './components/LolApi/UserStatus.vue'
import MainThreeJs from './components/ThreeJs/MainThreeJs.vue'
import GridDrag from './components/GridDrag/GridDragBoard.vue'
//라우팅페이지끝

const routes = [
  {
    path: "/", 
    component: LolApi,
  },
  {
    path: "/chart",
    name:'Chart',
    component: Chart,
  },
  {
    path: "/LolApi",
    name:'LolApi',
    component: LolApi,
  },
  {
    path: "/ThreeJs",
    name:'ThreeJs',
    component: MainThreeJs,
  },
  {
    path: "/GridDrag",
    name:'GridDrag',
    component: GridDrag,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router; 