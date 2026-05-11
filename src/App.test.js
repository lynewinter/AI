// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AIVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AIVault/i);
    expect(titleElement).toBeInTheDocument();
});
