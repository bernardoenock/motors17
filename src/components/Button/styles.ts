import styled from "styled-components";

export const Primary = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;

    background-color: ${({ theme }) => theme.buttons.primary.background};
    color: ${({ theme }) => theme.buttons.primary.color};
    border: 1.5px solid ${({ theme }) => theme.buttons.primary.border};
    border-radius: 6px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.primary.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primary.hover};
    }
  }
`;

export const Default = styled.div`
  button {
    background-color: ${({ theme }) => theme.buttons.default.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.default.border};
    color: ${({ theme }) => theme.buttons.default.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.default.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.default.hover};
    }
  }
`;

export const Negative = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;

    background-color: ${({ theme }) => theme.buttons.negative.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.negative.border};
    color: ${({ theme }) => theme.buttons.negative.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.negative.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.negative.hover};
    }
  }
`;

export const Disable = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.disable.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.disable.border};
    color: ${({ theme }) => theme.buttons.disable.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.disable.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.disable.hover};
    }
  }
`;

export const PrimaryOpacity = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.primaryOpacity.border};
    color: ${({ theme }) => theme.buttons.primaryOpacity.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.primaryOpacity.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primaryOpacity.hover};
    }
  }
`;

export const Light = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.light.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.light.border};
    color: ${({ theme }) => theme.buttons.light.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.light.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.light.hover};
    }
  }
`;

export const OutlineLight = styled.div`
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.outlineLight.hover};
    border: 1.5px solid ${({ theme }) => theme.buttons.outlineLight.border};
    color: ${({ theme }) => theme.buttons.outlineLight.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.outlineLight.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.outlineLight.hover};
    }
  }
`;

export const Outline1 = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.outline1.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.outline1.border};
    color: ${({ theme }) => theme.buttons.outline1.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.outline1.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.outline1.hover};
    }
  }
`;
export const Outline2 = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.outline2.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.outline2.border};
    color: ${({ theme }) => theme.buttons.outline2.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.outline2.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.outline2.hover};
    }
  }
`;
export const Link = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;

    background-color: ${({ theme }) => theme.buttons.link.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.link.border};
    color: ${({ theme }) => theme.buttons.link.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.link.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.link.hover};
    }
  }
`;
export const Alert = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.alert.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.alert.border};
    color: ${({ theme }) => theme.buttons.alert.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.alert.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.alert.hover};
    }
  }
`;
export const Success = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.success.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.success.border};
    color: ${({ theme }) => theme.buttons.success.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.success.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.success.hover};
    }
  }
`;
export const PrimaryDisable = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.primaryDisable.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.primaryDisable.border};
    color: ${({ theme }) => theme.buttons.primaryDisable.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.primaryDisable.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primaryDisable.hover};
    }
  }
`;

export const PrimaryOutline = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.buttons.primaryOutline.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.primaryOutline.border};
    color: ${({ theme }) => theme.buttons.primaryOutline.color};

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.primaryOutline.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primaryOutline.hover};
    }
  }
`;
