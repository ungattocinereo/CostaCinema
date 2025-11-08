# Costiera Cinema

> **Where Cinema Meets The Coast**

A presentation website and pre-launch e-commerce platform celebrating film tourism on the Amalfi Coast, featuring merchandise inspired by The Equalizer 3, Ripley, and Hotel Costiera.

## 🎬 About

Costiera Cinema combines authentic Italian cinema aesthetics with modern web technology to create a unique online experience. This project showcases filming locations on the Amalfi Coast and offers exclusive merchandise celebrating these iconic films.

## 🚀 Tech Stack

- **Framework:** Next.js 15.1+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Email:** Resend

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── shop/              # Shop pages
│   ├── locations/         # Filming locations
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer
│   ├── home/              # Homepage components
│   ├── shop/              # Shop components
│   ├── locations/         # Location components
│   └── shared/            # Shared components
├── lib/
│   └── utils.ts           # Utility functions
└── styles/                # Additional styles

public/
├── images/                # Image assets
├── fonts/                 # Font files
└── icons/                 # Icon assets
```

## 🎨 Design System

### Color Palette (Vintage Italian Cinema)
- **Sepia Tones:** `#D4A574`, `#8B7355`
- **Coastal Blues:** `#5B8FA3`, `#7BA5B8`
- **Vintage Red:** `#C13F3F`
- **Gold Accent:** `#D4AF37`
- **Cream:** `#F5F1E8`
- **Charcoal:** `#2C2C2C`

### Typography
- **Display:** Playfair Display (Italian vintage serifs)
- **Headings:** Outfit (Classic sans-serif)
- **Body:** Inter (Modern readable sans)
- **Accent:** Pacifico (Italian script - minimal use)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ LTS
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📄 Pages

- **Home (/)** - Hero section, featured films, product preview
- **About (/about)** - Project story, film details, mission
- **Shop (/shop)** - Product catalog with waitlist functionality
- **Locations (/locations)** - Interactive map of filming locations
- **Contact (/contact)** - Contact form and FAQs

## 🎯 Development Phases

### Phase 1: Foundation ✅
- [x] Next.js setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Design tokens implementation
- [x] Core layout components (Header, Footer)
- [x] Basic routing structure
- [x] Docker containerization

### Phase 2: Core Components (In Progress)
- [ ] Homepage hero section
- [ ] Film showcase cards
- [ ] Product carousel
- [ ] Newsletter signup
- [ ] Button and card components

### Phase 3: Content Pages
- [ ] About page sections
- [ ] Film details components
- [ ] Shop page layout
- [ ] Product cards and filters

### Phase 4: Interactive Features
- [ ] Interactive location map
- [ ] Contact form with validation
- [ ] Waitlist/Notify Me modals
- [ ] Newsletter integration

### Phase 5: Polish & Launch
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Production deployment

## 🐳 Docker Deployment

The application is fully containerized and runs on a random available port for easy deployment.

### Prerequisites
- Docker
- Docker Compose

### Quick Start with Docker

#### Option 1: Using Make (Recommended)

```bash
# Build the Docker image
make build

# Start the container (automatically shows assigned port)
make start

# View logs
make logs

# Check which port was assigned
make port

# Stop the container
make down

# Restart the container
make restart

# Full rebuild
make rebuild
```

#### Option 2: Using Helper Script

```bash
# Make script executable (first time only)
chmod +x docker-run.sh

# Build the image
./docker-run.sh build

# Start the container
./docker-run.sh start

# Check the assigned port
./docker-run.sh port

# View logs
./docker-run.sh logs

# Stop the container
./docker-run.sh stop
```

#### Option 3: Using Docker Compose Directly

```bash
# Build and start
docker-compose up -d --build

# Find the assigned port
docker-compose port costiera-cinema 3000

# Stop
docker-compose down
```

### Docker Features

- **Multi-stage build** - Optimized for production with minimal image size
- **Random port assignment** - Automatically assigns an available port to avoid conflicts
- **Health checks** - Built-in health monitoring
- **Non-root user** - Runs as unprivileged user for security
- **Standalone mode** - Self-contained Next.js build

### Accessing the Application

After starting the container:
- Run `make port` or `./docker-run.sh port` to see the assigned URL
- Open the displayed URL in your browser (e.g., `http://localhost:32768`)

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com):

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Alternative: Deploy with Docker

You can also deploy the containerized version to any Docker-compatible hosting:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform
- Any VPS with Docker installed

## 📝 Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://costieracinema.com
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🤝 Contributing

This is a private project for Costiera Cinema. For internal collaboration:

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📧 Contact

For inquiries: hello@costieracinema.com

## 📜 License

Copyright © 2025 Costiera Cinema. All rights reserved.

---

**Target Launch:** Q2 2025
