
<template>
    <div class="render-container"></div>
    <div class="flex-container">
        <div @click='ChangeModel("Car")' class="box1"></div>
        <div @click='ChangeModel("Bmw")' class="box2"></div>
    </div>
</template>
  
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default {
    name: 'three.vue',

    mounted() {
        this.CreateModel();
    },
    beforeUnmount() {
        this.observer.disconnect(); //관찰종료
        this.observer = null; //메모리해제
    },
    methods: {
        ChangeModel(model) {
            this.Model=this.ModelObject[model];
            console.log(this.scene);
        },
        CreateModel() {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
            const loader = new GLTFLoader();
            scene.background = new THREE.Color("white");

            camera.position.set(6, 8, 0);

            //조명 생성 및 위치 세팅 
            const alight = new THREE.DirectionalLight(0xffff00, 1);
            const blight = new THREE.DirectionalLight(0xffff00, 1);
            alight.position.set(50, 50, 50);
            blight.position.set(-50, -50, -50);
            scene.add(alight);
            scene.add(blight);


            //3d 물체의 바닥에 설치할 원판바닥
            const geometry = new THREE.CircleGeometry(10, 32);
            const material = new THREE.MeshBasicMaterial({ color: '#dcdcdc' });
            const circle = new THREE.Mesh(geometry, material);
            circle.translateY(-0.11)
            circle.rotateX(-1.59);
            scene.add(circle);

            //(개발용임) xyz의 축이 어느방향인지 보기 위해 축을 생성+ 축의 크기세팅 한 것
            const axesHelper = new THREE.AxesHelper();
            axesHelper.scale.set(4, 4, 4);
            scene.add(axesHelper);

            let car1;
            loader.load(this.Model, function (gltf) {
                car1 = gltf.scene;
                car1.rotation.set(0, Math.PI, 0); //??이거 내가 왜추가했는지 기억안남 필요없으면 지워보기
                scene.add(car1);
            }, undefined, function (error) {
                console.error(error);
            });


            const renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias: true 계단현상 방지용 (필수)
            const container = document.querySelector('.render-container');
            const renderwidth = container.clientWidth;
            const renderheight = container.clientHeight;
            renderer.setSize(renderwidth, renderheight);

            //보여줄 화면을 html에 배치하는 구문 (특정 요소를 선택한뒤 그안에 배치하도록 하는 구문임)
            document.querySelector('.render-container').appendChild(renderer.domElement);


            //마우스로 물체를 돌려볼수 있게 하도록 하는 구문
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.minDistance = 4;//물체와의 최대zoom 거리 
            controls.maxDistance = 13;//물체와의 최소zoom 거리
            controls.maxPolarAngle = 1.5;
            controls.enableDamping = true; //드래그에 감속효과 추가

            function animate() {
                if (car1) {//if 구문을 통해 car1객체가 생성되면 그다음에 실행하도록 하기
                    car1.rotateY(0.02);
                }
                controls.update(); //controls.enableDamping=true; 구문을 쓸거면 이 구문을 같이 반드시 써주기

                renderer.render(scene, camera);
                requestAnimationFrame(animate);//이구문 뜻 -> 위 구문들 초당 60프레임으로 계속 실행
            }
            animate();

            this.observer = new ResizeObserver(entries => {
                for (let element of entries) {
                    const cr = element.contentRect;
                    renderer.setSize(cr.width, cr.height)
                }
            });

            this.observer.observe(container)
        }
    },

    data() {
        return {
            Model: '../src/assets/glb/car.glb',
            ModelObject: {
                Car: '../src/assets/glb/car.glb',
                Bmw: '../src/assets/glb/bmw.glb',
            },
            observer: null,
        }
    },
}
</script>
  
  
<style>
.render-container {
    width: 100%;
    height: 100%;
}
</style>
  