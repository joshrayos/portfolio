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
            <div className='border-4 p-2 md:p-4 flex-1 bg-gb-medium'>
              <h3 className='work-title text-lg md:text-xl font-bold'>
                Line Seiki Co.Ltd RHQ
              </h3>
              <h4 className='work-subtitle text-base md:text-lg font-semibold mb-3'>
                2024 - {now}
              </h4>
              <div className='h-1 w-full bg-gb-dark my-3'></div>
              <p className='text-sm/loose indent-8'>
                As part of the CoreMES development team, we build a
                comprehensive Manufacturing Execution System design to
                streamline industrial operations for manufacturing companies.
              </p>
              <p className='text-sm/loose mt-2 indent-8'>
                Together. we also developed CoreIO system, that integrates IoT
                devices to monitor equipment health and empower manufacturing
                companies to optimize their Overall Equipment Effectiveness and
                maintenance processes.
              </p>
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
            <div className='border-4 p-4 flex-1  bg-gb-medium'>
              <h3 className='work-title text-xl font-bold'>
                Web Powerhouse Inc.
              </h3>
              <h4 className='work-subtitle text-lg font-semibold mb-3'>
                2022 - 2024
              </h4>
              <div className='h-1 w-full bg-gb-dark my-3'></div>
              <p className='text-sm/loose indent-8'>
                In this agency role, I was instrumental in delivering over{' '}
                <strong className='text-[16px]'>10</strong> full-build projects
                and <strong className='text-[16px]'>50+</strong> templated
                projects for our outsourced client,{' '}
                <strong className='text-[16px]'>Wonderist Agency</strong>.
              </p>
              <p className='text-sm/loose mt-2 indent-8'>
                I specialized in rapid prototyping and component level
                development using a combined stack of{' '}
                <strong className='text-[16px]'>Webflow</strong>,{' '}
                <strong className='text-[16px]'>JavaScript</strong>,
                <strong className='text-[16px]'>jQuery</strong>, and{' '}
                <strong className='text-[16px]'>Webflow CMS</strong>, I
                collaborated directly with designers and project managers to
                efficiently translate complex visual mockups into functional,
                responsive web experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </MainContainer>
      <Footer isMenu={false} onBackToMenu={onBackToMenu} />
    </>
  );
};

export default Work;
