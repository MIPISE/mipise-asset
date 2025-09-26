import { PropsWithChildren, ReactNode } from "react";

export enum Color {
  WHITE = "white",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
  INFO = "info",
  LIGHT = "light",
  PRIMARY_SUBTLE = "primary-subtle",
  PRIMARY_LINK = "primary-link",
  DARK_SUBTLE = "dark-subtle",
}

export enum Size {
  EXTRASMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export enum Direction {
  START = "start",
  END = "end",
  DOWN = "down",
  UP = "up",
}

export type GlobalProps = PropsWithChildren<{
  classes?: string
}>
