# Social Handle Checker

A tool to check username availability across developer platforms.

## Features

- Check username availability across GitHub, Reddit, Medium, Dev.to, and more
- Get alternative username suggestions when your preferred handle is taken
- TypeScript for type safety and better developer experience
- API documentation with Swagger UI
- Clean, responsive UI with Tailwind CSS

## Live Demo

Check out the live application: [social-handle-checker.vercel.app](https://social-handle-checker.vercel.app)

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Swagger for API documentation
- Vercel for deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/social-handle-checker.git
   cd social-handle-checker
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Run the development server

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Documentation

API documentation is available at:

- Production: [https://your-vercel-domain.vercel.app/api-docs](https://your-vercel-domain.vercel.app/api-docs)
- Local Development: [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (when running the development server)

## API Endpoints

This project includes a REST API with the following endpoints:

- `GET /api/platforms` - List all supported platforms
- `GET /api/check/:username` - Check username availability
- `GET /api/suggestions/:username` - Get alternative username suggestions

## Testing with Postman

A Postman collection is included in the `postman` directory with environments for both local and production testing:

### Local Testing

1. Import the collection and environments from the `postman` directory
2. Select the "Local Environment"
3. Ensure your local server is running (`npm run dev`)
4. Run the requests

### Production Testing

1. Import the collection and environments from the `postman` directory
2. Select the "Production Environment"
3. Run the requests against the deployed Vercel application

The production API is available at: [social-handle-checker.vercel.app/api](https://social-handle-checker.vercel.app/api)

## Implementation Notes

The current implementation uses HTTP HEAD requests to check username availability. This is a simplified approach for demonstration purposes and has some limitations:

- It works well for certain platforms (GitHub, Dev.to)
- It may not be 100% accurate for all platforms (particularly Reddit)
- A more robust implementation would use official platform APIs with proper authentication

## Deployment

This application is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Sign up for Vercel
3. Import your repository
4. Deploy with the default settings

## Project Structure

```
social-handle-checker/
│
├── app/                         # App Router directory
│   ├── api/                     # API routes
│   │   ├── platforms/
│   │   │   └── route.ts         # GET /api/platforms
│   │   ├── check/
│   │   │   └── [username]/
│   │   │       └── route.ts     # GET /api/check/:username
│   │   └── suggestions/
│   │       └── [username]/
│   │           └── route.ts     # GET /api/suggestions/:username
│   ├── api-docs/
│   │   └── page.tsx             # Swagger UI page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── favicon.ico              # Favicon
│
├── components/                  # React components
│   ├── Header.tsx               # Site header
│   ├── SearchForm.tsx           # Username search form
│   ├── ResultsList.tsx          # Display platform results
│   └── Suggestions.tsx          # Username suggestions
│
├── data/                        # Application data
│   └── platforms.ts             # Available platforms configuration
│
├── lib/                         # Utility functions
│   └── api.ts                   # Frontend API client functions
│
├── postman/                     # Postman collection and environments
│   ├── Social_Handle_Checker.postman_collection.json
│   ├── local-environment.json
│   └── production-environment.json
│
├── public/                      # Static files
│   └── swagger.json             # Swagger API definition
│
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
```

## Future Enhancements

If this were to be developed into a production application, potential enhancements would include:

- Integration with official platform APIs for more accurate results
- User accounts to save username searches
- Email notifications when usernames become available
- Domain name availability checking
- More sophisticated username suggestion algorithms

## License

MIT
