import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";

const TitleText = ({ text, styles = "" }: { text: string; styles: string }) => {
  return (
    <motion.h2
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`text-4xl font-bold ${styles}`}
    >
      {text}
    </motion.h2>
  );
};

export default TitleText;
