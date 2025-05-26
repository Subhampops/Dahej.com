# Dahej.Com - Marriage Market Value Calculator

A modern web application built with React and TypeScript that calculates marriage market value based on various parameters like education, job, assets, and more.

## Features

- 📚 Education level assessment
- 💼 Job and salary evaluation
- 🏠 Asset value calculation
- 👨‍👩‍👧‍👦 Family background consideration
- 📊 Real-time value calculation
- 📱 Fully responsive design
- 🎯 Detailed results breakdown

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/         # React components
│   ├── Calculator/    # Calculator-related components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
├── data/              # Static data and configurations
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Calculator Parameters

### Education Level
- No degree: ₹0
- Graduate: ₹2 lakhs
- Postgraduate: ₹5 lakhs
- PhD/IIT/IIM: ₹10 lakhs+

### Job Type & Salary
- Unemployed: ₹0
- Private job (< ₹30k/month): ₹1 lakh
- Government job: ₹10 lakhs
- MNC / High-salary (> ₹1 lakh/month): ₹15+ lakhs

### Assets
- Own car: +₹2 lakhs
- Own house: +₹5 lakhs
- Both: +₹10 lakhs

### Additional Parameters
- Caste/Community considerations
- Appearance factors
- Family demands (Gold, Car, Furniture)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint and TypeScript for code quality. Follow the existing code style and component structure when making changes.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License - feel free to use this project for any purpose.

## Contact

For questions or feedback, please open an issue in the repository.
