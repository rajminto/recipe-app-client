import React from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing...', () => {
  gsap.registerPlugin(DrawSVGPlugin);
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
