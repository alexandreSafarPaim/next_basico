import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  links: LayoutLinks[];
}
interface LayoutLinks {
  href: string;
  text: string;
}

export const Layout = ({ children, title, links }: LayoutProps) => {
  return (
    <main className="flex h-screen flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="p-2 bg-slate-600 text-white font-bold w-full flex justify-between">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </header>
      <div className="flex-1 overflow-y-auto flex flex-col p-8 bg-gray-100">{children}</div>
    </main>
  );
};
