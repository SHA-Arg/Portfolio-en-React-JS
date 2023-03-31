
import styled from 'styled-components'
import Contacto from './components/Contacto'
import Quien from './components/Quien'
import Trabajos from './components/Trabajos'
import Inicio from './components/Inicio'

const Container = styled.div`
  height: 100vh; 
  scroll-snap-type: y mandatory; 
  scroll-behavior : smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`
function App()  {
  return (
    <Container>
      <Inicio/>
      <Quien/>
      <Trabajos/>
      <Contacto/>
    </Container>
  )
}

export default App
