import { Service01, Service02, Service03 } from "@/assets/icons";
import { Analysis, ExpenseCategory, Scanner } from "@/assets/images";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

import {
  AtmCard,
  BudgetInsight,
  MobileReceipt,
  VerifiedAccount,
} from "@/assets/icons";

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
    title: "Guide",
    href: "#guide",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

// Metrics about expense tracker app
export const Metrics = [
  {
    value: 20,
    unit: "M+",
    title: "Downloads",
  },
  {
    value: 125,
    unit: "K+",
    title: "Active Users",
  },
  {
    value: 45,
    unit: "K+",
    title: "Reviews",
  },
  {
    value: 12,
    unit: "+",
    title: "Countries",
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

// Features
export const KeyFeatures = [
  {
    title: "Smart Receipt Scanner",
    description:
      "Snap photos of receipts, and our AI extracts details and categorizes expenses for you.",
    image: Scanner,
  },
  {
    title: "Budgeting Made Easy",
    description:
      "AI analyzes your finances, offers personalized budget recommendations, and sends real-time alerts.",
    image: Analysis,
  },
  {
    title: "Expense Categorization",
    description:
      "AI automatically categorizes expenses, saving you time and keeping your records organized",
    image: ExpenseCategory,
  },
];

// Guide steps
export const GuideSteps = [
  {
    title: "Sign Up",
    description: "Create your CoinTrackr account in seconds.",
    image: VerifiedAccount,
  },
  {
    title: "Connect your accounts",
    description: "Link your bank and credit card accounts to CoinTrackr.",
    image: AtmCard,
  },
  {
    title: "Start tracking",
    description:
      "Snap photos of receipts, and let our AI handle the rest. Monitor your expenses and budget effortlessly.",
    image: MobileReceipt,
  },
  {
    title: "Get Insights",
    description:
      "Explore personalized financial insights, set goals, and take control of your financial future.",
    image: BudgetInsight,
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
