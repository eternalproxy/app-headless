import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    name: string;
    containerWidth: string;
    font: {
      family: string;
      size: string;
    };
    colors: {
      primary: { [key: string]: string };
      danger: { [key: string]: string };
      white: { [key: string]: string };
      black: { [key: string]: string };
    };
    spacing: { [key: number]: string };
    background: string;
    foreground: {
      title: string;
      body: string;
    };
    card: {
      title: string;
      background: string;
      shadow: string;
      border: string;
    };
    link: {
      default: string;
      active: string;
      header: string;
    };
    input: {
      color: string;
    };
    address: {
      color: string;
    }
  }
}
