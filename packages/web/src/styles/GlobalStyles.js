import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {

    --background: #F0F0F5;
    --actions: #E02041;
    --actions-text: #fff;
    --text-darker: #13131A;
    --text-dark: #41414D;
    --text: #737380;
    --border-color: #DCDCE6;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px 'Roboto', sans-serif;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
