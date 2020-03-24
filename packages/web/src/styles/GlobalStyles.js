import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  :root {
    --link-color: blue;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
  }
`;

export default GlobalStyle;
