import {
  ContentSection,
  ChampionshipTitle,
  Content,
  ContentCard,
  CardsWraper,
} from "./championships-styles";
import { Card } from "../layout-structure/styled-components/Card";
const Championship = ({ title }) => {
  return (
    <div>
      <ContentSection>
        <ChampionshipTitle>{title}</ChampionshipTitle>
        <Content>
          <CardsWraper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </CardsWraper>
        </Content>
      </ContentSection>
    </div>
  );
};

export default Championship;
