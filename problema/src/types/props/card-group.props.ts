import { CardCommonProps } from './card-common.props';
import { CardProjectProps } from './card-project.props';

export interface ComponentMap {
  projects: ({}: CardProjectProps) => JSX.Element;
  commons: ({}: CardCommonProps) => JSX.Element;
}

type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] }

export type CardGroupType = Resolve<keyof ComponentMap>;

export type CardGroupCard = Parameters<ComponentMap[keyof ComponentMap]>[0];

export interface CardGroupProps<T extends CardGroupType> {
  cards: Parameters<ComponentMap[T]>[0][];
  type: T;
}
