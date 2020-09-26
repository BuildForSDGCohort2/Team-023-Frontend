import React from 'react';
import { render } from '@testing-library/react';
import Topbar from './Topbar';

describe('Topbar', () => {
  test('renders Topbar component', () => {
    render(<Topbar />);
  });
});
