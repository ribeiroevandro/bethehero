# Be The Hero

<p align="center">
  <a href="#considerações-importantes">Considerações Importantes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#motivação">Motivação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#o-projeto">O Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#contato">Contato</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

Esse projeto foi desenvolvido durante a **Semana OmniStack 11** realizada pela [Rocketseat](https://rocketseat.com.br/) entre os dias 23 e 29 de Março de 2020.

# Considerações importantes

Apesar de ser um projeto baseado no que foi ensinado durante a semana **OmniStack**, muito das coisas que foram feitas nesse projeto, não seguem ou foram explicadas durante o curso, isso porque o projeto foi desenvolvido baseado na forma como eu trabalho hoje em dia, por isso tecnologias ou formas de se fazer determinada coisa, aqui pode e certamente estarão diferentes. **Se você está começando agora, recomendo cuidado e cautela ao olhar o que foi feito nesse projeto, algumas coisas podem gerar confusão e muita dúvida.**

Então se por acaso, você não tenha entendido nada ou mesmo tentou executar o projeto e teve algum erro, sinta-se livre e confortável para abrir uma **issue** com uma **dúvida**, **crítica** ou **sugestão** que terei o maior prazer em tentar responder o que for ou absorver de forma positiva, caso critique algo. Mas se estiver realmente muito no começo e lidar com o **git** ainda for um bicho de sete cabeças, nesse [link](https://www.youtube.com/watch?v=IBClN6VpJDw&list=PLlAbYrWSYTiPA2iEiQ2PF_A9j__C4hi0A) você poderá ver uma playlist bem belezinha feita pelo [Willian Justen](https://willianjusten.com.br/) um grande amigo, que fez um curso básico onde ensina usar **Git/Github**, pode me enviar um email que estará no final da página ou se buscar por **/ribeiroevandro** em boa parte das principais redes sociais, irá me encontrar, formas de responder sua dúvida, de certo que não irão faltar ;)

## Motivação

O **Be The Hero**, que sua tradução significa **Seja o Herói**, é uma aplicação para conectar pessoas que tem vontade ajudar e muitas vezes não tem tempo, mas que podem ajudar de forma monetária **ONGs**, que são organizações não governamentais ou sem fins lucrátivos que muitas vezes precisam de um valor para tratar algum caso específico, por exemplo uma **ONG** que cuida de animais abandonados ou que sofreram algum tipo de acidente e necessitam de atendimento de profissionais, situações que geram custos e o projeto tem a proposta de fazer essa conexão.

## O Projeto

Ele foi desenvolvido com a stack **JavaScript**, usando **NodeJS(API)**, **ReactJS(WebAPP)** e o **Expo(Mobile APP)**, mas detalhes sobre cada projeto, você poderá ver acessando cada um deles.

O projeto está baseado na arquitetura de **Monorepo**, [aqui você pode ler mais sobre](https://imasters.com.br/android/mais-rapidos-juntos-repositorio-monolitico-monorepo-da-engenharia-da-uber-para-ios), abaixo a estrutura que o projeto segue.

```bash
bethehero
├── packages/
│   ├── api/
│   ├── mobile/
│   ├── services/
│   └── web/
├── .editorconfig
├── .gitignore
├── README.md
├── commitlint.config.js
├── netlify.toml
├── package.json
└── yarn.lock
```

- [api](packages/api/) - Aplicação feita com [Express](https://expressjs.com/pt-br/);
- [mobile](packages/mobile/) - Aplicação feita com [Expo](https://expo.io/);
- [services](packages/services/) - Package que abstrai recursos usado e mais de uma aplicação;
- [web](packages/web/) - Aplicação feita com [ReactJS](https://reactjs.org/);

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

# Contato

Gostou do que viu e quer conversar comigo?

Evandro Ribeiro - [Github](https://github.com/ribeiroevandro) - **oi@ribeiroevandro.com.br**
