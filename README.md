# Food Delivery Website

A modern food delivery website built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
├── public/
│   └── images/         # Static images
├── src/
│   ├── app/           # App router pages
│   │   ├── layout.tsx # Root layout
│   │   ├── page.tsx   # Home page
│   │   └── globals.css# Global styles
│   └── components/    # React components
├── .env              # Environment variables
├── .eslintrc.json   # ESLint configuration
├── next.config.js   # Next.js configuration
├── postcss.config.js# PostCSS configuration
└── tailwind.config.ts# Tailwind CSS configuration
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Features

- 🚀 Built with Next.js 14
- 💅 Styled with Tailwind CSS
- 📱 Fully Responsive Design
- 🔍 Restaurant Search
- 🍔 Food Categories
- 🛵 Real-time Order Tracking

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
