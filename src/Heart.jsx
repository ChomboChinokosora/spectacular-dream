import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export function Heart({audioData, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/beating_heart.glb')
  const { actions } = useAnimations(animations, group)


  // Create a wireframe material
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: new THREE.Color(1, 0, 0), // Red color, you can change this
  });

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
      wireframeMaterial.color.setRGB(normalizedFrequency, 0, 1 - normalizedFrequency);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={3.568}>
        <group name="root">
          <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode0_0" scale={0.01}>
              <group name="skeletal3_3">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_30"
                    geometry={nodes.Object_30.geometry}
                    material={wireframeMaterial}
                    skeleton={nodes.Object_30.skeleton}
                  />
                  <group name="heart2_2_correction">
                    <group name="heart2_2" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
  )
}

useGLTF.preload('/beating_heart.glb')