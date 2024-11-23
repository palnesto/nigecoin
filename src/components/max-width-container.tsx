import { ReactNode } from "react";

interface MaxWidthContainerProps {
  children: ReactNode;
}
export function MaxWidthContainer({ children }: MaxWidthContainerProps) {
  return <div className="max-w-5xl w-full bg-red-500">{children}</div>;
}
