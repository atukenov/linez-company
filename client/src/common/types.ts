import React from "react";

export interface alertProps {
  alertType: "idle" | "error" | "warning" | "success" | "info";
  msg: string | null;
}

export interface userProps {
  _id: string;
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
  isAdmin: boolean | null;
  loading: boolean;
  user: userProps | null;
}

export interface UserProps {
  userData: userProps[] | null;
  loading: boolean;
  user: userProps | null;
}

export interface LogoProps {
  _id: string;
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

export interface DetailsProps {
  _id: string;
  timeline: {
    label: string;
    started: Date;
    finished: Date;
    title: string;
    description: string;
    photos: PhotoProps[];
  };
  projectId: String;
}

export interface PhotoProps {
  title: string;
  description: string;
  url: string;
}

export interface ProjectProps {
  logoData: LogoProps[];
  interiorData: InteriorProps[];
  projectDetails: DetailsProps[];
  loading: boolean;
}

//------------------------------------------------

export interface SiteThemeProps {
  sider?: string;
  header?: string;
  content?: string;
  footer?: string;
  logo?: string;
  children: React.ReactNode;
}

export interface StyleProps {
  border?: boolean;
  backgroundImage?: string;
  height?: number;
  scale?: number;
  children: React.ReactNode;
}

export interface ContainerProps {
  border?: boolean;
  backgroundImage?: string;
  isHeight?: boolean;
  children: React.ReactNode;
  scale?: number;
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
