import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

export function SunEarthMoon({audioData, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sun_earth_moon.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
    // Start the animation
    if (actions.Animation_0) {
      actions.Animation_0.play();
    }

    // Apply wireframe material to all meshes
    group.current.traverse((child) => {
      if (child.isMesh) {
        child.material = wireframeMaterial;
      }
    });
  }, [actions]);

  useFrame(() => {
    if (audioData && actions.Animation_0) {
      // Calculate the average frequency
      const averageFrequency = audioData.reduce((sum, value) => sum + value, 0) / audioData.length;
      const normalizedFrequency = averageFrequency / 255;

      // Adjust animation speed based on audio data
      actions.Animation_0.timeScale = 0.5 + normalizedFrequency * 2; // Adjust these values as needed

      // Optionally, you can also change the color based on audio data
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="2d13584d3773402e832b3b3a4c84745ffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sonne" position={[0, 102.377, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Sonne_Material_#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sonne_Material_#2_0'].geometry}
                    material={materials.Material_2}
                  />
                </group>
                <group name="Erde" position={[174.689, 102.377, -46.68]} rotation={[-1.169, 0, 0]}>
                  <mesh
                    name="Erde_Material_#1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Erde_Material_#1_0'].geometry}
                    material={materials.Material_1}
                  />
                </group>
                <group
                  name="Mond"
                  position={[193.581, 102.377, -62.97]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Mond_Material_#3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Mond_Material_#3_0'].geometry}
                    material={materials.Material_3}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sun_earth_moon.glb')
