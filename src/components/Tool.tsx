import type { FC, ReactNode } from "react";

type Props = {
  icon?: unknown;
  text: string;
  children?: ReactNode;
};

const Tool: FC<Props> = ({ text, children }) => {
  return (
    <div className="tool border-4 flex gap-4 justify-start items-center p-3 hover:bg-gb-dark hover:border-gb-dark hover:text-gb-light hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
      <div className="tool-icon text-xl">{children}</div>
      <p>{text}</p>
    </div>
  );
};

export default Tool;
