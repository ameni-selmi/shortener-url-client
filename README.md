# URL Shortener Client

This is the frontend for the **URL Shortener** project, built using Next.js, TailwindCSS, and Axios for seamless communication with the backend API.

## Live Demo

The application is deployed on Netlify: [sshorty.netlify.app](https://sshorty.netlify.app)

## Features

- Enter long URLs to generate shortened URLs.
- Retrieve and copy the shortened URLs.
- Error handling and validations for invalid or missing input.
- Minimal and responsive UI designed with TailwindCSS.

## Technologies Used

- **Next.js**: React-based framework for server-rendered and static web applications.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for API interactions.

## Setup and Installation

### Prerequisites

- Node.js and Yarn installed on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ameni-selmi/shortener-url-client.git
   cd shortener-url-client
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add:

   ```bash
   NEXT_PUBLIC_API_BASE_URL=<Your Backend API URL>
   ```

   Example:
   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/
   ```

4. Run the development server:

   ```bash
   yarn dev
   ```

5. Open your browser and navigate to:

   ```plaintext
   http://localhost:3000
   ```


## How It Works

1. The user inputs a long URL and submits the form.
2. The client sends a POST request to the backend API using the URL in `NEXT_PUBLIC_API_BASE_URL`.
3. On success, the shortened URL is displayed.
4. Errors (e.g., invalid URLs) are displayed to the user.
