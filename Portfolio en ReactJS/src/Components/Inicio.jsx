import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

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
`
const Titulo = styled.h1`
`

const QueHacemos = styled.div`
`

const Line = styled.img`
`

const Subtitulo = styled.h2`
`

const Descripcion = styled.p`
`

const Button = styled.button`
`


// ESTILOS DE LOS DIVS DERECHOS
const Right = styled.div`
flex:3;
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
                    <Descripcion>disfrutamos creando experiencias digitales encantadoras y centradas en el ser humano.</Descripcion>
                <Button>Conocenos</Button>
                </Left>
                <Right>
                    {/* Modelo 3D */}
                    <Img src="./moon.png"/>
                </Right>
            </Container>
        </Section>
    )
    }

export default Inicio