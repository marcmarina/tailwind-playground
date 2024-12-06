import React from "react";

function App() {
  return (
    <Layout>
      <div className="bg-white m-3 shadow-md hover:shadow-xl rounded-lg flex flex-col gap-2">
        <div className="flex flex-row justify-center">
          <div className="bg-red-700 rounded-b-xl h-10 w-1/6"></div>
        </div>
        <div className="h-[200px]"></div>
      </div>
    </Layout>
  );
}

export default App;

const Layout: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={`w-full max-w-screen-lg h-full ${className}`}>
      {children}
    </div>
  );
};
