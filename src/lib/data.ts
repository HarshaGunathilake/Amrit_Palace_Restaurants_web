export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export type Dish = {
  id: string;
  name: string[];
  description: string;
  price: string;
  dietary?: string;
  image: string;
};

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: "tandoori-chicken",
    name: ["CHARRED TANDOORI", "CHICKEN"],
    description: "Smoked yogurt, Kashmiri chilli, charred lemon",
    price: "£24",
    image: "/media/dish-tandoori.jpg",
  },
  {
    id: "lamb-rogan-josh",
    name: ["SLOW LAMB", "ROGAN JOSH"],
    description: "Kashmiri chilli, fennel, toasted spice, saffron rice",
    price: "£29",
    image: "/media/dish-lamb.jpg",
  },
  {
    id: "truffle-dal",
    name: ["BLACK DAL", "WITH TRUFFLE"],
    description: "Twenty-four hour lentils, cream, aged ghee",
    price: "£18",
    dietary: "V",
    image: "/media/dish-dal.jpg",
  },
  {
    id: "sea-bass",
    name: ["MALABAR", "SEA BASS"],
    description: "Coconut, curry leaf, green mango, mustard oil",
    price: "£31",
    image: "/media/dish-seabass.jpg",
  },
  {
    id: "saffron-kulfi",
    name: ["SAFFRON", "KULFI"],
    description: "Pistachio, cardamom, rose, honeycomb shard",
    price: "£12",
    dietary: "V",
    image: "/media/dish-kulfi.jpg",
  },
];

export type MenuCategory =
  | "STARTERS"
  | "TANDOOR"
  | "MAINS"
  | "VEGETARIAN"
  | "RICE & BREAD"
  | "DESSERTS";

export const MENU_CATEGORIES: MenuCategory[] = [
  "STARTERS",
  "TANDOOR",
  "MAINS",
  "VEGETARIAN",
  "RICE & BREAD",
  "DESSERTS",
];

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  category: MenuCategory;
};

export const MENU_ITEMS: MenuItem[] = [
  { name: "AMRIT SEEKH KEBAB", price: "£14", description: "Spiced lamb mince, charcoal grill, mint chutney", category: "STARTERS", image: "/media/dish-tandoori.jpg" },
  { name: "CRAB & COCONUT SAMOSA", price: "£13", description: "Blue crab, curry leaf, toasted coconut, tamarind", category: "STARTERS", image: "/media/gallery-05.jpg" },
  { name: "SMOKED AUBERGINE BHARTA", price: "£11", description: "Charred aubergine, mustard oil, crisp shallot", category: "STARTERS", image: "/media/dish-dal.jpg" },
  { name: "TANDOORI KING PRAWN", price: "£19", description: "Ajwain, garlic, charred lime, mint yogurt", category: "TANDOOR", image: "/media/dish-seabass.jpg" },
  { name: "PANEER TIKKA", price: "£15", description: "Smoked paneer, bell pepper, saffron marinade", category: "TANDOOR", image: "/media/dish-lamb.jpg" },
  { name: "TANDOORI QUAIL", price: "£17", description: "Whole quail, black cardamom, roasted garlic", category: "TANDOOR", image: "/media/gallery-04.jpg" },
  { name: "CHARRED TANDOORI CHICKEN", price: "£24", description: "Smoked yogurt, Kashmiri chilli, charred lemon", category: "MAINS", image: "/media/dish-tandoori.jpg" },
  { name: "SLOW LAMB ROGAN JOSH", price: "£29", description: "Kashmiri chilli, fennel, toasted spice, saffron rice", category: "MAINS", image: "/media/dish-lamb.jpg" },
  { name: "MALABAR SEA BASS", price: "£31", description: "Coconut, curry leaf, green mango, mustard oil", category: "MAINS", image: "/media/dish-seabass.jpg" },
  { name: "BLACK DAL WITH TRUFFLE", price: "£18", description: "Twenty-four hour lentils, cream, aged ghee", category: "VEGETARIAN", image: "/media/dish-dal.jpg" },
  { name: "MALAI KOFTA", price: "£17", description: "Paneer & cashew dumplings, saffron tomato cream", category: "VEGETARIAN", image: "/media/dish-lamb.jpg" },
  { name: "CHARRED OKRA", price: "£14", description: "Mustard seed, curry leaf, coconut flake", category: "VEGETARIAN", image: "/media/gallery-05.jpg" },
  { name: "SAFFRON BIRYANI", price: "£22", description: "Basmati, whole spice, crisp onion, mint raita", category: "RICE & BREAD", image: "/media/gallery-01.jpg" },
  { name: "GARLIC NAAN", price: "£6", description: "Charcoal tandoor, roasted garlic, coriander", category: "RICE & BREAD", image: "/media/gallery-04.jpg" },
  { name: "STEAMED BASMATI", price: "£5", description: "Whole spice, ghee", category: "RICE & BREAD", image: "/media/gallery-01.jpg" },
  { name: "SAFFRON KULFI", price: "£12", description: "Pistachio, cardamom, rose, honeycomb shard", category: "DESSERTS", image: "/media/dish-kulfi.jpg" },
  { name: "GULAB JAMUN", price: "£10", description: "Cardamom syrup, clotted cream", category: "DESSERTS", image: "/media/dish-kulfi.jpg" },
  { name: "DARK CHOCOLATE & CHAI", price: "£11", description: "Spiced chai ganache, milk chocolate crumb", category: "DESSERTS", image: "/media/gallery-10.jpg" },
];

export type GalleryImage = {
  src: string;
  alt: string;
  size: "portrait" | "landscape" | "square" | "wide";
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/media/gallery-01.jpg", alt: "The dining room at dusk", size: "landscape" },
  { src: "/media/gallery-02.jpg", alt: "Charred tandoori chicken, close detail", size: "portrait" },
  { src: "/media/gallery-03.jpg", alt: "Hand-finished table setting", size: "square" },
  { src: "/media/gallery-04.jpg", alt: "The tandoor at full heat", size: "portrait" },
  { src: "/media/gallery-05.jpg", alt: "Spice trays before service", size: "square" },
  { src: "/media/gallery-06.jpg", alt: "The dining room, full width", size: "wide" },
  { src: "/media/gallery-07.jpg", alt: "Pouring wine table-side", size: "portrait" },
  { src: "/media/gallery-08.jpg", alt: "Facade at night", size: "landscape" },
  { src: "/media/gallery-09.jpg", alt: "Plating the sea bass", size: "square" },
  { src: "/media/gallery-10.jpg", alt: "Candlelight detail", size: "portrait" },
];

export type Review = {
  quote: string;
  name: string;
  platform: string;
  date: string;
};

export const REVIEWS: Review[] = [
  { quote: "An extraordinary dining experience. Every dish felt intentional.", name: "SOPHIA M.", platform: "GOOGLE", date: "AUGUST 2026" },
  { quote: "The tandoori chicken alone is worth the flight back to Galle.", name: "DANIEL R.", platform: "TRIPADVISOR", date: "JULY 2026" },
  { quote: "Warm, unhurried, precise. This is hospitality done properly.", name: "AISHA K.", platform: "GOOGLE", date: "JUNE 2026" },
  { quote: "A room that understands restraint. The lamb rogan josh is unforgettable.", name: "THOMAS L.", platform: "GOOGLE", date: "MAY 2026" },
  { quote: "Booked for an anniversary, already planning the next visit.", name: "PRIYA N.", platform: "TRIPADVISOR", date: "APRIL 2026" },
];

export const RATING_SUMMARY = {
  score: "4.9 / 5",
  label: "EXCELLENT",
  count: "based on 640+ guest reviews",
};

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  { question: "Do you accept walk-ins?", answer: "We hold a small number of tables for walk-ins each evening, though reservations are strongly recommended, particularly Friday through Sunday." },
  { question: "What is your cancellation policy?", answer: "We ask for at least 24 hours' notice. Parties of six or more require 48 hours' notice to release the table without charge." },
  { question: "Do you accommodate dietary requirements?", answer: "Yes. Please note any allergies or dietary needs when booking and our kitchen will prepare accordingly." },
  { question: "Is there a dress code?", answer: "Smart casual. We simply ask that guests dress in a way that matches the evening we're trying to create." },
  { question: "Do you offer private dining?", answer: "Our private room seats up to fourteen guests, with a tasting menu built around your evening. Enquire via the contact section." },
  { question: "Do you accommodate large groups?", answer: "Groups of up to twelve can be seated in the main room; larger parties are welcomed in our private dining room." },
  { question: "Is parking available?", answer: "Limited on-site parking is available, with additional public parking a short walk from the restaurant." },
];

export const RESERVATION_TIMES = [
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
] as const;

export const SEATING_PREFERENCES = [
  "No preference",
  "Main dining room",
  "Private dining room",
  "By the window",
] as const;

export type MealPeriod = {
  id: "lunch" | "dinner";
  label: string;
  hours: string;
  /** Service window in 24-hour minutes-from-midnight, inclusive of both ends. */
  startMinutes: number;
  endMinutes: number;
};

export const MEAL_PERIODS: MealPeriod[] = [
  { id: "lunch", label: "Lunch", hours: "12:00 PM – 3:00 PM", startMinutes: 12 * 60, endMinutes: 15 * 60 },
  { id: "dinner", label: "Dinner", hours: "5:30 PM – 11:00 PM", startMinutes: 17 * 60 + 30, endMinutes: 23 * 60 },
];

export type TimeSlot = { hour12: string; minute: string; ampm: "AM" | "PM"; totalMinutes: number };

/** Every bookable slot within a meal period's service window, in `stepMinutes` increments. */
export function getTimeSlots(period: MealPeriod, stepMinutes = 30): TimeSlot[] {
  const slots: TimeSlot[] = [];
  for (let t = period.startMinutes; t <= period.endMinutes; t += stepMinutes) {
    const hour24 = Math.floor(t / 60) % 24;
    const minute = t % 60;
    const ampm: "AM" | "PM" = hour24 >= 12 ? "PM" : "AM";
    const hour12 = String(hour24 % 12 === 0 ? 12 : hour24 % 12);
    slots.push({ hour12, minute: String(minute).padStart(2, "0"), ampm, totalMinutes: t });
  }
  return slots;
}

export type CountryCode = { name: string; dial: string; iso2: string };

// Sri Lanka is listed first as the restaurant's home country / form default;
// everything else follows in alphabetical order, as in a standard country picker.
export const COUNTRY_CODES: CountryCode[] = [
  { name: "Sri Lanka", dial: "+94", iso2: "LK" },
  { name: "Afghanistan", dial: "+93", iso2: "AF" },
  { name: "Albania", dial: "+355", iso2: "AL" },
  { name: "Algeria", dial: "+213", iso2: "DZ" },
  { name: "American Samoa", dial: "+1", iso2: "AS" },
  { name: "Andorra", dial: "+376", iso2: "AD" },
  { name: "Angola", dial: "+244", iso2: "AO" },
  { name: "Anguilla", dial: "+1", iso2: "AI" },
  { name: "Antigua & Barbuda", dial: "+1", iso2: "AG" },
  { name: "Argentina", dial: "+54", iso2: "AR" },
  { name: "Armenia", dial: "+374", iso2: "AM" },
  { name: "Aruba", dial: "+297", iso2: "AW" },
  { name: "Australia", dial: "+61", iso2: "AU" },
  { name: "Austria", dial: "+43", iso2: "AT" },
  { name: "Azerbaijan", dial: "+994", iso2: "AZ" },
  { name: "Bahamas", dial: "+1", iso2: "BS" },
  { name: "Bahrain", dial: "+973", iso2: "BH" },
  { name: "Bangladesh", dial: "+880", iso2: "BD" },
  { name: "Barbados", dial: "+1", iso2: "BB" },
  { name: "Belarus", dial: "+375", iso2: "BY" },
  { name: "Belgium", dial: "+32", iso2: "BE" },
  { name: "Belize", dial: "+501", iso2: "BZ" },
  { name: "Benin", dial: "+229", iso2: "BJ" },
  { name: "Bermuda", dial: "+1", iso2: "BM" },
  { name: "Bhutan", dial: "+975", iso2: "BT" },
  { name: "Bolivia", dial: "+591", iso2: "BO" },
  { name: "Bosnia & Herzegovina", dial: "+387", iso2: "BA" },
  { name: "Botswana", dial: "+267", iso2: "BW" },
  { name: "Brazil", dial: "+55", iso2: "BR" },
  { name: "Brunei", dial: "+673", iso2: "BN" },
  { name: "Bulgaria", dial: "+359", iso2: "BG" },
  { name: "Burkina Faso", dial: "+226", iso2: "BF" },
  { name: "Burundi", dial: "+257", iso2: "BI" },
  { name: "Cambodia", dial: "+855", iso2: "KH" },
  { name: "Cameroon", dial: "+237", iso2: "CM" },
  { name: "Canada", dial: "+1", iso2: "CA" },
  { name: "Cape Verde", dial: "+238", iso2: "CV" },
  { name: "Cayman Islands", dial: "+1", iso2: "KY" },
  { name: "Central African Republic", dial: "+236", iso2: "CF" },
  { name: "Chad", dial: "+235", iso2: "TD" },
  { name: "Chile", dial: "+56", iso2: "CL" },
  { name: "China", dial: "+86", iso2: "CN" },
  { name: "Colombia", dial: "+57", iso2: "CO" },
  { name: "Comoros", dial: "+269", iso2: "KM" },
  { name: "Congo", dial: "+242", iso2: "CG" },
  { name: "Congo (DRC)", dial: "+243", iso2: "CD" },
  { name: "Costa Rica", dial: "+506", iso2: "CR" },
  { name: "Croatia", dial: "+385", iso2: "HR" },
  { name: "Cuba", dial: "+53", iso2: "CU" },
  { name: "Cyprus", dial: "+357", iso2: "CY" },
  { name: "Czech Republic", dial: "+420", iso2: "CZ" },
  { name: "Denmark", dial: "+45", iso2: "DK" },
  { name: "Djibouti", dial: "+253", iso2: "DJ" },
  { name: "Dominica", dial: "+1", iso2: "DM" },
  { name: "Dominican Republic", dial: "+1", iso2: "DO" },
  { name: "Ecuador", dial: "+593", iso2: "EC" },
  { name: "Egypt", dial: "+20", iso2: "EG" },
  { name: "El Salvador", dial: "+503", iso2: "SV" },
  { name: "Equatorial Guinea", dial: "+240", iso2: "GQ" },
  { name: "Eritrea", dial: "+291", iso2: "ER" },
  { name: "Estonia", dial: "+372", iso2: "EE" },
  { name: "Eswatini", dial: "+268", iso2: "SZ" },
  { name: "Ethiopia", dial: "+251", iso2: "ET" },
  { name: "Fiji", dial: "+679", iso2: "FJ" },
  { name: "Finland", dial: "+358", iso2: "FI" },
  { name: "France", dial: "+33", iso2: "FR" },
  { name: "French Polynesia", dial: "+689", iso2: "PF" },
  { name: "Gabon", dial: "+241", iso2: "GA" },
  { name: "Gambia", dial: "+220", iso2: "GM" },
  { name: "Georgia", dial: "+995", iso2: "GE" },
  { name: "Germany", dial: "+49", iso2: "DE" },
  { name: "Ghana", dial: "+233", iso2: "GH" },
  { name: "Gibraltar", dial: "+350", iso2: "GI" },
  { name: "Greece", dial: "+30", iso2: "GR" },
  { name: "Greenland", dial: "+299", iso2: "GL" },
  { name: "Grenada", dial: "+1", iso2: "GD" },
  { name: "Guam", dial: "+1", iso2: "GU" },
  { name: "Guatemala", dial: "+502", iso2: "GT" },
  { name: "Guinea", dial: "+224", iso2: "GN" },
  { name: "Guinea-Bissau", dial: "+245", iso2: "GW" },
  { name: "Guyana", dial: "+592", iso2: "GY" },
  { name: "Haiti", dial: "+509", iso2: "HT" },
  { name: "Honduras", dial: "+504", iso2: "HN" },
  { name: "Hong Kong", dial: "+852", iso2: "HK" },
  { name: "Hungary", dial: "+36", iso2: "HU" },
  { name: "Iceland", dial: "+354", iso2: "IS" },
  { name: "India", dial: "+91", iso2: "IN" },
  { name: "Indonesia", dial: "+62", iso2: "ID" },
  { name: "Iran", dial: "+98", iso2: "IR" },
  { name: "Iraq", dial: "+964", iso2: "IQ" },
  { name: "Ireland", dial: "+353", iso2: "IE" },
  { name: "Israel", dial: "+972", iso2: "IL" },
  { name: "Italy", dial: "+39", iso2: "IT" },
  { name: "Jamaica", dial: "+1", iso2: "JM" },
  { name: "Japan", dial: "+81", iso2: "JP" },
  { name: "Jordan", dial: "+962", iso2: "JO" },
  { name: "Kazakhstan", dial: "+7", iso2: "KZ" },
  { name: "Kenya", dial: "+254", iso2: "KE" },
  { name: "Kiribati", dial: "+686", iso2: "KI" },
  { name: "Kuwait", dial: "+965", iso2: "KW" },
  { name: "Kyrgyzstan", dial: "+996", iso2: "KG" },
  { name: "Laos", dial: "+856", iso2: "LA" },
  { name: "Latvia", dial: "+371", iso2: "LV" },
  { name: "Lebanon", dial: "+961", iso2: "LB" },
  { name: "Lesotho", dial: "+266", iso2: "LS" },
  { name: "Liberia", dial: "+231", iso2: "LR" },
  { name: "Libya", dial: "+218", iso2: "LY" },
  { name: "Liechtenstein", dial: "+423", iso2: "LI" },
  { name: "Lithuania", dial: "+370", iso2: "LT" },
  { name: "Luxembourg", dial: "+352", iso2: "LU" },
  { name: "Macau", dial: "+853", iso2: "MO" },
  { name: "Madagascar", dial: "+261", iso2: "MG" },
  { name: "Malawi", dial: "+265", iso2: "MW" },
  { name: "Malaysia", dial: "+60", iso2: "MY" },
  { name: "Maldives", dial: "+960", iso2: "MV" },
  { name: "Mali", dial: "+223", iso2: "ML" },
  { name: "Malta", dial: "+356", iso2: "MT" },
  { name: "Marshall Islands", dial: "+692", iso2: "MH" },
  { name: "Mauritania", dial: "+222", iso2: "MR" },
  { name: "Mauritius", dial: "+230", iso2: "MU" },
  { name: "Mexico", dial: "+52", iso2: "MX" },
  { name: "Micronesia", dial: "+691", iso2: "FM" },
  { name: "Moldova", dial: "+373", iso2: "MD" },
  { name: "Monaco", dial: "+377", iso2: "MC" },
  { name: "Mongolia", dial: "+976", iso2: "MN" },
  { name: "Montenegro", dial: "+382", iso2: "ME" },
  { name: "Montserrat", dial: "+1", iso2: "MS" },
  { name: "Morocco", dial: "+212", iso2: "MA" },
  { name: "Mozambique", dial: "+258", iso2: "MZ" },
  { name: "Myanmar", dial: "+95", iso2: "MM" },
  { name: "Namibia", dial: "+264", iso2: "NA" },
  { name: "Nauru", dial: "+674", iso2: "NR" },
  { name: "Nepal", dial: "+977", iso2: "NP" },
  { name: "Netherlands", dial: "+31", iso2: "NL" },
  { name: "New Zealand", dial: "+64", iso2: "NZ" },
  { name: "Nicaragua", dial: "+505", iso2: "NI" },
  { name: "Niger", dial: "+227", iso2: "NE" },
  { name: "Nigeria", dial: "+234", iso2: "NG" },
  { name: "North Korea", dial: "+850", iso2: "KP" },
  { name: "North Macedonia", dial: "+389", iso2: "MK" },
  { name: "Norway", dial: "+47", iso2: "NO" },
  { name: "Oman", dial: "+968", iso2: "OM" },
  { name: "Pakistan", dial: "+92", iso2: "PK" },
  { name: "Palau", dial: "+680", iso2: "PW" },
  { name: "Palestine", dial: "+970", iso2: "PS" },
  { name: "Panama", dial: "+507", iso2: "PA" },
  { name: "Papua New Guinea", dial: "+675", iso2: "PG" },
  { name: "Paraguay", dial: "+595", iso2: "PY" },
  { name: "Peru", dial: "+51", iso2: "PE" },
  { name: "Philippines", dial: "+63", iso2: "PH" },
  { name: "Poland", dial: "+48", iso2: "PL" },
  { name: "Portugal", dial: "+351", iso2: "PT" },
  { name: "Puerto Rico", dial: "+1", iso2: "PR" },
  { name: "Qatar", dial: "+974", iso2: "QA" },
  { name: "Romania", dial: "+40", iso2: "RO" },
  { name: "Russia", dial: "+7", iso2: "RU" },
  { name: "Rwanda", dial: "+250", iso2: "RW" },
  { name: "Saint Lucia", dial: "+1", iso2: "LC" },
  { name: "Samoa", dial: "+685", iso2: "WS" },
  { name: "San Marino", dial: "+378", iso2: "SM" },
  { name: "Saudi Arabia", dial: "+966", iso2: "SA" },
  { name: "Senegal", dial: "+221", iso2: "SN" },
  { name: "Serbia", dial: "+381", iso2: "RS" },
  { name: "Seychelles", dial: "+248", iso2: "SC" },
  { name: "Sierra Leone", dial: "+232", iso2: "SL" },
  { name: "Singapore", dial: "+65", iso2: "SG" },
  { name: "Slovakia", dial: "+421", iso2: "SK" },
  { name: "Slovenia", dial: "+386", iso2: "SI" },
  { name: "Solomon Islands", dial: "+677", iso2: "SB" },
  { name: "Somalia", dial: "+252", iso2: "SO" },
  { name: "South Africa", dial: "+27", iso2: "ZA" },
  { name: "South Korea", dial: "+82", iso2: "KR" },
  { name: "South Sudan", dial: "+211", iso2: "SS" },
  { name: "Spain", dial: "+34", iso2: "ES" },
  { name: "Sudan", dial: "+249", iso2: "SD" },
  { name: "Suriname", dial: "+597", iso2: "SR" },
  { name: "Sweden", dial: "+46", iso2: "SE" },
  { name: "Switzerland", dial: "+41", iso2: "CH" },
  { name: "Syria", dial: "+963", iso2: "SY" },
  { name: "Taiwan", dial: "+886", iso2: "TW" },
  { name: "Tajikistan", dial: "+992", iso2: "TJ" },
  { name: "Tanzania", dial: "+255", iso2: "TZ" },
  { name: "Thailand", dial: "+66", iso2: "TH" },
  { name: "Timor-Leste", dial: "+670", iso2: "TL" },
  { name: "Togo", dial: "+228", iso2: "TG" },
  { name: "Tonga", dial: "+676", iso2: "TO" },
  { name: "Trinidad & Tobago", dial: "+1", iso2: "TT" },
  { name: "Tunisia", dial: "+216", iso2: "TN" },
  { name: "Turkey", dial: "+90", iso2: "TR" },
  { name: "Turkmenistan", dial: "+993", iso2: "TM" },
  { name: "Turks & Caicos Islands", dial: "+1", iso2: "TC" },
  { name: "Tuvalu", dial: "+688", iso2: "TV" },
  { name: "Uganda", dial: "+256", iso2: "UG" },
  { name: "Ukraine", dial: "+380", iso2: "UA" },
  { name: "United Arab Emirates", dial: "+971", iso2: "AE" },
  { name: "United Kingdom", dial: "+44", iso2: "GB" },
  { name: "United States", dial: "+1", iso2: "US" },
  { name: "Uruguay", dial: "+598", iso2: "UY" },
  { name: "Uzbekistan", dial: "+998", iso2: "UZ" },
  { name: "Vanuatu", dial: "+678", iso2: "VU" },
  { name: "Vatican City", dial: "+379", iso2: "VA" },
  { name: "Venezuela", dial: "+58", iso2: "VE" },
  { name: "Vietnam", dial: "+84", iso2: "VN" },
  { name: "Yemen", dial: "+967", iso2: "YE" },
  { name: "Zambia", dial: "+260", iso2: "ZM" },
  { name: "Zimbabwe", dial: "+263", iso2: "ZW" },
];
