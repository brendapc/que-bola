import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentSection, ChampionshipTitle } from "./championships-styles";

const Championship = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://api.api-futebol.com.br/v1/campeonatos/10/fases/104",
        {
          headers: {
            Authorization: `Bearer live_e7a21e202a77cd69e356d3dd14a52a`,
          },
        }
      );
      console.log(response.data);
      console.log(response.data.campeonato.rodada_atual);
      setData(response.data.campeonato.rodada_atual.nome);
      setTitle(response.data.campeonato.nome);
    }
    getData();
  }, []);
  return (
    <div>
      <ContentSection>
        <ChampionshipTitle>{title}</ChampionshipTitle>
        <div>{data}</div>
      </ContentSection>
    </div>
  );
};

export default Championship;
