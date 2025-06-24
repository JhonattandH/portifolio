import Paragrafo from '../paragrafo'
import Title from '../title'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto Aniversário Macabro</Title>
    <Paragrafo tipo="secundario">
      Site de convite para uma festa de aniversário com tema de terror.
    </Paragrafo>
    <LinkBotao href="https://github.com/">Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
