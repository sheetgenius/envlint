const { test, expect } = require('@playwright/test');

test('loads the page and completes the lint smoke path', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto('/', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveTitle(/EnvLint/);
  await expect(page.locator('.logo')).toContainText('envlint');
  await expect(page.locator('#env-input')).toBeVisible();
  await expect(page.getByRole('button', { name: 'lint .env' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'load example' })).toBeVisible();

  await page.getByRole('button', { name: 'load example' }).click();
  await page.getByRole('button', { name: 'lint .env' }).click();

  await expect(page.locator('#results')).toBeVisible();
  await expect(page.locator('#summary-bar')).toContainText('keys found');
  await expect(page.locator('#issues-section')).toContainText('issues');
  await expect(page.locator('#env-tbody')).toContainText('DATABASE_URL');
  await expect(page.locator('#example-output')).toContainText('DATABASE_URL=your-database-url');

  expect(pageErrors).toEqual([]);
});
