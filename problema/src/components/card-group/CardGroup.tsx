import * as React from 'react';
import { useMemo } from 'react';
import { CardGroupProps, CardGroupType, ComponentMap } from '../../types/props';
import { CardCommon } from '../card-common/CardCommon';
import { CardProject } from '../card-project/CardProject';

export const CardGroup = <T extends CardGroupType = 'projects'>({
  cards,
  type,
}: CardGroupProps<T>) => {
  const componentMap: ComponentMap = {
    commons: CardCommon,
    projects: CardProject,
  };

  // nel caso peggiore T = "projects" | "commons"
  // (({}: CardProjectProps) => JSX.Element) | (({}: CardCommonProps) => JSX.Element)
  type test1 = ComponentMap['projects' | 'commons'];
  // non sai quale ti puoi ritrovare in tale caso => per sicurezza intersezione (controvarianza)
  //
  // e in tale caso quale è il tipo di card?
  type test2 = Parameters<ComponentMap['projects' | 'commons']>[0][];
  // (CardProjectProps | CardCommonProps)[]
  //
  // problema 1: ONE OF
  // problema 2: tenere allineate card, type, component map in modo tale che TS sia soddisfatto (cose brutte quasi completamente impedite)

  const Component = useMemo(() => componentMap[type], [type]);

  Component(cards[0]);

  return (
    <section className="CardGroup">
      {cards.map((card, i) => {
        return <Component {...card} key={i}></Component>;
      })}
    </section>
  );
};

type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };

// non può fermarmi da fare questo
type test = Resolve<CardGroupProps<'projects' | 'commons'>>;
CardGroup<'projects' | 'commons'>({
  cards: [{ heading: 'ciao mamma' }],
  type: 'commons',
});
CardGroup({
  cards: [{ heading: 'ciao mamma' }],
  type: Math.random() > 0.5 ? 'projects' : 'commons',
});
// nel caso peggiore le card dovrebbero essere ok per entrambi i type
