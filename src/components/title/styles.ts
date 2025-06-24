import styled from 'styled-components'

import { props } from '.'

export const Title = styled.h3<props>`
  color: #2882a35
  font-size: ${(props) => (props.fontsize ? props.fontsize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
