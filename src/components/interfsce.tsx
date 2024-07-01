import { ReactNode } from "react";

export interface ICard {
    title: string,
    text: string
  };

export interface IModalCard {
    card: ICard,
    children?: ReactNode,
  };