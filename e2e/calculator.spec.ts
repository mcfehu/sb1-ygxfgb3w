import { test, expect } from '@playwright/test';

test.describe('Position Size Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('calculates spot position size', async ({ page }) => {
    // Fill the form
    await page.fill('[aria-label="Account Size"]', '10000');
    await page.fill('[aria-label="Risk Percentage (%)"]', '1');
    await page.fill('[aria-label="Stop-Loss Distance (pips/ticks)"]', '10');

    // Submit form
    await page.click('button:has-text("Calculate Position Size")');

    // Verify results are displayed
    await expect(page.locator('text=Results')).toBeVisible();
    await expect(page.locator('text=Position Size')).toBeVisible();
  });

  test('switches between market types', async ({ page }) => {
    // Initially in spot mode
    await expect(page.locator('text=Trading Instrument')).toBeVisible();

    // Switch to futures
    await page.click('button:has-text("Futures")');

    // Verify futures-specific fields
    await expect(page.locator('text=Futures Contract')).toBeVisible();
    await expect(page.locator('text=Tick Value')).toBeVisible();
  });

  test('saves calculation history', async ({ page }) => {
    // Fill and submit form
    await page.fill('[aria-label="Account Size"]', '10000');
    await page.fill('[aria-label="Risk Percentage (%)"]', '1');
    await page.fill('[aria-label="Stop-Loss Distance (pips/ticks)"]', '10');
    await page.click('button:has-text("Calculate Position Size")');

    // Save calculation
    await page.click('button:has-text("Save")');

    // Verify calculation is saved
    await expect(page.locator('text=Saved!')).toBeVisible();
  });
});