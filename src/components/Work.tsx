import { motion } from 'motion/react';
import type { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';

type Props = {
  onBackToMenu: () => void;
};

const Work: FC<Props> = ({ onBackToMenu }) => {
  const now = new Date().getFullYear();
  return (
    <>
      <Header>MY EXPERIENCE</Header>
      <MainContainer>
        <div className='content flex flex-col gap-3 lg:flex-row lg:gap-5'>
          <motion.div
            className='flex-1 flex flex-col'
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className='border-4 p-2 md:p-4 flex-1 bg-gb-medium text-center hover:-translate-y-1 duration-400'>
              <h2 className='work-title text-base sm:text-lg md:text-xl font-bold'>
                Line Seiki Philippines, Inc.
              </h2>
              <p>General Trias, Cavite</p>
              <div className='h-1 w-full bg-gb-dark my-2'></div>
              <h3 className='work-subtitle text-sm  sm:text-sm md:text-base mb-3'>
                2024 - {now}
              </h3>
            </div>
          </motion.div>
          <motion.div
            className='flex-1 flex flex-col'
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25,
              delay: 0.1,
            }}
          >
            <div className='border-4 p-4 flex-1  bg-gb-medium text-center hover:-translate-y-1 duration-400'>
              <h2 className='work-title text-base sm:text-lg md:text-xl font-bold'>
                Web Powerhouse Inc.
              </h2>
              <p>Makati, Manila</p>
              <div className='h-1 w-full bg-gb-dark my-2'></div>
              <h3 className='work-subtitle text-sm  sm:text-sm md:text-base mb-3'>
                2022 - 2024
              </h3>
            </div>
          </motion.div>
        </div>
      </MainContainer>
      <Footer isMenu={false} onBackToMenu={onBackToMenu} />
    </>
  );
};

export default Work;
