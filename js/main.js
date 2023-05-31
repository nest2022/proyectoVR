const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//const controls = new THREE.OrbitControls(camera, renderer.domElement);
var controls = new THREE.DeviceOrientationControls(camera);

const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
const material2 = new THREE.MeshBasicMaterial({ color: 0xF01607 });
const material3 = new THREE.MeshBasicMaterial({ color: 0x8C07F0 });

const ParedGeometry = new THREE.BoxGeometry(0.03, 0.7, 26);
const Pared = new THREE.Mesh(ParedGeometry, material2);
Pared.position.set(-0.7,0.1,-7);
scene.add(Pared);

const Pared2 = new THREE.Mesh(ParedGeometry, material2);
Pared2.position.set(0.7,0.1,-7);
scene.add(Pared2);

const PisoGeometry = new THREE.BoxGeometry(1.5, 0.1, 26);
const Piso = new THREE.Mesh(PisoGeometry, material3);
Piso.position.set(0,-0.2,-7)
scene.add(Piso);

const bollGeometry = new THREE.SphereGeometry(0.5, 36, 16);
const esfera = new THREE.Mesh(bollGeometry, material);
esfera.position.set(0,0.34,4.5);
scene.add(esfera);

camera.position.set(0, 0, 3);
var initialCameraPosition = new THREE.Vector3(0, 0, 0);
camera.position.copy(initialCameraPosition);

const obst = new THREE.BoxGeometry(0.3, 0.2, 0.1);
const obstaculo = new THREE.Mesh(obst, material);
obstaculo.position.set(0,-0.1,2);
scene.add(obstaculo);

const obstaculo2 = new THREE.Mesh(obst, material);
obstaculo2.position.set(0,-0.1,0);
scene.add(obstaculo2);

const obstaculo3 = new THREE.Mesh(obst, material);
obstaculo3.position.set(0,-0.1,-2);
scene.add(obstaculo3);

const obstaculo4 = new THREE.Mesh(obst, material);
obstaculo4.position.set(0,-0.1,-4);
scene.add(obstaculo4);

const obstaculo5 = new THREE.Mesh(obst, material);
obstaculo5.position.set(0,-0.1,-6);
scene.add(obstaculo5);

const obstaculo6 = new THREE.Mesh(obst, material);
obstaculo6.position.set(0,-0.1,-8);
scene.add(obstaculo6);

const obstaculo7 = new THREE.Mesh(obst, material);
obstaculo7.position.set(0,-0.1,-10);
scene.add(obstaculo7);

const obstaculo8 = new THREE.Mesh(obst, material);
obstaculo8.position.set(0,-0.1,-12);
scene.add(obstaculo8);

const obstaculo9 = new THREE.Mesh(obst, material);
obstaculo9.position.set(0,-0.1,-14);
scene.add(obstaculo9);

const obstaculo10 = new THREE.Mesh(obst, material);
obstaculo10.position.set(0,-0.1,-16);
scene.add(obstaculo10);

let velocidad = 0.01;
let velocidad2 = 0.015;
let velocidad3 = 0.02;
let velocidad4 = 0.025;
let velocidad5 = 0.03;
let velocidad6 = 0.035;
let velocidad7 = 0.04;
let velocidad8 = 0.045;
let velocidad9 = 0.055;
let velocidad10 = 0.06;
let direccion = 1;
let direccion2 = -1;
let direccion3 = 1;
let direccion4 = -1;
let direccion5 = 1;
let direccion6 = -1;
let direccion7 = 1;
let direccion8 = -1;
let direccion9 = 1;
let direccion10 = -1;


function checkCollision() {
  // Crear un cuadro de colisión que represente el espacio ocupado por el cubo
  const cameraPosition = camera.position.clone();
  const cubePosition = esfera.position.clone();
  const distance = cameraPosition.distanceTo(cubePosition);

  const obstaculoPosition = obstaculo.position.clone();
  const distance2 = cameraPosition.distanceTo(obstaculoPosition);

  const obstaculoPosition2 = obstaculo2.position.clone();
  const distance3 = cameraPosition.distanceTo(obstaculoPosition2);

  const obstaculoPosition3 = obstaculo3.position.clone();
  const distance4 = cameraPosition.distanceTo(obstaculoPosition3);

  const obstaculoPosition4 = obstaculo4.position.clone();
  const distance5 = cameraPosition.distanceTo(obstaculoPosition4);

  const obstaculoPosition5 = obstaculo5.position.clone();
  const distance6 = cameraPosition.distanceTo(obstaculoPosition5);

  const obstaculoPosition6 = obstaculo6.position.clone();
  const distance7 = cameraPosition.distanceTo(obstaculoPosition6);

  const obstaculoPosition7 = obstaculo7.position.clone();
  const distance8 = cameraPosition.distanceTo(obstaculoPosition7);

  const obstaculoPosition8 = obstaculo8.position.clone();
  const distance9 = cameraPosition.distanceTo(obstaculoPosition8);

  const obstaculoPosition9 = obstaculo.position.clone();
  const distance10 = cameraPosition.distanceTo(obstaculoPosition9);

  const obstaculoPosition10 = obstaculo10.position.clone();
  const distance11 = cameraPosition.distanceTo(obstaculoPosition10);



// Verificar si el cubo colisiona con el otro objeto
if (distance < 0.5) { // Ajusta la distancia de colisión según tus necesidades
// Reiniciar la posición de la cámara y la piedra
camera.position.set(0, 0, 3);
esfera.position.set(0,0.34,4.5);
}

if (distance2 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance3 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance4 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance5 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance6 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance7 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance8 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance9 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance10 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

if (distance11 < 0.3) { // Ajusta la distancia de colisión según tus necesidades
  // Reiniciar la posición de la cámara y la piedra
  camera.position.set(0, 0, 3);
  esfera.position.set(0,0.34,4.5);
}

}



// Variables para el movimiento de la cámara
 // Sensibilidad ajustable

// Variables para el movimiento de la cámara al hacer clic


// Configuración de StereoEffect
const stereoEffect = new THREE.StereoEffect(renderer);
stereoEffect.setSize(window.innerWidth, window.innerHeight);

// Configuración de la canción
const audio = new Audio();
audio.src = 'caminar.mp3';

let isMouseDown = false;

      function onMouseDown(event) {
        if (event.button === 0) {
          isMouseDown = true;

          
          audio.play();
          
        }
      }

      function onMouseUp(event) {
        if (event.button === 0) {
          isMouseDown = false;
          
          audio.pause();
        }
      }

// Agrega los eventos para escuchar el movimiento y clic del mouse
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);



// Función de animación
function animate() {
  requestAnimationFrame(animate);

  obstaculo.position.x += velocidad * direccion;
  obstaculo2.position.x += velocidad2 * direccion2;
  obstaculo3.position.x += velocidad3 * direccion3;
  obstaculo4.position.x += velocidad4 * direccion4;
  obstaculo5.position.x += velocidad5 * direccion5;
  obstaculo6.position.x += velocidad6 * direccion6;
  obstaculo7.position.x += velocidad7 * direccion7;
  obstaculo8.position.x += velocidad8 * direccion8;
  obstaculo9.position.x += velocidad9 * direccion9;
  obstaculo10.position.x += velocidad10 * direccion10;

  if (obstaculo.position.x >= 0.5 || obstaculo.position.x <= -0.5) {
    direccion *= -1; // Invertir la dirección
  }
  if (obstaculo2.position.x >= 0.5 || obstaculo2.position.x <= -0.5) {
    direccion2 *= -1; // Invertir la dirección
  }
  if (obstaculo3.position.x >= 0.5 || obstaculo3.position.x <= -0.5) {
    direccion3 *= -1; // Invertir la dirección
  }
  if (obstaculo4.position.x >= 0.5 || obstaculo4.position.x <= -0.5) {
    direccion4 *= -1; // Invertir la dirección
  }
  if (obstaculo5.position.x >= 0.5 || obstaculo5.position.x <= -0.5) {
    direccion5 *= -1; // Invertir la dirección
  }
  if (obstaculo6.position.x >= 0.5 || obstaculo6.position.x <= -0.5) {
    direccion6 *= -1; // Invertir la dirección
  }
  if (obstaculo7.position.x >= 0.5 || obstaculo7.position.x <= -0.5) {
    direccion7 *= -1; // Invertir la dirección
  }
  if (obstaculo8.position.x >= 0.5 || obstaculo8.position.x <= -0.5) {
    direccion8 *= -1; // Invertir la dirección
  }
  if (obstaculo9.position.x >= 0.5 || obstaculo9.position.x <= -0.5) {
    direccion9 *= -1; // Invertir la dirección
  }
  if (obstaculo10.position.x >= 0.5 || obstaculo10.position.x <= -0.5) {
    direccion10 *= -1; // Invertir la dirección
  }

  if (camera.position.x > 0.8) {
    // Reiniciar la posición de la cámara
    camera.position.copy(initialCameraPosition);
  }

  if (camera.position.x < -0.8) {
    // Reiniciar la posición de la cámara
    camera.position.copy(initialCameraPosition);
  }



  // Rota la cámara según las coordenadas del mouse

  esfera.position.z -= 0.01;

  // Avanza la cámara si
  if (isMouseDown) {
    camera.position.z -= 0.1;
    if (camera.position.z < 0 && !audio.paused) {
      audio.play();
    }
  }
checkCollision();
controls.update();



}

function render() {
  requestAnimationFrame(render);

  

  stereoEffect.render(scene, camera);
}



// Event listeners
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  stereoEffect.setSize(window.innerWidth, window.innerHeight);
});



// Inicialización
document.body.appendChild(renderer.domElement);



render();

// Iniciar la animación
animate();



