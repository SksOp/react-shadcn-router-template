import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: clsx.ClassValue;
}) {
  return (
    <main
      className={cn(
        "w-full bg-background flex justify-center items-center ",
        className
      )}
    >
      <div className=" max-w-7xl w-full">{children}</div>
    </main>
  );
}

export default Container;
