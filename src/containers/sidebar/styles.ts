import styled from 'styled-components'
import { P } from '../../components/paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTema = styled.button`
  background: #282a35;
  font-size: 10px;
  color: #eee;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #2882a3;
    color: #fff;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 40px;
  left: 0;
`
