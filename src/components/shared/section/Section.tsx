import React from "react";

type SectionProps = {
  className?: string;
  containerClassname?: string;
  bgColor?: "primary" | "secondary" | "tertiary";
  screenHeight?: boolean;
  children: React.ReactNode;
  fixed?: boolean;
  size?: "small" | "big";
};

export default function Section({
  bgColor = "primary",
  className = "",
  containerClassname = "",
  screenHeight = false,
  children,
  fixed = false,
  size = "small",
}: SectionProps) {
  return (
    <div
      className={`${
        bgColor == "primary"
          ? "bg-bgPrimary dark:bg-darkBgPrimary"
          : bgColor == "secondary"
          ? "bg-bgSecondary dark:bg-darkBgSecondary"
          : "bg-bgTertiary dark:bg-darkBgTertiary"
      } ${screenHeight ? "h-screen" : "min-h-screen"} ${
        fixed ? "fixed top-0 left-0 w-full" : "relative"
      } pt-[calc(var(--header-height)+1.3rem)] pb-5 px-5 ${className}`}
    >
      <div
        className={`${
          size == "small" ? "max-w-[600px]" : "max-w-[900px]"
        }  w-full mx-auto flex-col gap-7 flex ${containerClassname}`}
      >
        {children}
      </div>
    </div>
  );
}
