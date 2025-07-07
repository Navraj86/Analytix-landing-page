# AnalytiX
  
## Next-Generation User Analytics Platform
A modern, responsive landing page for AnalytiX - an advanced user analytics platform that helps businesses gain valuable insights into user behavior and drive data-informed decision-making.
  
  ![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)
  ![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat-square&logo=vite)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Modern Design**: Clean, responsive UI built with Tailwind CSS
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Component Library**: Built with Radix UI components for accessibility
- **TypeScript**: Full type safety throughout the application
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds
- **Smooth Scrolling**: Integrated Lenis for buttery smooth scroll experience

## 🚀 Live Demo

[View Live Demo](https://analytix-landing-page-green.vercel.app/)

## 🛠️ Built With

### Core Technologies
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Animation Libraries
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library
- **[React Player](https://github.com/cookpete/react-player)** - Video player component

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Class Variance Authority](https://cva.style/)** - Component variant management

## 📁 Project Structure

```
analytix/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Images, logos, and static assets
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── Blog.tsx    # Blog section
│   │   ├── Brand.tsx   # Brand showcase
│   │   ├── Cta.tsx     # Call-to-action section
│   │   ├── Feature.tsx # Features section
│   │   ├── Footer.tsx  # Footer component
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Hero.tsx    # Hero section
│   │   └── ...         # Other components
│   ├── constants/       # App constants and data
│   ├── lib/            # Utility functions and configurations
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/analytix.git
   cd analytix
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize:
- **Colors**: Edit `tailwind.config.js` to modify the color palette
- **Typography**: Adjust font families and sizes in the Tailwind config
- **Components**: Modify component styles in their respective files

### Content
- **Hero Section**: Edit `src/constants/index.tsx` to update hero content
- **Features**: Modify the features array in the constants file
- **Navigation**: Update the navigation menu in the constants
- **Assets**: Replace images in `src/assets/` with your own

### Components
The project uses a modular component structure:
- **UI Components**: Located in `src/components/ui/`
- **Section Components**: Each section has its own component file
- **Reusable**: Components are designed to be easily customizable

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.