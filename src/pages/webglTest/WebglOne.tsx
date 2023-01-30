import * as THREE from 'three'
import * as Stats from 'stats.js'
import React, { useEffect } from 'react';
import { initStats } from '../../utlis'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'


export const createHouse = (sc:THREE.Scene) => {
    const roof = new THREE.ConeGeometry(5,4);
    const base = new THREE.CylinderGeometry(5,5,6);

    const roofMesh = new THREE.Mesh(roof, new THREE.MeshLambertMaterial({ color:0x8b7213}));
    const baseMesh = new THREE.Mesh(base, new THREE.MeshLambertMaterial({ color:0xffe4c4}));
    roofMesh.position.set(25,8,-3);
    roofMesh.receiveShadow = true;
    roofMesh.castShadow = true;
    baseMesh.position.set(25,2,-3);
    baseMesh.receiveShadow = true;
    baseMesh.castShadow = true;
    sc.add(roofMesh);
    sc.add(baseMesh);
};

export const WebglOne = () => {
    const init = () => {
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        const scene = new THREE.Scene();
    
        // create a camera, which defines where we're looking at.
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    
        // create a render and set the size
        const renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color('black'));
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 告诉渲染器需要阴影效果
        renderer.shadowMap.enabled = true;
    
        createHouse(scene);

        // show axes in the screen
        const axes = new THREE.AxesHelper(20);
        scene.add(axes);
    
        // create the ground plane
        const planeGeometry = new THREE.PlaneGeometry(60, 20);
        const planeMaterial = new THREE.MeshLambertMaterial({
            color: '#95b6ad',
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    
        // rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.set(0, 0, 0);
        // plane接受阴影
        plane.receiveShadow = true;
    
        // add the plane to the scene
        scene.add(plane);
    
        // create a cube
        const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
        const cubeMaterial = new THREE.MeshLambertMaterial({
            color: 0xFF0000,
            wireframe: false
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // cube投射阴影
        cube.castShadow = true;
    
        // position the cube
        cube.position.set(-9, 3, 1);
    
        // add the cube to the scene
        scene.add(cube);
    
        // create a sphere
        const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        const sphereMaterial = new THREE.MeshLambertMaterial({
            color: 0x7777FF,
            wireframe: false
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
        // sphere投射阴影
        sphere.castShadow = true;

        // position the sphere
        sphere.position.set(10, 4, 2);
    
        // add the sphere to the scene
        scene.add(sphere);
    
        //add spotlight for the shadows
        const spotLight = new THREE.SpotLight(0xFFFFFF);
        spotLight.position.set(-40,40,-15);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize = new THREE.Vector2(1024,1024);
        spotLight.shadow.camera.far = 130;
        spotLight.shadow.camera.near = 40;
        scene.add(spotLight);

        //  添加环境光
        const ambientLight = new THREE.AmbientLight(0x3c3c3c);
        scene.add(ambientLight);


        // 帧数统计stats

        // position and point the camera to the center of the scene
        camera.position.set(-30, 40, 30);
        camera.lookAt(scene.position);
    
        // add the output of the renderer to the html element
        document.getElementById("webgloutput").appendChild(renderer.domElement);
    

        // const stats = initStats(0);
        // attach them here, since appendChild needs to be called first
        // const trackballControls = initTrackballControls(camera, renderer);
        // const clock = new THREE.Clock();
        let step = 0;
        function renderScene() {
            // stats.update();
    
            // rotate the cube around its axes
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;
            cube.rotation.z += 0.02;
    
            // bounce the sphere up and down
            step += 0.04;
            sphere.position.x = 35 + (15 * (Math.cos(step)));
            sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));
    
            // render using requestAnimationFrame
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
        }
        renderScene();


        // render the scene
        renderer.render(scene, camera);
    }
    useEffect(()=>{
        init();
    },[])
    return (
        <div>
            <div>请看</div>
            <div id='webgloutput'></div>
            <div className="hh">ww</div>
        </div>
    )
}