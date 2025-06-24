import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/projetos'
import EstiloGlobal from './styles'
import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(true)

  function alternarTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar alternarTema={alternarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
