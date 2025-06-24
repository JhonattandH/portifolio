import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      height: 157px;
      width: 100%;
      heigght: auto;
    }
  }

  img {
    height: 157px;
  }
`
