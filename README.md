# Khalid Portfolio App

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features a beautiful design with smooth animations, interactive components, and a professional presentation of skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with terracotta color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Animated sections, modals, and smooth scrolling
- **Portfolio Showcase**: Filterable project gallery with detailed case studies
- **Timeline/Resume**: Interactive timeline showing work and education history
- **Contact Form**: Gmail-integrated contact form for easy communication
- **Performance Optimized**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Code Quality**: ESLint + Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd khalid-portfolio-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
khalid-portfolio-app/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # About section
│   ├── Portfolio.jsx     # Portfolio showcase
│   ├── Timeline.jsx      # Timeline/resume section
│   ├── Contact.jsx       # Contact form
│   └── ...               # Other components
├── data/                 # Static data files
│   ├── personal-info.js  # Personal information
│   ├── portfolio-data.js # Portfolio projects
│   ├── timeline-data.js  # Timeline entries
│   └── tech-colors.js    # Technology color mapping
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Customization

### Colors and Theme
The project uses a custom terracotta color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  "red-terracotta": "#D2691E",
  "lime-terracotta": "#8FBC8F",
  "blue-terracotta": "#708090",
  // ... more colors
}
```

### Personal Information
Update your personal details in `data/personal-info.js`:
- Name, title, description
- Contact information
- Social media links
- Profile images

### Portfolio Projects
Add your projects in `data/portfolio-data.js`:
- Project title and description
- Technologies used
- Links to live demo and GitHub
- Problem/solution descriptions

### Timeline/Resume
Update your work and education history in `data/timeline-data.js`:
- Company/school names
- Positions and durations
- Key activities and achievements
- Relevant links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Build
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🧪 Development

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically

### Code Quality
The project uses ESLint and Prettier for code quality:
- ESLint configuration: `eslint.config.js`
- Prettier configuration: `.prettierrc`
- Run `pnpm lint` to check for issues
- Run `pnpm lint:fix` to auto-fix formatting issues

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- **Image Optimization**: Uses Next.js Image component
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Bundle Analysis**: Use `@next/bundle-analyzer` for bundle analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please open an issue on GitHub or contact through the portfolio's contact form.

---

Built with ❤️ using Next.js and Tailwind CSS 