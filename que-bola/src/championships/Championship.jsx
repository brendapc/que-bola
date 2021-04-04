import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentSection, ChampionshipTitle } from "./championships-styles";

const Championship = () => {
  const [title, setTitle] = useState("");
  async function getData() {
    const response = await axios.get(
      "https://api.football-data.org/v2/competitions/PL/",
      {
        headers: {
          "X-Auth-Token": `a3929fb8a1504c7cae89035aa6535b62`,
        },
      }
    );
    setTitle(response.data.name);
    const currentMatchday = response.data.currentSeason.currentMatchday;

    const matchdayData = await axios.get(
      `http://api.football-data.org/v2/competitions/PL/matches/?matchday=${currentMatchday}`,
      {
        headers: {
          "X-Auth-Token": `a3929fb8a1504c7cae89035aa6535b62`,
        },
      }
    );
    const matches = matchdayData.data.matches;
    console.log(matchdayData.data.matches);
    return matches;
  }
  const matchesArray = getData();

  return (
    <div>
      <ContentSection>
        <ChampionshipTitle>{title}</ChampionshipTitle>
        <div></div>
      </ContentSection>
    </div>
  );
};

export default Championship;
