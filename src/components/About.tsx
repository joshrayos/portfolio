import avatar from "../assets/images/avatar.png";
import { motion } from "motion/react";
import Container from "./Container";
import type { FC } from "react";

type Props = {
  onBackToMenu: () => void;
};

const About: FC<Props> = ({ onBackToMenu }) => {
  const now = new Date().getFullYear();
  return (
    <Container>
      <header className="w-full border-b-4 p-3 text-center flex-none">
        <h1 className="text-4xl font-extrabold">ABOUT ME</h1>
      </header>
      <main className="p-6 flex flex-col justify-center text-gb-dark items-center h-full lg:max-w-7xl mx-auto flex-1">
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
              <h2 className="text-2xl font-medium">
                Hi I'm <span className="font-bold">JOSH</span>
              </h2>
              <p className="mt-4">
                With {now - 2022} years of experience. I'm dedicated to build
                fast, and interactive user interfaces using React alongside
                modern frameworks and libraries.
              </p>
              <p className="mt-4">
                For design, I keep it simple to quickly implement styling using
                Tailwind CSS or simply CSS alone, My technical depth extends to
                the full stack I use Node/Express and .NET for API development.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="w-full border-t-4 p-5 flex-none">
        <div className="flex flex-col md:flex-row md:justify-between">
          <button onClick={onBackToMenu} className="text-xl hover:font-bold">
            {"<"} Go Back
          </button>
          <p className="text-xl">
            Press "<strong>Esc</strong>" To Menu
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default About;
