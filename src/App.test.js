import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dashboard } from './pages/Dashboard';
import '@testing-library/jest-dom';

test('loads inputs', async () => {
    render(<Dashboard />);

    expect(screen.getByText("My courses")).toBeInTheDocument();
});
