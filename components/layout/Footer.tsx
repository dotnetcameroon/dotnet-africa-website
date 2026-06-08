import Link from "next/link";
import { Logo } from "./Logo";
import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon } from "./SocialIcons";

const cols = [
  {
    title: "Event",
    links: ["Schedule", "Speakers", "Venue", "Travel & stay"],
  },
  {
    title: "Get involved",
    links: ["Register", "Call for papers", "Become a sponsor", "Volunteer"],
  },
  {
    title: "About",
    links: ["Code of conduct", "Past events", "Organizers", "Contact"],
  },
];

const socials = [
  { Icon: XIcon, label: "X", href: "#" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: YouTubeIcon, label: "YouTube", href: "#" },
  { Icon: GitHubIcon, label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2 pb-9 pt-20">
      <div className="container-page">
        <div className="mb-14 grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="my-4 max-w-[300px] text-[14.5px] leading-[1.65] text-ink-dim">
              The first continent-wide .NET conference — built by the community,
              for the community.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-sm border border-line text-ink-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:text-white"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 text-[14px] font-semibold">{col.title}</h5>
              {col.links.map((l) => (
                <Link
                  key={l}
                  href="#"
                  className="mb-2.5 block text-body-sm text-ink-dim transition-all duration-200 hover:pl-1 hover:text-white"
                >
                  {l}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-line pt-7 text-[13.5px] text-ink-dim">
          <span>© 2026 .NET Conf Africa. A community-run event.</span>
          <span>
            Made in <b className="text-brand-green">Africa</b> 🌍
          </span>
        </div>
      </div>
    </footer>
  );
}
