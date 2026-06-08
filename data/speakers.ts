export type AccentColor = "red" | "green" | "gold" | "teal";

export type Speaker = {
  initials: string;
  name: string;
  role: string;
  accent: AccentColor;
  gradient: [string, string];
  badge: string;
  topic: string;
};

export const speakers: Speaker[] = [
  {
    initials: "AM",
    name: "Amara Mokoena",
    role: "Principal Engineer · Microsoft",
    accent: "red",
    gradient: ["#E03131", "#1B7A4B"],
    badge: "KEYNOTE",
    topic: "Cloud-native .NET at scale",
  },
  {
    initials: "KO",
    name: "Kwame Osei",
    role: "Microsoft MVP · Accra",
    accent: "green",
    gradient: ["#1B7A4B", "#F2A900"],
    badge: "AI & ML",
    topic: "AI apps with Semantic Kernel",
  },
  {
    initials: "NT",
    name: "Nadia Tadesse",
    role: "Staff Engineer · Andela",
    accent: "gold",
    gradient: ["#F2A900", "#E03131"],
    badge: "WEB & MOBILE",
    topic: "Blazor & MAUI in production",
  },
  {
    initials: "SD",
    name: "Sipho Dlamini",
    role: "Cloud Architect · AWS",
    accent: "teal",
    gradient: ["#2F9E9E", "#1B7A4B"],
    badge: "CLOUD",
    topic: "Event-driven systems in C#",
  },
  {
    initials: "LM",
    name: "Lerato Molefe",
    role: "ML Engineer · Cape Town",
    accent: "green",
    gradient: ["#2F9E9E", "#E03131"],
    badge: "AI & ML",
    topic: "On-device inference with ML.NET",
  },
  {
    initials: "FA",
    name: "Fatima Adeyemi",
    role: "Community Lead · Lagos",
    accent: "gold",
    gradient: ["#F2A900", "#1B7A4B"],
    badge: "COMMUNITY",
    topic: "Growing a .NET user group",
  },
];
