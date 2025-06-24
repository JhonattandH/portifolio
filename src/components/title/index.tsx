import { Title as StyleTitle } from './styles'

export type props = {
  children: string
  fontsize?: number
}

const Title = (props: props) => (
  <StyleTitle fontsize={props.fontsize}>{props.children}</StyleTitle>
)
export default Title
