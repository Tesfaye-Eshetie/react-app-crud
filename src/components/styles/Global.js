import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }

  body {
    background: #93d9d2;
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    height: 100vh;
    margin: 0;
  }
  input {
    opacity: 0.6;
    line-height: 1.5;
    border: none;
    border-radius: 5px;
    width: 500px;
  }

`

export default GlobalStyles