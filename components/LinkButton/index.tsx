import { cn } from "@/utils/classnames";
import Link from "next/link";
import { type ReactNode } from "react";

export interface LinkButtonProps {
  href: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

// TODO
export const LinkButton = ({
  href,
  children,
  id,
  className,
}: LinkButtonProps) => (
  <Link href={href} id={id} className={cn("nextra-focus", className)}>
    {children}
  </Link>
);
