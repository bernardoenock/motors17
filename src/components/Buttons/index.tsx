import React from "react";

import {
  Alert,
  Default,
  Disable,
  Light,
  Link,
  Negative,
  Outline1,
  Outline2,
  OutlineLight,
  Primary,
  PrimaryDisable,
  PrimaryOpacity,
  PrimaryOutline,
  Success,
} from "./styles";

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

// #4529E6 hover: #5126EA
export const ButtonPrimary: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Primary>
      <button {...rest}>{children}</button>
    </Primary>
  );
};

export const ButtonDefault: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Default>
      <button {...rest}>{children}</button>
    </Default>
  );
};

export const ButtonAlert: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Alert>
      <button {...rest}>{children}</button>
    </Alert>
  );
};

export const ButtonDisable: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Disable>
      <button {...rest}>{children}</button>
    </Disable>
  );
};

export const ButtonLight: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Light>
      <button {...rest}>{children}</button>
    </Light>
  );
};

export const ButtonSuccess: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Success>
      <button {...rest}>{children}</button>
    </Success>
  );
};

export const ButtonLink: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Link>
      <button {...rest}>{children}</button>
    </Link>
  );
};

export const ButtonNegative: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Negative>
      <button {...rest}>{children}</button>
    </Negative>
  );
};

export const ButtonOutline1: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Outline1>
      <button {...rest}>{children}</button>
    </Outline1>
  );
};

export const ButtonOutline2: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <Outline2>
      <button {...rest}>{children}</button>
    </Outline2>
  );
};

export const ButtonOutlineLight: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <OutlineLight>
      <button {...rest}>{children}</button>
    </OutlineLight>
  );
};

export const ButtonPrimaryDisable: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <PrimaryDisable>
      <button {...rest}>{children}</button>
    </PrimaryDisable>
  );
};

export const ButtonPrimaryOpacity: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <PrimaryOpacity>
      <button {...rest}>{children}</button>
    </PrimaryOpacity>
  );
};

export const ButtonPrimaryOutline: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => {
  return (
    <PrimaryOutline>
      <button {...rest}>{children}</button>
    </PrimaryOutline>
  );
};
