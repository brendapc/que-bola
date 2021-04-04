import React from "react";
import Championship from "../championships/Championship";
import { Header, HeaderTitle } from "./styled-components/Header";
import { GlobalStyle } from "./GlobalStyle";

export const Home = () => {
  return (
    <div>
      <Header>
        <HeaderTitle>Que Bola!</HeaderTitle>
      </Header>
      <Championship title="Brasileirão" />
      <Championship title="La Liga" />
      <GlobalStyle />
    </div>
  );
};
