import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0 , 0 , 100 );
camera.lookAt ( 0 , 0 , 0 );

const scene = new THREE.Scene();

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 'rgb(199,139,6)' } );

const points = [];
points.push( new THREE.Vector3( -10 , 0 , 0 ));
points.push( new THREE.Vector3( 0 , 10 , 0 ));
points.push( new THREE.Vector3( 10 , 0 , 0 ));

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry , material );

scene.add( line );
renderer.render( scene , camera );

