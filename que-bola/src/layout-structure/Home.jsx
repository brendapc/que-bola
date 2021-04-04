import React from "react";
import Championship from "../championships/Championship";
import { Header, HeaderTitle } from "./styled-components/Header";
import { PageBody } from "./styled-components/PageBody";

export const Home = () => {
  return (
    <div>
      <Header>
        <HeaderTitle>Que Bola!</HeaderTitle>
      </Header>
      <PageBody>
        <Championship />
      </PageBody>
    </div>
  );
};
