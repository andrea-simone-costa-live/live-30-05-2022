import { CardCommonProps } from './card-common.props';
import { CardProjectProps } from './card-project.props';

export type CardPropsMap = {
  projects: CardProjectProps
  commons: CardCommonProps
};

export type ComponentMap = {
  [K in keyof CardPropsMap]: (o: CardPropsMap[K]) => JSX.Element;
};

export type CardGroupPropsMap = {
  [K in keyof CardPropsMap]: {
    cards: CardPropsMap[K][]
    type: K
  }
}
