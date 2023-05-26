import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #fff;
    --white: #fff;
    --grey: #cccccc;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    color: #fff;
    background: #61ff87;
  }

  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: var(--white);
  }
  body {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
    &::-webkit-scrollbar {
      width: 1em;
    }
    
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      outline: none;
      border-radius: 10px;
    }
  }

  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
    text-decoration: none;
  }
  a {
    color: var(--highlight);
  }
  ul {
    list-style-type: none;
  }
`

export default GlobalStyles
