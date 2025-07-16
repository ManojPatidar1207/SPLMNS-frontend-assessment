"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { sidebarItems } from "@/lib/configs";

const AppSidebar: React.FC = () => {
  const { setOpenMobile } = useSidebar();
  const isMobile = useIsMobile();
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>SPLMNS</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    onClick={() => isMobile && setOpenMobile(false)}
                  >
                    <SidebarMenuButton
                      asChild
                      className={cn({
                        "!bg-primary/20 text-primary": isActive,
                      })}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
