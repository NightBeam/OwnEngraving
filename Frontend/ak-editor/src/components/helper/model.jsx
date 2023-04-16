import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

import model from "../../models/mr.gltf";
import { Vector3 } from "three";

const Model = forwardRef((props, ref) => {

    const gltf = useGLTF(model)

    return <primitive ref={ref} object={gltf.scene} scale={0.05} position={new Vector3(0, 0, 0)} />
})

export default Model;