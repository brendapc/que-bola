import React, { useState, useEffect } from "react";
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
  align-self: center;
`;
const Goals = styled.h3`
  font-size: 2rem;
  margin: 0;
`;
const Team = styled.h2`
  font-size: 1rem;
  align-self: center;
`;
const MatchScore = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 4rem;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  justify-self: center;
`;

const Hour = styled.p`
  margin: 0;
`;

export const Card = ({ matchInfo }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const dateUTC = new Date(matchInfo.utcDate);
    const dateLocaled = new Date(dateUTC.toString());
    setTime(
      `${dateLocaled.getHours()}:${
        dateLocaled.getMinutes().length > 1 ? dateLocaled.getMinutes() : "00"
      }`
    );
  }, []);
  const awayLogo = `https://crests.football-data.org/${matchInfo.awayTeam.id}.svg`;
  const homeLogo = `https://crests.football-data.org/${matchInfo.homeTeam.id}.svg`;
  if (matchInfo)
    return (
      <ContentCard>
        <Standing>
          <MatchScore>
            <Team>{matchInfo.homeTeam.name}</Team>
            <Img src={awayLogo} alt="" />
            <Goals>{matchInfo.score.fullTime.homeTeam}</Goals>
          </MatchScore>
          <Versus> X </Versus>
          <MatchScore>
            <Team>{matchInfo.awayTeam.name}</Team>
            <Img src={homeLogo} alt="" />
            <Goals>{matchInfo.score.fullTime.awayTeam}</Goals>
          </MatchScore>
        </Standing>
        <Hour>{time}</Hour>
      </ContentCard>
    );
  else {
    return;
  }
};
