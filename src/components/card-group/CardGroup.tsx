import * as React from "react";
import { useMemo } from "react";
import {
  CardPropsMap,
  ComponentMap,
  CardGroupPropsMap,
} from "../../types/props";
import { CardCommon } from "../card-common/CardCommon";
import { CardProject } from "../card-project/CardProject";

const componentMap: ComponentMap = {
  commons: CardCommon,
  projects: CardProject,
};

export const CardGroup = <K extends keyof CardPropsMap>({
  cards,
  type,
}: CardGroupPropsMap[K]) => {

  const Component = useMemo(() => {
    return componentMap[type];
  }, [type]);

  // Component(cards[0])

  return (
    <section className="CardGroup">
      {cards.map((card, i) => {
        return React.createElement(Component, { ...card, key: i })
        // return <React.Fragment key={i}>{ Component(card) }</React.Fragment>
        // return <Component {...card} key={i}></Component>; // Nope :(
      })}
    </section>
  );
};


// CardGroup({ cards: [], type: Math.random() > 0.5 ? "projects" : "commons"} )