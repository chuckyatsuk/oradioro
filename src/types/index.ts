export interface NavItem {
  title: string
  href: string
}

export interface PageSection {
  id: string
  title: string
  content: string
  image?: string
}

export interface Villa {
  name: string
  tagline: string
  description: string
  bedrooms: number
  bathrooms: number
  maxGuests: number
  amenities: string[]
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  checkIn: string
  checkOut: string
  guests: number
  message?: string
}