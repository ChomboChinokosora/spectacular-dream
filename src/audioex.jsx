import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';

export const AudioExplodingModel = ({ modelPath, audioUrl }) => {
  const { scene } = useGLTF(modelPath);
  const audioRef = useRef();
  const analyserRef = useRef();
  const [audioData, setAudioData] = useState(null);
  const [explosionFactor, setExplosionFactor] = useState(0);
  const targetMap = useRef(new Map());
  const explosionCenter = new THREE.Vector3(0, 0.15, 0);

  useEffect(() => {
    const audio = audioRef.current;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyserRef.current = analyser;

    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const updateAudioData = () => {
      analyser.getByteFrequencyData(dataArray);
      setAudioData(dataArray);
      requestAnimationFrame(updateAudioData);
    };

    updateAudioData();

    audio.play();

    return () => {
      audio.pause();
      audioContext.close();
    };
  }, []);

  useEffect(() => {
    if (!audioData) return;

    // Calculate explosion factor based on audio data
    const average = audioData.reduce((sum, value) => sum + value, 0) / audioData.length;
    const normalizedAverage = average / 255; // Normalize to 0-1 range
    setExplosionFactor(normalizedAverage * 2); // Adjust multiplier as needed

    scene.traverse((object) => {
      if (object.isMesh) {
        const vector = object.position.clone().sub(explosionCenter).normalize();
        const displacement = object.position.clone().add(
          vector.multiplyScalar(
            object.position.distanceTo(explosionCenter) * explosionFactor
          )
        );
        targetMap.current.set(object.name, displacement);

        gsap.to(object.position, {
          x: displacement.x,
          y: displacement.y,
          z: displacement.z,
          duration: 0.1, // Quick transition for responsiveness
          ease: 'power2.out',
        });
      }
    });
  }, [audioData, explosionFactor]);

  useEffect(() => {
    return () => {
      targetMap.current.clear();
    };
  }, []);

  return (
    <>
      <primitive object={scene} />
      <audio ref={audioRef} src={audioUrl} />
    </>
  );
};