# CrowdPrint - Custom Printing Services

A modern, vibrant React website for CrowdPrint custom printing services, built with React, TypeScript, Vite, Tailwind CSS, and Supabase.

## 🚀 Quick Start

**New to this project?** Start with [QUICK_START.md](./QUICK_START.md) for a step-by-step guide to get running in 10 minutes.

**Need detailed setup?** See [SETUP_GUIDE.md](../SETUP_GUIDE.md) for comprehensive deployment instructions.

## 📦 Tech Stack

- **Frontend**: React 19.2.0 + TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.17 with vibrant custom theme
- **Routing**: React Router 7.6.0
- **Animations**: Framer Motion 12.0.0
- **Forms**: React Hook Form 7.57.0
- **Icons**: Lucide React 0.512.0
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Image Hosting**: Cloudinary (optional)

## ✨ Features

- **Product Catalog**: Browse printing products by category with detailed product pages
- **Dynamic Content**: Real-time data from Supabase database
- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Contact Forms**: Quote request and contact forms
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Optimized images and code splitting
- **Vibrant Theme**: Modern gradient-based color scheme

## 🏗️ Project Structure

```
crowdprints/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── sections/        # Hero, About, Products, etc.
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Route pages
│   ├── hooks/               # Custom React hooks (useCategories, useProducts)
│   ├── services/            # API services (categoryService, productService)
│   ├── lib/                 # Supabase client configuration
│   ├── data/                # Static data (fallback)
│   ├── types/               # TypeScript types
│   └── App.tsx              # Main app component
├── public/                  # Static assets
├── .env.local              # Environment variables (create this!)
├── QUICK_START.md          # Quick setup guide
└── package.json            # Dependencies
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- Supabase account (free tier works)

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   ```
   Then add your Supabase credentials to `.env.local`

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🗄️ Database Schema

The app uses three main tables in Supabase:

- **categories**: Product categories (Business Cards, Flyers, etc.)
- **products**: Individual products with specifications
- **product_images**: Multiple images per product

See [QUICK_START.md](./QUICK_START.md) for the complete SQL schema.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { /* Pink shades */ },
  secondary: { /* Green shades */ },
  accent: { /* Orange shades */ },
}
```

### Content

- **Contact Info**: Edit `src/data/contactInfo.ts`
- **Features**: Edit `src/data/features.ts`
- **Industries**: Edit `src/data/industries.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

See the full [SETUP_GUIDE.md](../SETUP_GUIDE.md) for detailed deployment instructions.

## 📝 Environment Variables

Required variables in `.env.local`:

```bash
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Cloudinary (optional, for image uploads)
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=crowdprint-products
```

## 🔐 Security

- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Public read access for products
- ✅ Authenticated write access for admin
- ✅ Environment variables for sensitive data
- ✅ `.env.local` in `.gitignore`

## 📚 Documentation

- [QUICK_START.md](./QUICK_START.md) - Get started in 10 minutes
- [SETUP_GUIDE.md](../SETUP_GUIDE.md) - Comprehensive setup and deployment
- [COMPARISON.md](../../COMPARISON.md) - Supabase vs AWS comparison

## 🐛 Troubleshooting

**App not loading data?**
- Check `.env.local` has correct Supabase credentials
- Verify Supabase project is running
- Check browser console for errors

**Build failing?**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run build`

**Styles not applying?**
- Clear Vite cache: `rm -rf node_modules/.vite`
- Restart dev server

## 📄 License

© 2026 CrowdPrint. All rights reserved.

## 🤝 Support

For issues or questions:
1. Check [QUICK_START.md](./QUICK_START.md)
2. Review [SETUP_GUIDE.md](../SETUP_GUIDE.md)
3. Check Supabase docs: https://supabase.com/docs
