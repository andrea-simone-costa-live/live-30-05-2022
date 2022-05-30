import * as React from 'react';
import { CardCommonProps } from '../../types/props';

export const CardCommon = ({ copy }: CardCommonProps) => {
  return (
    <article className="CardCommon">
      <p>{copy}</p>
    </article>
  );
};
