import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber"

import Attributes from "../helper/attributes";
import Cost from "../helper/cost";

import Model from "../helper/model";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Vector3, AxesHelper } from "three";

const Editor = () => {
    var [attributes] = useState(() => [{
        'name': 'Гравировка',
        z: 0.05,
        properties: []
    }, {
        'name': 'Резьба по дереву',
        z: 0.12,
        properties: []
    }, {
        'name': 'Обвесы',
        z: -0.08,
        properties: []
    }])

    var modelRef = useRef();
    var controllerRef = useRef();

    const ToPoint = (z) => {
        controllerRef.current.target = new Vector3(0, 0, z);
        controllerRef.current.maxDistance = 0.05;
        controllerRef.current.zoomSpeed = 1;
        console.log(controllerRef.current);
        console.log(modelRef.current);
        for (let i of modelRef.current.children) {
            if (i.isMesh === undefined) {
                console.log(i.position);
                console.log(i.name);
            }
        }
    }

    return (
        <>
            <Canvas className="main__canvas"
                camera={{
                    fov: 90,
                    near: 0.001,
                    position: [0.2, 0, 0],
                }}>
                <Suspense fallback={<Loader />}>
                    <primitive object={new AxesHelper(0.5)} />
                    <Model ref={modelRef} />
                    <ambientLight intensity={1} />
                    <directionalLight intensity={1} />
                    <hemisphereLight intensity={0.1} />
                    <OrbitControls
                        minDistance={0.02}
                        maxDistance={0.2}
                        zoomSpeed={4}
                        ref={controllerRef}
                        target={new Vector3(0, 0, 0)} />
                </Suspense>
            </Canvas>
            <Cost />
            <Attributes titles={attributes} method={ToPoint} />
        </>
    )
}

const Loader = () => {
    const { progress } = useProgress()
    return (
        <Html center className="main__loaded-model-stat">
            {progress}% Загружено
        </Html>
    )
}

export default Editor;