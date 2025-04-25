import { ReactNode } from "react";

interface MaxWidthContainerProps {
  children: ReactNode;
}

export function MaxWidthContainer({ children }: MaxWidthContainerProps) {
  return (
    <div className="max-w-[1980px] w-full overflow-hidden">{children}</div>
  );
}
