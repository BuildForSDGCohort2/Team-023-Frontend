import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    render(<Sidebar />);
  });
});
