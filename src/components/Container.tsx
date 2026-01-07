import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <div className="flex flex-col flex-1">{children}</div>;
};

export default Container;
