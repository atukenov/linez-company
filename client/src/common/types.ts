import React from "react";

export interface alertProps {
  alertType: "idle" | "error" | "warning" | "success" | "info";
  msg: string | null;
}

export interface userProps {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  createdAt: string;
  birthday: string;
  gender: string;
  mobile: string;
  roles: string[];
  token: string;
}

export interface AuthProps {
  token: string | null;
  isAuth: boolean | null;
  loading: boolean;
  user: userProps | null;
}

export interface UserProps {
  userData: userProps[] | null;
  loading: boolean;
  user: userProps | null;
}

export interface LogoProps {
  title: string | null;
  description: string | null;
  createdAt: Date | null;
  modifiedAt: Date | null;
  userId: string | null;
  comment: string | null;
}

export interface InteriorProps {
  title: string;
  description: string;
  createdAt: Date;
  modifiedAt: Date;
  userId: string;
  comment: string;
}

export interface ProjectProps {
  logoData: LogoProps[];
  interiorData: InteriorProps[];
  loading: boolean;
}

//------------------------------------------------

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
