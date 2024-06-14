export const galleryArray = ["01", "02", "03", "04", "05", "06", "07"];

interface Service {
  title: string;
  desc: string;
}

export const servicesArray: string[] = [
  "dj",
  "mc",
  "rental",
  "eprod",
  "lighting",
  "sfx",
  "eplan",
  "vcoord",
];

export const servicesObj: { [key: string]: Service } = {
  dj: {
    title: "Specialized DJ",
    desc: "Looking for the perfect soundtrack to your special event? Our DJ's are the ultimate choice for weddings, birthdays, and any celebration worth remembering. With a passion for music and an ear for what gets people moving, our DJs bring a unique blend of genres to cater to all tastes and ages. From romantic ballads for your first dance to high-energy hits that keep the dance floor packed, we know how to create the perfect vibe.",
  },
  mc: {
    title: "MC Hosting",
    desc: "Make your event unforgettable with premier MC services from F1rst Class Events. Our experienced and charismatic MCs are experts in engaging audiences, ensuring smooth transitions, and keeping the energy high throughout your event. Whether it's a wedding, birthday, corporate gathering, or any special occasion, F1rst Class Events provides professional and dynamic MC services that add a touch of class and excitement. Book now and let us make your event extraordinary!",
  },
  rental: {
    title: "Rental Services",
    desc: "Rental Text",
  },
  eprod: {
    title: "Event Production",
    desc: "Production Text",
  },
  lighting: {
    title: "Lighting",
    desc: "Lighting Text",
  },
  sfx: {
    title: "Special FX",
    desc: "Special Effects Text",
  },
  eplan: {
    title: "Event Planning",
    desc: "Event Planning Text",
  },
  vcoord: {
    title: "Event Coordination",
    desc: "Event Coordination Text",
  },
 
};

export const eventsArray: string[] = [
  "weddings",
  "southweddings",
  "engage",
  "sweet",
  "corp",
  "hsaree",
  "dhoti",
  "uniCommunity",
  "house",
  "bday",
];

export const eventsObj: { [key: string]: Service } = {
  weddings: {
    title: "Weddings",
    desc: "Weddings Text",
  },
  southweddings: {
    title: "South Asian Weddings",
    desc: "South Asian Weddings Text",
  },
  engage: {
    title: "Engagements",
    desc: "Engagements Text",
  },
  sweet: {
    title: "Sweet 16s",
    desc: "Sweet 16s Text",
  },
  corp: {
    title: "Corporate Events",
    desc: "Corporate Events Text",
  },
  hsaree: {
    title: "Half Saree",
    desc: "Half Saree Text",
  },
  dhoti: {
    title: "Dhoti Ceremony",
    desc: "Dhoti Ceremony Text",
  },
  uniCommunity: {
    title: "University & Community",
    desc: "University & Community Text",
  },
  house: {
    title: "House Parties",
    desc: "House Parties Text",
  },
  bday: {
    title: "Birthdays",
    desc: "Birthdays Text",
  },
};