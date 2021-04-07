import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  ContentSection,
  ChampionshipTitle,
  Content,
  CardsWraper,
} from "./championships-styles";
import { Card } from "../layout-structure/styled-components/Card";

const Championship = ({ championship }) => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `https://api.football-data.org/v2/competitions/${championship}/`,
      {
        headers: {
          "X-Auth-Token": `a3929fb8a1504c7cae89035aa6535b62`,
        },
      }
    );
    setTitle(response.data.name);
    const currentMatchday = response.data.currentSeason.currentMatchday;
    const matchdayData = await axios.get(
      `http://api.football-data.org/v2/competitions/${championship}/matches/?matchday=${currentMatchday}`,
      {
        headers: {
          "X-Auth-Token": `a3929fb8a1504c7cae89035aa6535b62`,
        },
      }
    );

    const matches = matchdayData.data.matches;
    setData(matches);
    return matches;
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <ContentSection>
        <ChampionshipTitle>{title}</ChampionshipTitle>
        <Content>
          <CardsWraper>
            {data.length > 1 && data.map((match) => <Card matchInfo={match} />)}
          </CardsWraper>
        </Content>
      </ContentSection>
    </div>
  );
};

export default Championship;
