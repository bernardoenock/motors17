import styled from "styled-components";

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.div`
  width: 520px;
  height: 354px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
  border-radius: 0.5rem;
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 466px;
  height: 239px;

  background: #e9ecef;
  border-radius: 4px;
  > img {
    width: 350px;
    height: 200px;
  }
`;
