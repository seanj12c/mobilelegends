import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full text-white text-center md:text-left md:flex justify-between px-10 border-t bg-black border-primary">
      <div className="pb-2">
        <p className="text-xs sm:text-sm py-1">
          Copyright © 2023 Mobile Legends. All rights reserved.
        </p>
      </div>
      <div>
        <ul className="flex justify-center gap-4">
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noreferrer"
          >
            <li className="text-xs sm:text-sm py-1 hover:text-primary">
              User Agreement
            </li>
          </a>
          <a
            href="https://m.mobilelegends.com/en/newsdetail/475"
            target="_blank"
            rel="noreferrer"
          >
            <li className="text-xs sm:text-sm py-1 hover:text-primary">
              Privacy Policy
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
