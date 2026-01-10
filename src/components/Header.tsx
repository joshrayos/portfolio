import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return (
    <header className='w-full border-b-4 p-3 text-center flex-none'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold'>
        {children}
      </h1>
    </header>
  );
};

export default Header;
