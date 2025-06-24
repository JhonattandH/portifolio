import Avatar from '../../components/avatar'
import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'

import { ButtonTema, Descricao, SidebarContainer } from './styles'

type Props = {
  alternarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontsize={20}>Jhonattan Hollmann</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        Desenvolvedor Front-end
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Analista de Software
      </Descricao>
      <ButtonTema onClick={props.alternarTema}>Alterar Tema</ButtonTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
