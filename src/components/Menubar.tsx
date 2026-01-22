import { useCallback, useEffect, useState, type FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';

type PageOption = {
  id: 'about' | 'experience' | 'tools' | 'contact';
  label: string;
};

type Props = {
  onNavigate: (page: 'about' | 'experience' | 'tools' | 'contact') => void;
};

const PAGES: PageOption[] = [
  { id: 'about', label: 'ABOUT ME' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'tools', label: 'TOOLS' },
  { id: 'contact', label: 'CONTACT' },
];

const Menubar: FC<Props> = ({ onNavigate }) => {
  const [selextedIdx, setSelectedIdx] = useState(0);

  const handleConfirm = useCallback(() => {
    const selection = PAGES[selextedIdx].id;
    onNavigate(selection);
  }, [selextedIdx, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'w') {
        setSelectedIdx((prev) => (prev > 0 ? prev - 1 : PAGES.length - 1));
      } else if (e.key === 'ArrowDown' || e.key === 's') {
        setSelectedIdx((prev) => (prev < PAGES.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter') {
        handleConfirm();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleConfirm]);

  return (
    <>
      <Header>MY PORTFOLIO</Header>
      <MainContainer>
        <ul className='flex flex-col items-center lg:gap-8 lg:w-2xl text-lg md:text-2xl lg:text-3xl'>
          {PAGES.map((page, index) => (
            <li
              className={`flex-1 p-2 lg:w-md cursor-pointer ${
                index === selextedIdx ? 'text-gb-light bg-gb-deep' : ''
              }`}
              key={page.id}
              onMouseEnter={() => setSelectedIdx(index)}
              onClick={handleConfirm}
            >
              <p>
                {index === selextedIdx ? '>' : ''} {page.label}
              </p>
            </li>
          ))}
        </ul>
      </MainContainer>
      <Footer isMenu={true} />
    </>
  );
};

export default Menubar;
