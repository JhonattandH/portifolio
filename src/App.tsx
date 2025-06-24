import Projetos from './containers/projetos'
import EstiloGlobal from './styles'
import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
