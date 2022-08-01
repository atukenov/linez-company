import React from "react";

export interface ContainerProps {
  border?: boolean;
  backgroundImage?: string;
  isHeight?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  fixedWidth?: boolean;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ShadowProps {
  children: React.ReactNode;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface TickerProps {
  children?: React.ReactNode;
  content: any;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: any;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}
