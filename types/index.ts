import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containetStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}