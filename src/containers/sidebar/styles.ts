import styled from 'styled-components'
import { P } from '../../components/paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTema = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  font-size: 10px;
  color: ${(props) => props.theme.corSecundaria};
  padding: 8px;
  border-radius: 12px;
  border: none;
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

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
