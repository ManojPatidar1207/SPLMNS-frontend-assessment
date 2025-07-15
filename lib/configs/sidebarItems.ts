import { Home, Waves } from "lucide-react";

export const sidebarItems: { title: string; url: string; icon: React.FC }[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Floating tags",
    url: "/floating-tags",
    icon: Waves,
  },
];
