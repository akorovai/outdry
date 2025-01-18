import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
  }
  
  h1, h2, h3, h4, h5, h6, p, span, blockquote, pre, a, abbr, code, em, strong, sub, sup, small, strike, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }


  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    opacity: 0.9;
  }
  
  input, textarea {
    font: inherit;
    color: inherit;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5em;
    width: 100%;
    box-sizing: border-box;
  }

  input:focus, textarea:focus {
    border-color: #007BFF;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`

export default GlobalStyles
