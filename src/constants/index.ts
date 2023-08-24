import { Service01, Service02, Service03 } from "@/assets/icons";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export const NavLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

// Metrics about expense tracker app
export const Metrics = [
  {
    value: "1M+",
    title: "Downloads",
  },
  {
    value: "100K+",
    title: "Active Users",
  },
  {
    value: "4.8",
    title: "Rating",
  },
  {
    value: "100+",
    title: "Reviews",
  },
];

// Social links of expense tracker app
export const SocialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: FacebookIcon,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: LinkedinIcon,
  },
  {
    title: "Github",
    href: "https://github.com/",
    icon: GithubIcon,
  },
];

// Services
export const Services = [
  {
    title: "Track Expense Effectively",
    image: Service01,
    description:
      "Effortlessly track your expenses with our intuitive interface. From receipts to digital transactions, Our app keeps everything organized.",
  },
  {
    title: "Optimize Your Budget",
    image: Service02,
    description:
      "Use Predictive Budgeting to receive personalized insights into your spending habits. Stay on budget and work towards your financial goals.",
  },
  {
    title: "Anytime, Anywhere",
    image: Service03,
    description:
      "Access CoinTrackr from your smartphone or computer. Manage your finances on the go and have your data synchronized across devices.",
  },
];

// FAQ questions and answers
export const FAQ = [
  {
    question: "How do I get started with CoinTrackr?",
    answer:
      "Getting started with CoinTrackr is easy! Simply download the app from the App Store or Play Store, create an account, and follow the on-screen prompts to link your bank and credit card accounts. You can also manually enter cash expenses. Once set up, start tracking your expenses effortlessly.",
  },
  {
    question: "Is my financial data safe with CoinTrackr?",
    answer:
      "Absolutely. We take data security seriously. CoinTrackr uses state-of-the-art encryption to protect your financial information. Your data is stored securely, and we never share it with third parties.",
  },
  {
    question: "Can I use CoinTrackr on multiple devices?",
    answer:
      "Yes, you can. CoinTrackr is designed to be flexible. You can access your account and sync your data across multiple devices, whether it's your smartphone or computer. Your financial information is always up to date.",
  },
  {
    question: "Does CoinTrackr offer customer support?",
    answer:
      "Absolutely. Our customer support team is available 24/7 to assist you with any questions or issues you may have. Feel free to reach out to us via email at support@smartspendapp.com or through our in-app help center.",
  },
  {
    question: "What if I need help with budgeting or financial advice?",
    answer:
      "CoinTrackr's Predictive Budgeting feature provides personalized budget recommendations based on your spending habits and financial goals. If you need further assistance, you can also explore our in-app financial insights or contact our support team for guidance.",
  },
];
