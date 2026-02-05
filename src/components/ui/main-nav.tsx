 "use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary",
          isActive("/")
            ? "text-foreground after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-foreground/80"
            : "text-muted-foreground"
        )}
      >
        Overview
      </Link>
      <Link
        href="/markets"
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary",
          isActive("/markets")
            ? "text-foreground after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-foreground/80"
            : "text-muted-foreground"
        )}
      >
        Markets
      </Link>
      <Link
        href="/alerts"
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary",
          isActive("/alerts")
            ? "text-foreground after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-foreground/80"
            : "text-muted-foreground"
        )}
      >
        Alerts
      </Link>
      <Link
        href="/settings"
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary",
          isActive("/settings")
            ? "text-foreground after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-foreground/80"
            : "text-muted-foreground"
        )}
      >
        Settings
      </Link>
    </nav>
  )
}
