/** biome-ignore-all lint/style/noNestedTernary: <> */
"use client";

import { OrganizationSwitcher, UserButton, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AudioLinesIcon } from "@/components/ui/audio-lines";

import { HomeIcon } from "@/components/ui/home";
import { LayoutPanelTopIcon } from "@/components/ui/layout-panel-top";
import { SendIcon } from "@/components/ui/send";
import { SettingsIcon } from "@/components/ui/settings";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { VolumeIcon } from "@/components/ui/volume";

interface MenuItem {
  href?: string;
  icon: React.ReactNode;
  onClick?: () => void;
  title: string;
}

interface NavSectionProps {
  items: MenuItem[];
  label?: string;
  pathname: string;
}

function NavSection({ label, items, pathname }: NavSectionProps) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel className="text-[13px] text-muted-foreground uppercase">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild={!!item.href}
                className="h-9 border border-transparent px-3 py-2 font-medium text-[13px] tracking-tight data-[active=true]:border-border"
                isActive={
                  item.href
                    ? item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)
                    : false
                }
                onClick={item.onClick}
                tooltip={item.title}
              >
                {item.href ? (
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <>
                    {item.icon}
                    <span>{item.title}</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const clerk = useClerk();

  const mainMenuItems: MenuItem[] = [
    { title: "Dashboard", href: "/", icon: <HomeIcon /> },
    { title: "Explor voices", href: "/voices", icon: <LayoutPanelTopIcon /> },
    {
      title: "Text to speech",
      href: "/text-to-speech",
      icon: <AudioLinesIcon />,
    },
    { title: "Voice cloning", icon: <VolumeIcon /> },
  ];

  const otherMenuItems: MenuItem[] = [
    {
      title: "Settings",
      icon: <SettingsIcon />,
      onClick: () => clerk.openOrganizationProfile(),
    },
    {
      title: "Help and support",
      href: "mailto:support@resonance.com",
      icon: <SendIcon />,
    },
  ];

  return (
    <Sidebar className="h-full" collapsible="icon">
      <SidebarHeader className="flex flex-col gap-4 pt-4">
        <div className="flex items-center gap-2 pl-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
          <Image
            alt="Resonance logo"
            className="rounded-sm"
            height={24}
            src="logo.svg"
            width={24}
          />
          <span className="font-semibold text-foreground text-lg tracking-tighter group-data-[collapsible=icon]:hidden">
            Resonance
          </span>
          <SidebarTrigger className="ml-auto lg:hidden" />
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <OrganizationSwitcher
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  organizationSwitcherTrigger:
                    "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1!",
                  organizationPreview: "gap-2!",
                  organizationPreviewAvatarBox: "size-6! rounded-sm!",
                  organizationPreviewTextContainer:
                    "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                  organizationPreviewMainIdentifier: "text-[13px]!",
                  organizationSwitcherTriggerIcon:
                    "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!",
                },
              }}
              fallback={
                <Skeleton className="h-8.5 w-full rounded-md border bg-white group-data-[collapsible=icon]:size-8" />
              }
              hidePersonal
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="border-border border-b border-dashed" />
      <SidebarContent>
        <NavSection items={mainMenuItems} pathname={pathname} />
        <NavSection items={otherMenuItems} label="Others" pathname={pathname} />
      </SidebarContent>
      <div className="border-border border-t border-dashed" />
      <SidebarFooter className="gap-3 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <UserButton
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  userButtonTrigger:
                    "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden!",
                  userButtonBox: "flex-row-reverse! gap-2!",
                  userButtonOuterIdentifier:
                    "tracking-tight! text-[13px]! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
                  userButtonAvatarBox: "size-6!",
                },
              }}
              fallback={
                <Skeleton className="h-8.5 w-full rounded-md border border-border bg-white group-data-[collapsible=icon]:size-8" />
              }
              showName
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

// 2:17:14
