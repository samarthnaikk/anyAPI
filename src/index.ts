import { chromium } from 'playwright';

/**
 * Main entry point for anyAPI
 * Demonstrates basic Playwright browser launch and close
 */
async function main() {
  console.log('🚀 Starting anyAPI...');
  console.log('📦 Launching Playwright browser...');

  // Launch Chromium browser
  const browser = await chromium.launch({
    headless: true,
  });

  console.log('✅ Browser launched successfully!');

  // Create a new page
  const page = await browser.newPage();
  console.log('📄 New page created');

  // Navigate to a test page to verify browser is working
  await page.goto('https://example.com');
  console.log('🌐 Navigated to example.com');

  // Get the page title
  const title = await page.title();
  console.log(`📋 Page title: ${title}`);

  // Close the browser
  await browser.close();
  console.log('✅ Browser closed successfully!');
  console.log('🎉 anyAPI initialization complete!');
}

// Run the main function
main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
