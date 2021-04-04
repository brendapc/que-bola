import React from "react";
import Championship from "../championships/Championship";
import { Header, HeaderTitle } from "./styled-components/Header";

export const Home = () => {
  return (
    <div>
      <Header>
        <HeaderTitle>Que Bola!</HeaderTitle>
      </Header>
      <Championship />
    </div>
  );
};
