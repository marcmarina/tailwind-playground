import { twMerge } from "tailwind-merge";

export const Layout: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <div className={twMerge("w-full max-w-screen-lg h-full", className)}>
      {children}
    </div>
  );
};
