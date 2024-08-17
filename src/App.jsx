import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { suspend } from 'suspend-react'
import { Instances, Computers } from './Computers'
import { SunEarthMoon } from './SunEarthMoon'
import { gsap } from 'gsap/gsap-core'


export default function App() {
  const mainRef = useRef();
  const [showStartButton, setShowStartButton] = useState(false);
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartButton(true);
    }, 7000); // Show start button after 7 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

      tl.to('.lightCyan-slider', {
        x: '-10%',
        duration: 1,
      });

      tl.to(
        '.persianGreen-slider',
        {
          x: '-20%',
          duration: 1.5,
        },
        '-=1'
      );

      tl.to(
        '.white-slider',
        {
          x: '-30%',
          duration: 1.5,
        },
        '-=1'
      );

      tl.to('.hide', {
        x: '0%',
        duration: 2,
        opacity: 1,
      });

      tl.to('.preloader', {
        x: '200%',
        duration: 3,
      });

      tl.fromTo(
        'nav',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        '-=2'
      );

      tl.fromTo(
        '.hero-content',
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
        },
        '-=1.5'
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const handleButtonClick = () => {
    gsap.to('.hero-content', {
      opacity: 0,
      duration: 1,
      onComplete: () => setShowScene(true),
    });
  };

  return (
    <div className="" ref={mainRef}>
      {!showScene ? (
        <>
          {/* Intro */}
          <div className="preloader">
            <div className="prl-logo">
              <h1 className="hide">FULLSCREEN TRIANGLE</h1>
            </div>
            <div className="lightCyan-slider" />
            <div className="persianGreen-slider" />
            <div className="white-slider" />
          </div>
          {/* Hero */}
          <section>
            <nav>
              <a className="logo" href="index.html">
                Excluded From Heaven
              </a>
              <svg
                className="logo"
                version="1.2"
                height="300"
                width="600"
                xmlns="http://www.w3.org/2000/svg"
                viewport="0 0 60 60"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  stroke="rgba(155,55,255,0.4)"
                  fill="none"
                  stroke-width="3"
                  stroke-linejoin="round"
                  d="M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110"
                />
                <path
                  id="longbeat"
                  style="stroke:#00AEAA; fill:none;stroke-width:1;stroke-linejoin:round"
                  d="M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110"
                />
                <rect
                  x="-3"
                  y="-4"
                  height="8"
                  width="6"
                  rx="20"
                  ry="20"
                  fill="red"
                >
                  <animateMotion dur="2s" repeatCount="indefinite">
                    <mpath xlink:href="#longbeat" />
                  </animateMotion>
                </rect>
              </svg>
            </nav>
            <div className="hero-content">
              <h2 className='hero-content'>Be the one we need</h2>
              <p>
                If one could travel back or forwards in time, one fact will 
                remain self-evident and true, that every being is not as 
                fast as Usain Bolt. If a place of eternal happiness and order 
                pertaining to humans exists, that is, a heaven, it is inadequet 
                to exclude him. Usain Bolt is not excluded from heaven
                
              </p>
              {showStartButton && (
                <button onClick={handleButtonClick}>Fullscreen</button>
              )}
            </div>
          </section>
        </>
      ) : (
        <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('root')} eventPrefix="client">
      {/* Lights */}
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={0.5} audioUrl={"/Gydra-ObserverEffect.mp3"} />
        </Instances>
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
        {/* Bunny and a light give it more realism */}
        <SunEarthMoon scale={0.4} position={[0, 0.3, 0.5]} rotation={[0, -Math.PI * 0.85, 0]} audioUrl={"/Gydra-ObserverEffect.mp3"}/>
        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
      </group>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={5} />
        <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
      </EffectComposer>
      {/* Camera movements */}
      <CameraRig />
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
      )}
    </div>
  )
}

function Bun(props) {
  const { nodes } = useGLTF(suspend(suzi).default)
  console.log(nodes)
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  )
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
}
