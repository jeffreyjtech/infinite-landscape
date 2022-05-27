import { render, screen } from '@testing-library/react';
import React from 'react';

import Nav from './index.js';

describe('Testing the Nav', () => {

  test('Should render the Nav', () => {

    render(<Nav />);

    let element = screen.getByTestId('nav');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});