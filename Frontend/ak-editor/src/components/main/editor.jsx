import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber"

import Attributes from "../helper/attributes";
import Cost from "../helper/cost";

import Model from "../helper/model";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Vector3, AxesHelper } from "three";

const Editor = () => {
    var [attributes, setAttributes] = useState(() => [{
        'name': 'Гравировка',
        z: 0.05,
        properties: [{
            'name':'Надпись',
            'cost':10000,
            'isActive': false
        },{
            'name':'Инициалы',
            'cost': 11000,
            'isActive': false
        },{
            'name':'Логотип',
            'cost': 10400,
            'isActive': false
        }]
    }, {
        'name': 'Резьба по дереву',
        z: 0.12,
        properties: [{
            'name': 'Сквозная',
            'cost': 1300,
            'isActive': false
        },{
            'name': 'Глухая',
            'cost': 1500,
            'isActive': false
        },{
            'name': 'Скульптурная',
            'cost': 1200,
            'isActive': false
        }]
    }, {
        'name': 'Обвесы',
        z: -0.08,
        properties: [{
            'name': 'Прицел',
            'cost': 1200,
            'isActive': false
        },{
            'name': 'text',
            'cost': 1300,
            'isActive': false
        },{
            'name': 'text1',
            'cost': 1400,
            'isActive': false
        }]
    }])

    var modelRef = useRef();
    var controllerRef = useRef();
    const [isActive, setIsActive] = useState(false);
    let [attributesTitle, setAttributesTitle] = useState('')
    const [cost, setCost] = useState([
        {
            'name': 'Гравировка',
            'cost': 0,
        },
        {
            'name': 'Резьба по дереву',
            'cost': 0,
        },
        {
            'name': 'Обвесы',
            'cost': 0,
        }
    ])

    const ToPoint = (z, getTitle) => {
        /*controllerRef.current.target = new Vector3(0, 0, z);
        controllerRef.current.maxDistance = 0.05;
        controllerRef.current.zoomSpeed = 1;
        console.log(controllerRef.current);
        console.log(modelRef.current);
        for (let i of modelRef.current.children) {
            if (i.isMesh === undefined) {
                console.log(i.position);
                console.log(i.name);
            }
        }*/
        setIsActive(true);
        setAttributesTitle(getTitle)
    }

    const closeOptions = () => {
        setIsActive(false);
    }

    const getCost = (e, cost1, attributestitle, title) =>{
        setAttributes(attributes.map(i=>{
            i.properties = i.properties.map(item=>{
                if (item.name === title){
                    return {...item, isActive: true}
                }
                else{
                    return {...item, isActive: false}
                }
            })
            return i
        }))

        if (e.currentTarget.classList.contains('active')){
            setCost(cost.map(e => e.name === attributestitle  ? {...e , cost: cost1}: e))
        }
        else{
            setCost(cost.map(e => e.name === attributestitle  ? {...e , cost: 0}: e))
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
                {/*<Suspense fallback={<Loader />}>
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
            </Suspense>*/}
            </Canvas>
            <Cost cost={cost}/>
            <Attributes 
                titles={attributes} 
                method={ToPoint} 
                active={isActive} 
                options={attributes.filter(i=>{
                    if(i.name === attributesTitle){
                        return i.properties
                    }
                })}
                closeOptions={closeOptions}
                getCost={getCost}
                cost={cost}
            />
        </>
    )
}

/*const Loader = () => {
    const { progress } = useProgress()
    return (
        <Html center className="main__loaded-model-stat">
            {progress}% Загружено
        </Html>
    )
}*/

export default Editor;