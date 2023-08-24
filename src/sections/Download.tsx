import { SocialLinks } from "@/constants";

const Download = () => {
  return (
    <section className="padding space-y-14">
      <h2 className="text-4xl font-bold">
        Get Started with CoinTrackr and join our community
      </h2>
      {/* socials icons */}
      <ul className="flex w-full flex-wrap gap-2">
        {SocialLinks.map((social) => (
          <li key={social.title}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="block h-10 w-10 rounded-full bg-white p-2"
            >
              <img src={"/vite.svg"} alt={social.title} />
            </a>
          </li>
        ))}
      </ul>
      <p>Download our app now and embark on a journey to financial wellness.</p>
      {/* Download buttons */}
      <div className="flex flex-col gap-4 md:flex-row">
        <a href="#" className="rounded-full bg-primary px-8 py-4">
          Download for iOS
        </a>
        <a href="#" className="rounded-full bg-primary px-8 py-4">
          Download for Android
        </a>
      </div>
    </section>
  );
};

export default Download;
