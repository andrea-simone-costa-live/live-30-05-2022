import * as React from 'react';
import { CardGroup } from './components/card-group/CardGroup';
import './style.css';

const commons = [
  { copy: 'copy' },
  { copy: 'copy' },
  { copy: 'copy' },
  { copy: 'copy' },
];

const projects = [
  { heading: 'heading' },
  { heading: 'heading' },
  { heading: 'heading' },
];

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <CardGroup cards={commons} type="commons" />
    </div>
  );
}
