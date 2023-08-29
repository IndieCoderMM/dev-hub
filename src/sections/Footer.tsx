import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/constants";
import { Send } from "lucide-react";
import { sphereVariant, staggerContainer } from "@/lib/motion";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Subscription Successful!",
      description: "You have successfully subscribed to our newsletter.",
    });
  };
  return (
    <footer className="padding space-y-10 bg-secondary lg:relative lg:mt-20">
      <div className="left-1/2 top-0 mx-auto w-full space-y-8 rounded-md bg-primary px-4 py-12 lg:absolute lg:w-[60%] lg:-translate-x-1/2 lg:-translate-y-1/2">
        <h2 className="text-center text-4xl font-bold">
          Subscribe to our NewsLetter!
        </h2>
        <p className="text-center">
          Join our newsletter to receive the latest updates, financial tips, and
          exclusive offers directly in your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto w-full lg:w-[60%]">
          <div className="flex w-full items-center rounded-md border border-white py-2 pl-4 pr-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-lg outline-none"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-1 rounded-md bg-accent p-2 transition-all hover:scale-105"
            >
              <Send />
              <span className="hidden lg:inline-block">Subscribe</span>
            </button>
          </div>
        </form>
      </div>
      <div className="max-container mx-auto flex flex-col justify-between lg:flex-row">
        <div className="mt-20 flex h-5 items-center justify-center gap-4">
          <a
            href="#about"
            className="text-xl transition-colors hover:text-accent"
          >
            About
          </a>
          <Separator orientation="vertical" />
          <a
            href="mailto:support@billioapp.com"
            className="text-xl transition-colors hover:text-accent"
          >
            Contact
          </a>
        </div>
        {/* Social icons */}
        <motion.ul
          variants={staggerContainer(0.1, 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {SocialLinks.map(({ href, title, icon: Icon }, index) => (
            <motion.li
              variants={sphereVariant("left", 0.5 * index, 0.85)}
              whileHover={{ y: -5 }}
              key={index}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl"
              >
                <Icon />
                <span className="sr-only">{title}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Separator />
      <div className="max-container mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row">
        <p className="text-center text-lg">
          Copyright &copy; {new Date().getFullYear()} Billio. All rights
          reserved.
        </p>
        <div className="flex h-5 items-center justify-center gap-4">
          <a href="#" className="text-lg transition-colors hover:text-accent">
            Terms of Service
          </a>
          <Separator orientation="vertical" />
          <a href="#" className="text-lg transition-colors hover:text-accent">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
