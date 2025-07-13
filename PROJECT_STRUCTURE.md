# Villa 156 - Project Structure & Architecture

## Current Directory Structure
```
oradioro/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with fonts
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles + Tailwind
│   │
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn/ui components (to be added)
│   │   ├── navigation.tsx    # Site navigation
│   │   ├── hero.tsx          # Hero section
│   │   ├── introduction.tsx  # Intro grid section
│   │   └── features.tsx      # Features showcase
│   │
│   ├── lib/                   # Utilities
│   │   ├── utils.ts          # Helper functions
│   │   └── constants.ts      # Site configuration
│   │
│   └── types/                # TypeScript types (to be added)
│
├── public/                    # Static assets
│   └── (images to be added)
│
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies
```

## Planned Structure Additions

### Phase 3: Core Pages
```
src/
├── app/
│   ├── villa/
│   │   └── page.tsx          # Villa details page
│   ├── gallery/
│   │   └── page.tsx          # Photo gallery
│   ├── location/
│   │   └── page.tsx          # Area information
│   ├── amenities/
│   │   └── page.tsx          # Amenities showcase
│   └── contact/
│       └── page.tsx          # Contact form
│
├── components/
│   ├── ui/                   # Shadcn components
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── dialog.tsx
│   │
│   ├── layout/
│   │   └── footer.tsx        # Site footer
│   │
│   └── features/             # Feature-specific components
│       ├── room-card.tsx
│       ├── gallery-grid.tsx
│       ├── contact-form.tsx
│       └── map.tsx
```

### Phase 4: CMS Integration
```
src/
├── app/
│   ├── api/                  # API routes
│   │   └── [...payload]/     # Payload CMS routes
│   │       └── route.ts
│   │
│   └── admin/               # Admin panel
│       └── [[...segments]]/
│           └── page.tsx
│
├── payload/                  # Payload configuration
│   ├── collections/         # Content types
│   │   ├── Villa.ts
│   │   ├── Rooms.ts
│   │   ├── Amenities.ts
│   │   ├── Gallery.ts
│   │   └── Testimonials.ts
│   │
│   ├── globals/             # Global configs
│   │   └── Settings.ts
│   │
│   └── payload.config.ts    # Main config
│
└── server.ts                # Custom server (if needed)
```

## Component Architecture

### Design Principles
1. **Component Composition**: Small, reusable components
2. **Type Safety**: Full TypeScript coverage
3. **Performance**: Lazy loading, code splitting
4. **Accessibility**: ARIA labels, keyboard navigation

### Component Categories

**Layout Components**
- Navigation (✅ Complete)
- Footer (Planned)
- PageWrapper (Planned)

**Section Components**
- Hero (✅ Complete)
- Introduction (✅ Complete)
- Features (✅ Complete)
- Gallery (Planned)
- Testimonials (Planned)

**UI Components**
- Button (Shadcn)
- Form elements (Shadcn)
- Modal/Dialog (Shadcn)
- Image viewer (Planned)

**Feature Components**
- RoomShowcase
- AmenityCard
- BookingCalendar
- ContactForm
- LocationMap

## Data Flow Architecture

### Current: Static Data
```
constants.ts → Components → Rendered Pages
```

### Future: CMS Integration
```
Payload CMS → API Routes → Components → Rendered Pages
     ↓
   Admin UI → Content Editors
```

## Styling Architecture

### Current Setup
- **Tailwind CSS v4**: Utility-first styling
- **CSS Variables**: Custom properties for theming
- **Framer Motion**: Animation library

### Design Tokens
```css
--color-cream: 251 248 246
--color-sand: 245 237 230
--color-stone: 120 113 108
--color-charcoal: 38 38 38
--color-gold: 212 175 55
```

### Typography Scale
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Sizes**: Fluid typography with clamp()

## Performance Considerations

### Image Optimization
- Next.js Image component
- Lazy loading
- Responsive images
- WebP format (planned)

### Code Splitting
- Route-based splitting (automatic)
- Component lazy loading
- Dynamic imports for heavy features

### Caching Strategy
- Static page generation
- ISR for CMS content (planned)
- Edge caching (planned)

## Development Workflow

### Branch Strategy
- `main`: Production
- `dev`: Development
- `feature/*`: New features
- `fix/*`: Bug fixes

### Code Quality
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Pre-commit hooks (planned)

### Testing Strategy (Planned)
- Unit tests: Vitest
- Integration: Testing Library
- E2E: Playwright
- Visual regression: Percy

## Deployment Architecture

### Hosting Options
1. **Vercel** (Recommended)
   - Automatic deployments
   - Edge functions
   - Analytics

2. **Alternative Options**
   - Netlify
   - AWS Amplify
   - Self-hosted with Docker

### Environment Variables
```env
# CMS (Future)
PAYLOAD_SECRET=
MONGODB_URI=

# Analytics (Future)
NEXT_PUBLIC_GA_ID=

# Email (Future)
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
```

## Security Considerations
- Environment variable management
- Form validation and sanitization
- Rate limiting on API routes
- Content Security Policy headers
- CORS configuration for CMS