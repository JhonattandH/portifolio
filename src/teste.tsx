import styled from 'styled-components' // Importa o modulo styled-components para uso

type ButtonProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<ButtonProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Cancelar</Botao>
      <Botao principal={false} fontSize="18px">
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal={false}>
        <span>Não Clique</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
