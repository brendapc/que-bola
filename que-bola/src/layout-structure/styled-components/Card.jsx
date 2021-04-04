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
const Goals = styled.h3`
  font-size: 2rem;
  margin: 0;
`;
const Team = styled.h2`
  font-size: 1rem;
`;
const MatchScore = styled.div`
  display: grid;
  grid-template-rows: 1fr 4rem;
`;
export const Card = ({ matchInfo }) => {
  if (matchInfo)
    return (
      <ContentCard>
        <Standing>
          <MatchScore>
            <Team>{matchInfo.homeTeam.name}</Team>
            <Goals>{matchInfo.score.fullTime.homeTeam}</Goals>
          </MatchScore>
          <Versus> X </Versus>
          <MatchScore>
            <Team>{matchInfo.awayTeam.name}</Team>
            <Goals>{matchInfo.score.fullTime.awayTeam}</Goals>
          </MatchScore>
        </Standing>
        <p>Horário</p>
      </ContentCard>
    );
  else {
    return;
  }
};
