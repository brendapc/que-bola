import styled from "styled-components";

export const ChampionshipTitle = styled.h1`
  display: inline-block;
  border-bottom: 5px solid #9ede73;
`;

export const ContentSection = styled.section`
  background: #e6e4e4;
  box-shadow: 0px 0px 24px 5px rgb(30 30 30 / 51%);
  border-radius: 10px;
  height: 25rem;
  margin: 2rem;
  padding: 0 1rem;
`;

export const Content = styled.div`
  height: 20rem;
  overflow-y: auto;
  display: flex;
`;

export const ContentCard = styled.div`
  height: 16rem;
  width: 20rem;
  margin: 0.5rem;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;

export const CardsWraper = styled.div`
  display: flex;
`;
