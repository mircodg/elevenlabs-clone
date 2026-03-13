import { HeadphonesIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export function PageHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b px-4 py-4",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="font-semibold text-lg tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
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
