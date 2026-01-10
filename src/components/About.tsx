import avatar from "../assets/images/avatar.png";
import { motion } from "motion/react";
import Container from "./Container";
import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContainer from "./MainContainer";

type Props = {
  onBackToMenu: () => void;
};

const About: FC<Props> = ({ onBackToMenu }) => {
  const now = new Date().getFullYear();
  return (
    <Container>
      <Header>ABOUT ME</Header>
      <MainContainer>
        <div className="flex flex-col justify-center items-center gap-8 lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <div className="border-4">
              <img
                className="md:h-72 lg:h-96"
                src={avatar}
                alt="my avatar"
              ></img>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.1,
            }}
          >
            <div className="self-center text-center">
              <h2 className="text-xl sm:text-2xl font-medium">
                Hi I'm <span className="font-bold">JOSH</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base">
                With {now - 2022} years of experience. I'm dedicated to build
                fast, and interactive user interfaces using React alongside
                modern frameworks and libraries.
              </p>
              <p className="mt-4 text-sm sm:text-base">
                For design, I keep it simple to quickly implement styling using
                Tailwind CSS or simply CSS alone, My technical depth extends to
                the full stack I use Node/Express and .NET for API development.
              </p>
            </div>
          </motion.div>
        </div>
      </MainContainer>
      <Footer isMenu={false} onBackToMenu={onBackToMenu} />
    </Container>
  );
};

export default About;
