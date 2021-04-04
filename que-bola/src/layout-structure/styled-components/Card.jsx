import React from "react";
import styled from "styled-components";
import { ContentCard } from "../../championships/championships-styles";

const Standing = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Versus = styled.div`
  font-size: 3rem;
  color: #5ac8e9;
`;

export const Card = () => {
  return (
    <ContentCard>
      <p>DIA_DA_SEMANA</p>
      <Standing>
        <div>Time 1</div>
        <Versus> X </Versus>
        <div>Time 2</div>
      </Standing>
      <p>Horário</p>
    </ContentCard>
  );
};
