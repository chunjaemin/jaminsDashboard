import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useStore } from "vuex";

import lamborghini from '../assets/glb/lamborghini.glb'
import bmw from '../assets/glb/bmw.glb'
import jiotto from '../assets/glb/jiotto.glb'
import dreamcar from '../assets/glb/dreamcar.glb'
import honda from '../assets/glb/honda.glb'
import bugatti from '../assets/glb/bugatti.glb'
import mclaren from '../assets/glb/mclaren.glb'
import truck from '../assets/glb/truck.glb'


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 2 / 1, 0.01, 1000);
var loader = new GLTFLoader();
var renderer = new THREE.WebGLRenderer({ antialias: true });

var alight = new THREE.DirectionalLight(0xFFFFFF, 1);
var blight = new THREE.DirectionalLight(0xFFFFFF, 1);

var car;

var observer = new ResizeObserver(entries => {//사이즈 조절시 콜백될 함수
    for (let element of entries) {
       const cr = element.contentRect;
       renderer.setSize(cr.width, cr.height)
    }
});

var store;
function startStore(){
    store = useStore()
}

function createModel(){
    scene.background = new THREE.Color("white");
    camera.position.set(5, 7, 0);
    alight.position.set(0, 40, 0);
    blight.position.set(-40, 40, -60);
    scene.add(alight);
    scene.add(blight);

    const geometry = new THREE.CircleGeometry(10, 32);
    const material = new THREE.MeshBasicMaterial({ color: '#dcdcdc' });
    const circle = new THREE.Mesh(geometry, material);
    circle.translateY(-0.11)
    circle.rotateX(-1.59);
    scene.add(circle);

    
    loader.load(dreamcar, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    }, 
    (xhr) => {
        const progress = (xhr.loaded / 4845684) * 100;
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });

    const container = document.querySelector('.canvas');
    const renderwidth = container.clientWidth;
    const renderheight = container.clientHeight;
    renderer.setSize(renderwidth, renderheight);
    document.querySelector('.canvas').appendChild(renderer.domElement);

    observer.observe(container); //사이즈변경 옵저버 감시 시작
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 4;//물체와의 최대zoom 거리 
    controls.maxDistance = 13;//물체와의 최소zoom 거리
    controls.maxPolarAngle = 1.5;
    controls.enableDamping = true; //드래그에 감속효과 추가
    
    const animate = () => {
        requestAnimationFrame(animate);
        if (car) {
            //car.rotateY(0.02);
        }
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
};

function observerOFF() {
    observer.disconnect(); //관찰종료
    observer = null; //메모리해제
}

function changeLamborghini(){
    scene.remove(car)
    loader.load(lamborghini, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    }, 
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = Math.round((xhr.loaded / 5972400) * 100);
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changeBmw(){
    scene.remove(car)
    loader.load(bmw, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    },
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = Math.round((xhr.loaded / 14346024) * 100);
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changejiotto(){
    scene.remove(car)
    loader.load(jiotto, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    },
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = (xhr.loaded / 8381020) * 100;
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changeDreamcar(){
    scene.remove(car)
    loader.load(dreamcar, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    },
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = Math.round((xhr.loaded / 4845684) * 100);
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changeHonda(){
    scene.remove(car)
    loader.load(honda, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    },
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = Math.round((xhr.loaded / 2517148) * 100);
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changebugatti(){
    scene.remove(car)
    loader.load(bugatti, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    },
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = Math.round((xhr.loaded / 11266908) * 100);
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changeMclaren(){
    scene.remove(car)
    loader.load(mclaren, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    },
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = Math.round((xhr.loaded / 6525180) * 100);
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changeTruck(){
    scene.remove(car)
    loader.load(truck, gltf => {
        car = gltf.scene;
        scene.add(car);
        store.commit('setLoadingComplete');
    },
    (xhr) => {
        store.commit('setLoadingStart');
        const progress = Math.round((xhr.loaded / 8099712) * 100);
        store.commit('setProgress', progress);
    }, 
    undefined, function (error) {
        console.error(error);
    });
}

function changeColorBasic() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0xFFFFFF);
    blight.color.setHex(0xFFFFFF);
    scene.add(alight);
    scene.add(blight);
}


function changeColorGreen() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0x00C91E);
    blight.color.setHex(0x00C91E);
    scene.add(alight);
    scene.add(blight);
}

function changeColorRed() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0xFF0000);
    blight.color.setHex(0xFF0000);
    scene.add(alight);
    scene.add(blight);
}

function changeColorYellow() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0xD7E23D);
    blight.color.setHex(0xD7E23D);
    scene.add(alight);
    scene.add(blight);
}

function changeColorBlue() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0x0714FF);
    blight.color.setHex(0x0714FF);
    scene.add(alight);
    scene.add(blight);
}

function changeColorSkyblue() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0x07E4F4);
    blight.color.setHex(0x07E4F4);
    scene.add(alight);
    scene.add(blight);
}

function changeColorPink() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0xFF63F2);
    blight.color.setHex(0xFF63F2);
    scene.add(alight);
    scene.add(blight);
}


function changeColorPurple() {
    scene.remove(alight);
    scene.remove(blight);
    alight.color.setHex(0xA007ED);
    blight.color.setHex(0xA007ED);
    scene.add(alight);
    scene.add(blight);
}





export default {
    startStore,
    createModel,
    changeLamborghini,
    changeBmw,
    changejiotto,
    changeDreamcar,
    changeHonda,
    changebugatti,
    changeMclaren,
    changeTruck,
    changeColorBasic,
    changeColorGreen,
    changeColorRed,
    changeColorYellow,
    changeColorSkyblue,
    changeColorBlue,
    changeColorPink,
    changeColorPurple,
    observerOFF,
}