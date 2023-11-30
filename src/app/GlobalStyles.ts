'use client'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 10px;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: #343a40;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #111418;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #343a40;
    border-radius: 8px;
    border: 3px solid #111418;
  }
`;

export default GlobalStyles;