import { P } from './styles'

export type props = {
  children: string
  tipo?: 'principal' | 'secundario'
  local?: 'avatar' | 'default'
  fontSize?: number
}

const Paragrafo = ({
  children,
  tipo = 'principal',
  local = 'default',
  fontSize
}: props) => (
  <P fontSize={fontSize} tipo={tipo} local={local}>
    {children}
  </P>
)

export default Paragrafo
