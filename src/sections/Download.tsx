import { SocialLinks } from "@/constants";

const Download = () => {
  return (
    <section className="padding space-y-14">
      <h2 className="text-4xl font-bold">
        Get Started with CoinTrackr and join our community
      </h2>
      {/* socials icons */}
      <ul className="flex w-full flex-wrap gap-2">
        {SocialLinks.map(({ title, href, icon: Icon }) => (
          <li key={title}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className=" flex h-16 w-16 items-center justify-center rounded-full bg-primary p-2"
            >
              <Icon size={30} />
              <span className="sr-only">{title}</span>
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
