import React from 'react'
import styled from 'styled-components'

const Section = styled.div` 
display: flex;
justify-content: center;
`
const Container = styled.div` 
/* Medida de prueba para netbook en deploy cambiar a 1400px */
width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
`
const Links = styled.div` 
display: flex;
align-items: center;
gap: 50px;
`
const Logo = styled.img`
height: 50px;
width: 70px; 
`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`
const ListItem = styled.li`
`
const Iconos = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Icon = styled.img`
width: 20px;
cursor: pointer;
`
const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 10px;
cursor: pointer;
`    
    


const NavBar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src="./img/logo1.png" width={300} height={200}  alt="logo WilDev" />
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Conocenos</ListItem>
                    <ListItem>Trabajos</ListItem>
                    <ListItem>Contacto</ListItem>                    
                </List>
                </Links>
                <Iconos>
                    <Icon src="./img/search.png" />
                    <Button>Llamar Ya!</Button>
                </Iconos>
            </Container>
        </Section>
    )
    }

export default NavBar