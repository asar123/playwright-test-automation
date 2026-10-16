# Playwright Test Automation – Demo Web Shop

UI test automation practice project built with **Playwright** and **TypeScript**. It contains 50 automated test scenarios for the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com), a publicly available sample e-commerce website.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- VS Code

## Test Coverage
Scenarios cover the main user flows of the site, such as:
- [Register / Login]
- [Product search and browsing]
- [Add to cart / Checkout]
- [Add or remove the areas you actually tested]

## Project Structure
```
tests/              Test scenarios
e2e/                Additional specs
playwright.config.ts   Playwright configuration
```

## How to Run
1. Clone the repository
```
   git clone https://github.com/asar123/playwright-test-automation.git
   cd playwright-test-automation
```
2. Install dependencies
```
   npm install
   npx playwright install
```
3. Run all tests
```
   npx playwright test
```
4. View the HTML report
```
   npx playwright show-report
```

## Author
Mohamed Azarudeen A – QA Engineer
GitHub: [asar123](https://github.com/asar123)
