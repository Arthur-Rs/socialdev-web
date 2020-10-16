import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.text.light};
  }

  *:focus{
    outline: none;
  }

  body{
    background-color: ${({theme}) => theme.colors.background.dark};
  }

  h1{
    font-family: 'Prompt', sans-serif;
  }

  @media (max-width: 968px){
    *{
      font-size: 50%;
    } 
  }
`