/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 E:\upword004\my-threejs-app\public\stylized_pine_tree_tree\scene.gltf 
Author: Batuhan13 (https://sketchfab.com/Batuhan13)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-pine-tree-tree-deadcadc915545a7b4701dbe6eb419e8
Title: Stylized Pine Tree Tree
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function RedThree(props) {
  const { nodes, materials } = useGLTF('/stylized_pine_tree_tree/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tree_low001_StylizedTree_0.geometry} material={materials.StylizedTree} />
    </group>
  )
}

useGLTF.preload('/stylized_pine_tree_tree/scene.gltf')
export default RedThree
