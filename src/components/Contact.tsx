import { motion } from "motion/react";
import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContainer from "./MainContainer";

type Props = {
  onBackToMenu: () => void;
};

const Contact: FC<Props> = ({ onBackToMenu }) => {
  return (
    <>
      <Header>CONTACT ME</Header>
      <MainContainer>
        <div className="content text-center flex flex-col items-center">
          <motion.div
            className="flex flex-col flex-1"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className="contact-card flex flex-col md:max-w-2xl border-4 p-6">
              <p className="mb-3 text-lg md:text-xl">
                Whether you have a project idea, or an inquiry, I'd love to hear
                it from you.{" "}
              </p>
              <div className="h-1 w-full bg-gb-dark my-3"></div>
              <div className="contact-card__btns flex flex-row flex-wrap justify-center gap-4">
                <a
                  className="border-4 w-48 h-16 p-3 bg-gb-medium text-2xl text-center align-middle hover:bg-gb-deep hover:border-gb-deep hover:text-gb-light"
                  href="mailto:enrickorayos@gmail.com"
                >
                  MAIL
                </a>
                <a
                  className="border-4 w-48 h-16 p-3 bg-gb-medium text-2xl text-center align-middle hover:bg-gb-deep hover:border-gb-deep hover:text-gb-light"
                  href="./RAYOS-RESUME-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RESUME
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </MainContainer>
      <Footer isMenu={false} onBackToMenu={onBackToMenu} />
    </>
  );
};

export default Contact;
