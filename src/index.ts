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

  // Set content directly (no network access needed)
  await page.setContent('<html><head><title>anyAPI Test</title></head><body><h1>Hello from anyAPI!</h1></body></html>');
  console.log('📝 Content set successfully');

  // Get the page title
  const title = await page.title();
  console.log(`📋 Page title: ${title}`);

  // Get the heading text
  const heading = await page.textContent('h1');
  console.log(`📰 Heading: ${heading}`);

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
