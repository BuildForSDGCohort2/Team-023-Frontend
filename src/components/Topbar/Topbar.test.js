import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
  });
});
