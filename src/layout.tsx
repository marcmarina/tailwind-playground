export const Layout: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <div className={`w-full max-w-screen-lg h-full ${className}`}>
      {children}
    </div>
  );
};
