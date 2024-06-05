export const galleryArray = ["01", "02", "03", "04", "05", "06", "07"];

export const servicesArray: string[] = [
  "dj",
  "audio",
  "mc",
  "wedding",
  "birthday",
  "fx",
  "lighting",
  "decor",
];

interface Service {
    title: string;
    desc: string;
}


export const servicesObj: { [key: string]: Service } = {
  dj: {
    title: "Specialized DJ",
    desc: "Looking for the perfect soundtrack to your special event? Our DJ's are the ultimate choice for weddings, birthdays, and any celebration worth remembering. With a passion for music and an ear for what gets people moving, our DJs bring a unique blend of genres to cater to all tastes and ages. From romantic ballads for your first dance to high-energy hits that keep the dance floor packed, we know how to create the perfect vibe.",
  },
  audio: {
    title: "Professional Audio",
    desc: "Elevate your event with top-tier professional audio services from F1rst Class Events. Specializing in weddings, birthdays, corporate events, and more, we provide crystal-clear sound, expert equipment setup, and seamless audio management. Ensure every word and note is heard perfectly with F1rst Class Events' reliable and high-quality audio solutions. Book now for flawless sound at your next event!",
  },
  mc: {
    title: "MC Hosting",
    desc: "Make your event unforgettable with premier MC services from F1rst Class Events. Our experienced and charismatic MCs are experts in engaging audiences, ensuring smooth transitions, and keeping the energy high throughout your event. Whether it's a wedding, birthday, corporate gathering, or any special occasion, F1rst Class Events provides professional and dynamic MC services that add a touch of class and excitement. Book now and let us make your event extraordinary!",
  },
  wedding: {
    title: "Weddings",
    desc: "Make your wedding unforgettable with premier MC services from F1rst Class Events. Our experienced and charismatic MCs excel at engaging guests, ensuring seamless transitions, and keeping the celebration lively and organized. From heartfelt introductions to coordinating key moments, F1rst Class Events provides professional and dynamic MC services that add elegance and excitement to your special day. Book now and let us make your wedding a perfect and memorable celebration!",
  },
  birthday: {
    title: "Birthdays",
    desc: "Celebrate your birthday or Sweet 16 in style with premier MC services from F1rst Class Events. Our lively and engaging MCs are experts at creating a fun and vibrant atmosphere, ensuring seamless transitions, and keeping the party energy high. Whether it’s a milestone birthday or a Sweet 16 celebration, F1rst Class Events provides professional and dynamic MC services that make your event unforgettable. Book now and let us make your special day truly extraordinary!",
  },
  fx: {
    title: "Special FX",
    desc: "Enhance your event with stunning special effects from F1rst Class Events. Our top-of-the-line fog machines, lighting, and other special FX create an unforgettable atmosphere, adding a touch of magic to weddings, birthdays, corporate events, and more. Whether you want a dramatic entrance, an ethereal dance floor, or a captivating visual display, F1rst Class Events delivers professional and reliable special effects that elevate your celebration to the next level. Book now and let us transform your event into a mesmerizing experience!",
  },
  lighting: {
    title: "Lighting",
    desc: "Illuminate your event with spectacular lighting services from F1rst Class Events. Our expert lighting design transforms any venue into a breathtaking space, perfect for weddings, birthdays, corporate events, and more. Whether you need elegant uplighting, dynamic dance floor effects, or custom light displays, F1rst Class Events provides professional and reliable lighting solutions that enhance the ambiance and elevate your celebration. Book now and let us light up your special occasion with brilliance!",
  },
  decor: {
    title: "Decor",
    desc: "Transform your event with exquisite decor services from F1rst Class Events. Our talented team designs stunning setups that perfectly match your vision for weddings, birthdays, corporate events, and more. From elegant table settings and floral arrangements to unique themed decorations, F1rst Class Events provides professional and creative decor solutions that make your celebration truly unforgettable.",
  },
};
