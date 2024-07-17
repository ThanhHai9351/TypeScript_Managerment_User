import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

export const DefaultComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export const DefaultComponentNotFound: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};