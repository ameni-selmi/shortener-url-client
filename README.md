
# URL Shortener Client

A modern URL shortening web application built with Next.js 13.

## Features

- Shorten long URLs into compact, shareable links
- Copy shortened URLs to clipboard with one click
- Responsive design that works on desktop and mobile
- Real-time URL validation
- Modern and clean user interface

## Tech Stack

- [Next.js 13](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

git clone https://github.com/yourusername/url-shortener-client.git


2. Install dependencies:

cd url-shortener-client
npm install
# or
yarn install


3. Create a `.env.local` file in the root directory and add your environment variables:

NEXT_PUBLIC_API_URL=your_api_url_here


4. Run the development server:

npm run dev
# or
yarn dev


5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure


url-shortener-client/
├── app/                   # Next.js 13 app directory
├── components/           # Reusable UI components
├── lib/                  # Utility functions and configurations
├── public/              # Static assets
└── types/               # TypeScript type definitions


## Features in Detail

### URL Shortening
- Input validation for valid URLs
- Loading states during API calls
- Error handling and user feedback
- Copy to clipboard functionality

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Built with modern web technologies and best practices
