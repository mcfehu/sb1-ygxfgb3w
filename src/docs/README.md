# Position Size Calculator Documentation

## Overview
The Position Size Calculator is a professional-grade tool for forex and futures traders to calculate optimal position sizes based on their risk parameters.

## Features
- Spot and futures market support
- Multiple currency pairs
- Risk-based calculations
- Real-time market news
- Calculation history
- Export functionality

## Technical Architecture
The application is built using:
- React with TypeScript
- Tailwind CSS for styling
- Vite for development and building
- Vitest for testing

## Components
- `CalculatorForm`: Main calculator interface
- `MarketTypeSelector`: Toggle between spot and futures
- `RiskInputs`: Risk parameter inputs
- `CalculatorResult`: Display calculation results

## Utils
- `calculations/`: Position size calculation logic
- `currency/`: Currency formatting and conversion
- `news/`: Market news fetching
- `retry/`: API retry mechanisms

## Testing
Run tests using:
```bash
npm run test          # Run unit tests
npm run test:coverage # Generate coverage report
npm run test:e2e      # Run end-to-end tests
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License
MIT License