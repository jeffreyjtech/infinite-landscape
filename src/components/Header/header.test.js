import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from './index.js';

describe('Testing the Header', () => {

  test('Should render the Header', () => {

    render(<Header />);

    let element = screen.getByTestId('header');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});