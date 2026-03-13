"use client";

import { useUser } from "@clerk/nextjs";
import { HeadphonesIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const { isLoaded, user } = useUser();

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <p className="text-muted-foreground text-sm">Nice to see you</p>
        <h1 className="font-semibold text-2xl tracking-tight lg:text-3xl">
          {isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."}
        </h1>
      </div>
      <div className="hidden items-center gap-3 lg:flex">
        <Button asChild size="sm" variant="outline">
          <Link href={"mailto:support@resonance.com"}>
            <ThumbsUpIcon />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href={"mailto:support@resonance.com"}>
            <HeadphonesIcon />
            <span className="hidden lg:block">Need Help?</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
