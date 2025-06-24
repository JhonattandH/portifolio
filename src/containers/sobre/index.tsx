import React from 'react'
import Title from '../../components/title'
import Paragrafo from '../../components/paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontsize={16}>Sobre Mim</Title>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
      saepe atque et animi, aspernatur repellat numquam excepturi sit a
      doloremque nesciunt incidunt dolorum magnam distinctio asperiores, cum rem
      reiciendis consequuntur.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=JhonattanH&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JhonattanH&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
