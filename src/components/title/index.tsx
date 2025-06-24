import { Title as StyleTitle } from './styles'

export type props = {
  children: string
  fontsize?: number
}

const Title = ({ children, fontsize }: props) => (
  <StyleTitle fontsize={fontsize}>{children}</StyleTitle>
)

export default Title
