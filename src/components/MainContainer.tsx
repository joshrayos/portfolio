import type { FC, ReactElement } from "react";

type Props = {
  children: ReactElement;
};

const MainContainer: FC<Props> = ({ children }) => {
  return (
    <main className="p-2 md:p-4 lg:p-6 flex flex-col justify-center items-center h-full lg:max-w-7xl mx-auto flex-1">
      {children}
    </main>
  );
};

export default MainContainer;
