import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalculatorForm from '../CalculatorForm';

describe('CalculatorForm', () => {
  it('renders all form elements', () => {
    render(<CalculatorForm />);

    expect(screen.getByLabelText(/account size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/risk percentage/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/stop-loss distance/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /calculate/i })).toBeInTheDocument();
  });

  it('switches between spot and futures markets', async () => {
    render(<CalculatorForm />);
    const user = userEvent.setup();

    // Initially shows forex pair selector
    expect(screen.getByLabelText(/trading instrument/i)).toBeInTheDocument();

    // Switch to futures
    await user.click(screen.getByRole('button', { name: /futures/i }));

    // Shows futures contract selector
    expect(screen.getByLabelText(/futures contract/i)).toBeInTheDocument();
  });

  it('calculates position size on form submission', async () => {
    render(<CalculatorForm />);
    const user = userEvent.setup();

    // Fill form
    await user.type(screen.getByLabelText(/account size/i), '10000');
    await user.type(screen.getByLabelText(/risk percentage/i), '1');
    await user.type(screen.getByLabelText(/stop-loss distance/i), '10');

    // Submit form
    await user.click(screen.getByRole('button', { name: /calculate/i }));

    // Check results are displayed
    expect(screen.getByText(/results/i)).toBeInTheDocument();
  });

  it('resets form when clicking reset button', async () => {
    render(<CalculatorForm />);
    const user = userEvent.setup();

    // Fill form
    await user.type(screen.getByLabelText(/account size/i), '10000');

    // Reset form
    await user.click(screen.getByRole('button', { name: /reset/i }));

    // Check input is cleared
    expect(screen.getByLabelText(/account size/i)).toHaveValue('');
  });
});