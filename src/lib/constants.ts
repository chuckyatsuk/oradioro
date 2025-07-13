export const siteConfig = {
  name: "Villa Ora di Oro",
  tagline: "Where Gold Meets the Caribbean Sea",
  description: "An exclusive luxury villa in Curaçao",
  url: "https://villaoradioro.com",
  email: "reservations@villaoradioro.com",
  phone: "+599 9 123 4567",
}

export const navigation = [
  { title: "Home", href: "/" },
  { title: "Villa", href: "/villa" },
  { title: "Location", href: "/location" },
  { title: "Amenities", href: "/amenities" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
]

export const animations = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
  },
  easing: {
    easeOut: [0.25, 1, 0.5, 1],
    easeInOut: [0.42, 0, 0.58, 1],
    spring: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}