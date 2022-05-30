import * as React from 'react';
import { CardProjectProps } from '../../types/props';

export const CardProject = ({ heading }: CardProjectProps) => {
  return (
    <article className="CardProject">
      <h2>{heading}</h2>
    </article>
  );
};
