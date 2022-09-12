import styled, { createGlobalStyle } from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: auto;
  background-color: ${({ theme }) => theme.backgroundColors.generalBackground};
`;

export const GlobalStyle = createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 500;
        /* transition: all 0.5s ease; */

  &::-webkit-scrollbar {
    display: none;
  }

    }
    h1, h2, h3, h4, h5, h6 {
        font-family: "Lexend", sans-serif;
    }


    #root{
        width: 100vw;
        height: auto;
        
    }
    body {
        width: 100vw;
        height: auto;
        overflow-x: hidden;    
    }
    button{
        cursor: pointer;
        border: none;
        border-radius: 4px;
    }
    a{
        text-decoration: none;
    }
    ul,li {
        list-style: none;
    }
    
`;
