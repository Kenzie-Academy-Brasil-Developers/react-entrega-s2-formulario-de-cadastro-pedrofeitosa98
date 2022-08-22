import { createGlobalStyle } from 'styled-components';
import "./typography.css"
import "./components.css"

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --success: #3FE864;
    --negative: #E83F5B;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    background-color: var(--grey-4);
  }

  ol,
  ul {
    list-style: none;
  }

  body,
  html {
    width: 100%;
    height: 100vh;
  }

  body,
  input,
  button,
  textarea,
  select,
  ::placeholder {
    font-family: 'Inter', sans-serif;
  }

  body {
    font-weight: 400;
    font-size: 1;
    color: var(--grey-0);
  }

  input,
  textarea,
  select,
  ::placeholder {
    font-weight: 400;
    font-size: 1;
    color: var(--grey-0);
    transition: 0.3s;
  }

  input,
  textarea,
  select {
    background-color: var(--grey-2);
    border-radius: 4px;
    border: 1.5px solid var(--grey-2);
    padding: .625rem 1rem;
    min-height: 3rem;
    width: 100%;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border: 2px solid var(--grey-1);
  }

  ::placeholder {
    color: var(--grey-1);
    font-size: 1rem;
  }

  input:hover::placeholder,
  textarea:hover::placeholder {
    color: var(--grey-0);
    padding-left: 6px;
  }

  input:focus::placeholder,
  textarea:focus::placeholder {
    opacity: 0;
  }

  option {
    background-color: var(--grey-2);
    padding: 5px 9px;
    color: var(--grey-0);
    transition: 0.3s;
    font-size: 1rem;
  }

  option:hover {
    background-color: var(--grey-3);
  }
`
export default GlobalStyle