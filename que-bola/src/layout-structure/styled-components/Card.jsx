import React from "react";
import styled from "styled-components";
import { ContentCard } from "../../championships/championships-styles";

const Standing = styled.div`
  padding: 0 1rem;
  display: inline-grid;
  grid-template-columns: 2fr 1fr 2fr;
`;

const Versus = styled.div`
  font-size: 3rem;
  color: #5ac8e9;
`;
const Placar = styled.h3`
  font-size: 2rem;
`;
const Teams = styled.h2`
  font-size: 1rem;
`;
export const Card = ({ matchInfo }) => {
  if (matchInfo)
    return (
      <ContentCard>
        <Standing>
          <div>
            <Teams>{matchInfo.homeTeam.name}</Teams>
            <Placar>{matchInfo.score.fullTime.homeTeam}</Placar>
          </div>
          <Versus> X </Versus>
          <div>
            <Teams>{matchInfo.awayTeam.name}</Teams>
            <Placar>{matchInfo.score.fullTime.awayTeam}</Placar>
          </div>
        </Standing>
        <p>Horário</p>
      </ContentCard>
    );
  else {
    return;
  }
};
