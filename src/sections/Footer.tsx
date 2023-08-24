import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/constants";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="padding space-y-10">
      <div className="w-full space-y-8 rounded-md bg-primary p-8">
        <h2 className="text-center text-4xl font-bold">
          Subscribe to our NewsLetter!
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <form action="">
          <div className="flex items-center rounded-md border border-white py-2 pl-4 pr-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-lg outline-none"
            />
            <button type="submit" className="rounded-md bg-blue-500 p-2">
              <span className="sr-only">Subscribe</span>
              <Send />
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="mt-20 flex h-5 items-center justify-center gap-4">
          <a href="#" className="text-xl">
            About
          </a>
          <Separator orientation="vertical" />
          <a href="#" className="text-xl">
            Contact
          </a>
        </div>
        {/* Social icons */}
        <ul className="mt-10 flex items-center justify-center gap-4">
          {SocialLinks.map(({ href, title, icon: Icon }, index) => (
            <li key={index}>
              <a
                href={href}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl"
              >
                <Icon />
                <span className="sr-only">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Separator />

      <p className="text-center text-lg">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="flex h-5 items-center justify-center gap-4">
        <a href="#" className="text-xl">
          Terms of Service
        </a>
        <Separator orientation="vertical" />
        <a href="#" className="text-xl">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
