
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load your 3D model
var loader = new THREE.GLTFLoader();
loader.load('/E:/Task/threejs/model/pyramid.gltf', function(gltf){
  scene.add(gltf.scene);
}, undefined, function(error){
  console.error(error);
});

// Render the scene
var animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
