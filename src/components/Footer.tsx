import type { FC } from 'react';

type Props = {
  isMenu: boolean;
  onBackToMenu?: () => void;
};

const Footer: FC<Props> = ({ isMenu, onBackToMenu }) => {
  return (
    <footer className='w-full border-t-4 p-5 flex-none'>
      {isMenu && (
        <div className='flex flex-col gap-2'>
          <p className='text-sm md:text-lg lg:text-xl'>
            Press "<strong>↑↓</strong>" To Navigate
          </p>
          <p className='text-sm md:text-lg lg:text-xl'>
            Press <strong>"ENTER"</strong> To Select
          </p>
        </div>
      )}
      {!isMenu && (
        <div className='flex flex-col md:flex-row md:justify-between'>
          <button onClick={onBackToMenu} className='text-xl hover:font-bold'>
            {'<'} Go Back
          </button>
          <p className='text-xl hidden md:block'>
            Press "<strong>Esc</strong>" To Menu
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
