import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="hidden md:flex flex-col py-20 justify-between bg-[#3a3b3c]">
      <div className="text-center flex justify-between items-center px-80 space-x-20 text-white">
        <div className="">&copy;2024 Bird, Inc. All rights reserved.</div>
        <div className="md:flex">
          <Globe className="h-6 w-6 text-white" />
          <div className="ml-2">Terms & Conditions</div>
        </div>
        <div className="md:flex space-x-2">
          <Link
            className="bg-black p-3 rounded-full"
            href={"https://twitter.com"}
            passHref
            target="_blank"
          >
            <Twitter className="h-6 w-6 text-white" />
          </Link>
          <Link
            className="bg-black p-3 rounded-full"
            href={"https://youtube.com"}
            passHref
            target="_blank"
          >
            <Youtube className="h-6 w-6 text-white" />
          </Link>
          <Link
            className="bg-black p-3 rounded-full"
            href={"https://linkedin.com"}
            passHref
            target="_blank"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </Link>
          <Link
            className="bg-black p-3 rounded-full"
            href={"https://facebook.com"}
            passHref
            target="_blank"
          >
            <Facebook className="h-6 w-6 text-white" />
          </Link>
          <Link
            className="bg-black p-3 rounded-full"
            href={"https://instagram.com"}
            passHref
            target="_blank"
          >
            <Instagram className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
