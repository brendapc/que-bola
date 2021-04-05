import React from "react";
import Championship from "../championships/Championship";
import { Header, HeaderTitle } from "./styled-components/Header";
import { GlobalStyle } from "./GlobalStyle";

const ChampionshipsList = {
  Brasilerão: "BSA",
  PremiereLeague: "PL",
  LaLiga: "PD",
  Bundesliga: "BL1",
};

export const Home = () => {
  return (
    <div>
      <Header>
        <HeaderTitle>Que Bola!</HeaderTitle>
      </Header>
      <Championship championship={ChampionshipsList.Brasilerão} />
      <Championship championship={ChampionshipsList.Bundesliga} />
      <Championship championship={ChampionshipsList.PremiereLeague} />
      <GlobalStyle />
    </div>
  );
};
