export type TimeUntil = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export type RSVPData = {
  name: string
  email: string
  attending: string
  guests: string
  dietary: string
}

export type Hotel = {
  name: string
  distance: string
  description: string
  phone: string
}

export type DetailsContent = {
  title: string
  eventTitle: string
  date: string
  time: string
  venue: string
  address1: string
  address2: string
  dressCode: string
  attire: string
}

export type LocationContent = {
  title: string
  venue: string
  gettingThere: string
  byCar: string
  carInfo: string
  fromAirport: string
  airportInfo: string
  rideshare: string
  rideshareInfo: string
  openMaps: string
  accommodations: string
  hotels: Hotel[]
}

export type StoryContent = {
  title: string
  text: string
}

export type HeroContent = {
  invite: string
  date: string
}

export type RootContent = {
  names: string
  menu: string[]
  hero: HeroContent
  story: StoryContent
  details: DetailsContent
  location: LocationContent
  rsvp: {
    title: string
    fullName: string
    email: string
    attending: string
    selectPlaceholder: string
    accepts: string
    declines: string
    guests: string
    dietary: string
    submit: string
    deadline: string
    thankYou: string
    confirmation: string
  }
  footer: {
    message: string
  }
}

export type ContentMap = {
  en: RootContent
  ar: RootContent
}