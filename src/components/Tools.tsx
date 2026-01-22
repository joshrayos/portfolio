import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import Tool from './Tool';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import {
  SiAseprite,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostman,
  SiSqlite,
  SiVite,
} from 'react-icons/si';
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSourcetree,
} from 'react-icons/fa6';
import { BsFiletypeSql } from 'react-icons/bs';
import { VscVscode } from 'react-icons/vsc';
import { motion } from 'motion/react';
import type { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';

type Props = {
  onBackToMenu: () => void;
};

const Tools: FC<Props> = ({ onBackToMenu }) => {
  return (
    <>
      <Header>TOOLS I USE</Header>
      <MainContainer>
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className='text-center mb-2'>
              <p>
                I maintain a versatile, full-stack toolkit, specializing in
                modern front-end architecture and robust API design. This allows
                me to handle every phase of application development, from
                high-performance UI components to complex data management.
              </p>
            </div>
          </motion.div>
          <div className='content flex flex-col md:flex-row md:flex-wrap items-stretch gap-2 mt-3'>
            <motion.div
              className='flex flex-col flex-1'
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
              <div className='tool-card p-4 flex flex-col gap-3 flex-1 border-4 m-3'>
                <div className='tool-card__header mb-2'>
                  <h3 className='font-pix text-lg font-bold'>FRONT-END</h3>
                </div>
                <div className='tool-card__body flex flex-col gap-3'>
                  <Tool text='Tailwind'>
                    <RiTailwindCssFill />
                  </Tool>
                  <Tool text='TypeScript'>
                    <BiLogoTypescript />
                  </Tool>
                  <Tool text='Bootstrap'>
                    <FaBootstrap />
                  </Tool>
                  <Tool text='JavaScript'>
                    <RiJavascriptFill />
                  </Tool>
                  <Tool text='HTML'>
                    <FaHtml5 />
                  </Tool>
                  <Tool text='CSS'>
                    <FaCss3Alt />
                  </Tool>
                  <Tool text='React'>
                    <FaReact />
                  </Tool>
                </div>
              </div>
            </motion.div>
            <motion.div
              className='flex flex-col flex-1'
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
                delay: 0.2,
              }}
            >
              <div className='tool-card p-4 flex flex-col gap-3 flex-1 border-4 m-3'>
                <div className='tool-card__header mb-2'>
                  <h3 className='font-pix text-lg font-bold'>BACK-END</h3>
                </div>
                <div className='tool-card__body flex flex-col gap-3'>
                  <Tool text='Node'>
                    <FaNodeJs />
                  </Tool>
                  <Tool text='Express'>
                    <SiExpress />
                  </Tool>
                  <Tool text='MongoDB'>
                    <SiMongodb />
                  </Tool>
                  <Tool text='PostgreSQL'>
                    <BiLogoPostgresql />
                  </Tool>
                  <Tool text='SQLite'>
                    <SiSqlite />
                  </Tool>
                  <Tool text='MSSQL'>
                    <BsFiletypeSql />
                  </Tool>
                  <Tool text='.NET Core / Framework'>
                    <SiDotnet />
                  </Tool>
                  <Tool text='FastAPI'>
                    <SiFastapi />
                  </Tool>
                </div>
              </div>
            </motion.div>
            <motion.div
              className='flex flex-col flex-1'
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
                delay: 0.3,
              }}
            >
              <div className='tool-card p-4 flex flex-col gap-3 flex-1 border-4 m-3'>
                <div className='tool-card__header mb-2'>
                  <h3 className='font-pix text-lg font-bold'>OTHER TOOLS</h3>
                </div>
                <div className='tool-card__body flex flex-col gap-3'>
                  <Tool text='Git'>
                    <FaGitAlt />
                  </Tool>
                  <Tool text='GitHub'>
                    <FaGithub />
                  </Tool>
                  <Tool text='SourceTree'>
                    <FaSourcetree />
                  </Tool>
                  <Tool text='Vite'>
                    <SiVite />
                  </Tool>
                  <Tool text='VSCode'>
                    <VscVscode />
                  </Tool>
                  <Tool text='Postman'>
                    <SiPostman />
                  </Tool>
                  <Tool text='Aseprite'>
                    <SiAseprite />
                  </Tool>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      </MainContainer>
      <Footer isMenu={false} onBackToMenu={onBackToMenu} />
    </>
  );
};

export default Tools;
