import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
// Modelos 3D
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

// ESTILOS DE LAS SECCIONES
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
// ESTILOS DE LOS CONTAINERS
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1000px;
display: flex;
justify-content: space-between;

`
// ESTILOS DE LOS DIVS IZQUIERDOS 
const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`
const Titulo = styled.h1`
font-size: 74px;
        /* Responsive */
@media only screen and (max-width: 768px) {
    text-align: center;
    }
`
const QueHacemos = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Line = styled.img`
height: 5px;
`
const Subtitulo = styled.h2`
color: #da4ea2;
`
const Desc = styled.p`
font-size: 24px;
color: lightgray;
  /* Responsive */
@media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    }
`
const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`
// ESTILOS DE LOS DIVS DERECHOS
const Right = styled.div`
flex: 3;
position: relative;
    /* Responsive */
@media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    }
`
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    }
@keyframes animate {
    to {
    transform: translateY(20px);
    }
    }
`

const Inicio = () => {
    return (
        <Section>
            <NavBar />
            <Container>
                <Left>
                    <Titulo>Pensamos. Hacemos. Resolvemos.</Titulo>
                    <QueHacemos>
                        <Line src="./img/line.png"/>
                        <Subtitulo>Que Hacemos</Subtitulo>
                    </QueHacemos>
                    <Desc>
                        Disfrutamos creando experiencias digitales encantadoras y centradas en el ser humano.
                    </Desc>
                <Button>Conocenos</Button>
                </Left>
                <Right> 
                    {/* Modelo 3D */}
            {/* <Canvas>
            <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
                />
            </Sphere>
            </Suspense>
            </Canvas> */}
                    <Img src="./img/moon.png"/>
                </Right>
            </Container>
        </Section>
    )
    }

export default Inicio