import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f]  text-white">
      <div className="max-w-300 mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">KeenKeeper</h2>
          <p className="text-white/70 text-sm max-w-sm">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Social Links</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244d3f] hover:bg-white/90"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244d3f] hover:bg-white/90"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244d3f] hover:bg-white/90"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20"></div>
      <div className="max-w-300 mx-auto flex flex-col lg:flex-row justify-between items-center  py-4 px-6 text-center text-xs text-white/60">
        {/* Bottom Bar */}
        <div className="my-3">© 2026 KeenKeeper. All rights reserved.</div>
        {/* Links */}
        <div className="flex gap-3 text-sm">
          <a href="#" className="text-white/70 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-white/70 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-white/70 hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
