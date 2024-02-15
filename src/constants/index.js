import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import members1 from "../assets/members1.png";
import members2 from "../assets/members2.png";
import members3 from "../assets/members3.png";
import achievements1 from "../assets/achievements1.png";
import achievements2 from "../assets/achievements2.png";
import achievements3 from "../assets/achievements3.png";
import achievements4 from "../assets/achievements4.png";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "service", title: "Service" },
  { id: "feature", title: "Feature" },
  { id: "product", title: "Product" },
  { id: "testimonial", title: "Testimonial" },
  { id: "faq", title: "FAQ" },
];

export const clients = [
  { id: "client-1", logo: client1 },
  { id: "client-2", logo: client2 },
  { id: "client-3", logo: client3 },
  { id: "client-4", logo: client4 },
  { id: "client-5", logo: client5 },
  { id: "client-6", logo: client6 },
];

export const members = [
  {
    id: "member1",
    title: "Members Organisations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: members1,
  },
  {
    id: "member2",
    title: "National Associations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: members2,
  },
  {
    id: "member3",
    title: "Clubs And Groups",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: members3,
  },
];

export const achievementsData = [
  { id: "achievement_1", title: "Members", value: "2,245,341", icon: achievements1 },
  { id: "achievement_2", title: "Clubs", value: "46,328", icon: achievements2 },
  { id: "achievement_3", title: "Event Bookings", value: "828,867", icon: achievements3 },
  { id: "achievement_4", title: "Payments", value: "1,926,436", icon: achievements4 },
];

export const communityUpdateCardData = [
  { title: "Creating Streamlined Safeguarding Processes with OneRen" },
  { title: "What are your safeguarding responsibilities and how can you manage them?" },
  { title: "Revamping the Membership Model with Triathlon Australia" },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About us", link: "https://www.nexcent/about-us/" },
      {
        name: "Blog",
        link: "https://www.nexcent/blog/",
      },
      {
        name: "Contact us",
        link: "https://www.nexcent/contact-us/",
      },
      {
        name: "Testimonials",
        link: "https://www.nexcent/testimonials/",
      },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help center", link: "https://www.nextcent/help/" },
      { name: "Terms of service", link: "https://www.nextcent/terns-of-service/" },
      { name: "Legal", link: "https://www.nextcent/legal/" },
      { name: "Privacy policy", link: "https://www.nextcent/privacy/" },
      { name: "Status", link: "https://www.nextcent/status/" },
    ],
  },
];
