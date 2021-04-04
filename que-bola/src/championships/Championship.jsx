import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentSection, ChampionshipTitle } from "./championships-styles";

const Championship = ({ title }) => {
  return (
    <div>
      <ContentSection>
        <ChampionshipTitle>{title}</ChampionshipTitle>
      </ContentSection>
    </div>
  );
};

export default Championship;
