import type { AccentColor } from "./speakers";

export type SessionTag = "KEYNOTE" | "SESSION" | "WORKSHOP" | "PANEL";

export type Session = {
  time: string;
  duration: string;
  tag: SessionTag;
  accent: AccentColor;
  title: string;
  speaker: string;
};

export type Day = {
  label: string;
  date: string;
  sessions: Session[];
};

export const schedule: Day[] = [
  {
    label: "Day 1",
    date: "Nov 24",
    sessions: [
      {
        time: "09:00",
        duration: "45 min",
        tag: "KEYNOTE",
        accent: "red",
        title: "Opening Keynote: The State of .NET in Africa",
        speaker: "Amara Mokoena · Main Hall",
      },
      {
        time: "10:00",
        duration: "30 min",
        tag: "SESSION",
        accent: "green",
        title: "Minimal APIs & Native AOT in .NET 10",
        speaker: "Sipho Dlamini · Track B",
      },
      {
        time: "11:00",
        duration: "3 hrs",
        tag: "WORKSHOP",
        accent: "gold",
        title: "Hands-on: Build an AI Agent with Semantic Kernel",
        speaker: "Kwame Osei · Workshop Room 2",
      },
      {
        time: "14:00",
        duration: "45 min",
        tag: "SESSION",
        accent: "red",
        title: "Blazor & MAUI: One Codebase, Every Platform",
        speaker: "Nadia Tadesse · Track A",
      },
      {
        time: "15:30",
        duration: "45 min",
        tag: "SESSION",
        accent: "green",
        title: "Event-Driven Systems in C# with Dapr",
        speaker: "Amara Mokoena · Track B",
      },
    ],
  },
  {
    label: "Day 2",
    date: "Nov 25",
    sessions: [
      {
        time: "09:30",
        duration: "45 min",
        tag: "KEYNOTE",
        accent: "red",
        title: "AI-Native Development: The Next Decade",
        speaker: "Lerato Molefe · Main Hall",
      },
      {
        time: "11:00",
        duration: "45 min",
        tag: "SESSION",
        accent: "teal",
        title: "Aspire & Observability for Distributed Apps",
        speaker: "Tendai Nkomo · Track A",
      },
      {
        time: "13:00",
        duration: "3 hrs",
        tag: "WORKSHOP",
        accent: "gold",
        title: "Hands-on: Ship a Blazor SPA to Production",
        speaker: "James Mwangi · Workshop Room 1",
      },
      {
        time: "16:00",
        duration: "45 min",
        tag: "SESSION",
        accent: "green",
        title: "Scaling Kubernetes for African Fintech",
        speaker: "Tendai Nkomo · Track B",
      },
    ],
  },
  {
    label: "Day 3",
    date: "Nov 26",
    sessions: [
      {
        time: "10:00",
        duration: "45 min",
        tag: "SESSION",
        accent: "green",
        title: "Open Source & the African Maintainer",
        speaker: "Fatima Adeyemi · Track A",
      },
      {
        time: "11:30",
        duration: "45 min",
        tag: "SESSION",
        accent: "teal",
        title: "Performance Deep-Dive: Spans, Pipes & AOT",
        speaker: "Sipho Dlamini · Track B",
      },
      {
        time: "14:00",
        duration: "60 min",
        tag: "PANEL",
        accent: "gold",
        title: "The Future of .NET in Africa — Community Panel",
        speaker: "All speakers · Main Hall",
      },
      {
        time: "15:30",
        duration: "30 min",
        tag: "KEYNOTE",
        accent: "red",
        title: "Closing & The Road to 2027",
        speaker: "Organizers · Main Hall",
      },
    ],
  },
];

export const accentClasses: Record<
  AccentColor,
  { text: string; bgSoft: string; bg: string; ring: string }
> = {
  red: {
    text: "text-brand-red",
    bgSoft: "bg-brand-red/15",
    bg: "bg-brand-red",
    ring: "ring-brand-red/40",
  },
  green: {
    text: "text-brand-green",
    bgSoft: "bg-brand-green/15",
    bg: "bg-brand-green",
    ring: "ring-brand-green/40",
  },
  gold: {
    text: "text-brand-gold",
    bgSoft: "bg-brand-gold/15",
    bg: "bg-brand-gold",
    ring: "ring-brand-gold/40",
  },
  teal: {
    text: "text-brand-teal",
    bgSoft: "bg-brand-teal/15",
    bg: "bg-brand-teal",
    ring: "ring-brand-teal/40",
  },
};
