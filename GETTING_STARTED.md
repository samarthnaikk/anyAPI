# Getting Started with anyAPI

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samarthnaikk/anyAPI.git
   cd anyAPI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## Running the Project

### Development Mode
Run the project with TypeScript directly using tsx:
```bash
npm run dev
```

### Build Mode
Compile TypeScript to JavaScript:
```bash
npm run build
```

### Production Mode
Run the compiled JavaScript:
```bash
npm start
```

## Project Structure

```
anyAPI/
├── src/
│   ├── index.ts           # Main entry point
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Core types (MessageInput, TargetWebsiteConfig, etc.)
│   ├── adapters/          # Site-specific adapters
│   │   └── index.ts       # Adapter placeholder
│   └── utils/             # Utility functions
│       └── index.ts       # Utility placeholder
├── dist/                  # Compiled JavaScript output (generated)
├── package.json           # Node.js project configuration
└── tsconfig.json          # TypeScript configuration

```

## Core Types

The project defines the following core types in `src/types/index.ts`:

- **MessageInput**: Represents a message to be sent to a target website
- **TargetWebsiteConfig**: Configuration for targeting a specific website
- **AutomationResponse**: Response from automation execution
- **SiteAdapter**: Base interface for site adapters

## Next Steps

Now that the project foundation is set up, you can:

1. Implement site-specific adapters in `src/adapters/`
2. Add utility functions in `src/utils/`
3. Build HTTP or SDK interfaces
4. Add advanced Playwright configuration
5. Implement error handling and logging
6. Add testing frameworks

## Requirements

- Node.js 14 or higher
- npm or yarn package manager

## TypeScript Configuration

The project uses strict TypeScript configuration for maximum type safety:
- Strict type checking enabled
- No unused locals or parameters allowed
- Implicit returns and fallthrough cases not allowed
- ES2020 target for modern JavaScript features
