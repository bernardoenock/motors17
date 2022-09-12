import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  max-width: 750px;
`;

export const Image = styled.div`
  width: 30%;

  svg {
    color: ${({ theme }) => theme.textColors.primaryText};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: ${({ theme }) => theme.textColors.primaryText};

  h1 {
    font-size: 5rem;
    font-weight: 900;
  }
  h2 {
    font-size: 5rem;
    font-weight: 900;
    border-bottom: solid ${({ theme }) => theme.textColors.primaryText} 0.2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  @media screen and (max-width: 425px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;
