# Social Handle Checker

A tool to check username availability across developer platforms.

## Features

- Check username availability across GitHub, Reddit, Medium, Dev.to, and more
- Get alternative username suggestions when your preferred handle is taken
- TypeScript for type safety and better developer experience
- API documentation with Swagger UI
- Clean, responsive UI with Tailwind CSS

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Swagger for API documentation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
   git clone https://github.com/yourusername/social-handle-checker.git
   cd social-handle-checker

2. Install dependencies
   npm install

3. Run the development server
   npm run dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Endpoints

This project includes a REST API with the following endpoints:

- `GET /api/platforms` - List all supported platforms
- `GET /api/check/:username` - Check username availability
- `GET /api/suggestions/:username` - Get alternative username suggestions

Documentation is available at [/api-docs](/api-docs) when running the application.

## Implementation Notes

The current implementation uses HTTP HEAD requests to check username availability. This is a simplified approach for demonstration purposes and has some limitations:

- It works well for certain platforms (GitHub, Reddit, Dev.to)
- It may not be 100% accurate for all platforms
- More robust implementation would use official platform APIs

## Testing with Postman

A Postman collection is available in the `postman` directory. To use it:

1. Import the collection into Postman
2. Set the environment variable `baseUrl` to your server URL (default: `http://localhost:3000`)
3. Run the included requests to test the API endpoints

## Deployment

This application can be easily deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js configuration and deploy it

## License

MIT
